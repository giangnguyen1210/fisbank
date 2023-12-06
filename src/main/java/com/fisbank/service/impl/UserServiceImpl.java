package com.fisbank.service.impl;
import com.fisbank.common.CommonService;
import com.fisbank.dto.response.UserResponse;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.mapper.UserMapper;
import com.fisbank.security.JwtGenerator;
import com.fisbank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.google.common.base.Strings;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private CommonService service;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtGenerator jwtGenerator;
    @Override
    public BaseResponse createUser(UserResponse request) {
        BaseResponse baseResponse = new BaseResponse();
        String hashedPassword = passwordEncoder.encode(request.getPassword());
        request.setPassword(hashedPassword);
        request.setRoleId("1");
        if (request.getName() != null && request.getEmail() != null
        ) {
            String id = "FISBANK-";
            int getNextId = 0;
            if(userMapper.totalUser()>0){
                String userId = userMapper.getNextId();
                System.out.println(userId);
                getNextId = Integer.parseInt(userId.substring(userId.length() - 4))+1;

            }
            String pad = service.padLeft(String.valueOf(getNextId), 4, "0");
            request.setId((id+pad).trim());

            int checkExist = userMapper.checkEmailExist(request.getEmail());
//            int countIdUser = userMapper.countIdUser(request);
//            if(countIdUser>0){
//                baseResponse.setErrorCode("user id da ton tai");
//            }else {
            if (checkExist > 0) {
                baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
                baseResponse.setErrorDesc(
                        "email đã tồn tại"
                );
                return baseResponse;
            }
            int b = userMapper.createUser(request);

            if (b !=0) {
                baseResponse.setData(request);
//                baseResponse.setCreator();
                baseResponse.setErrorCode(HttpStatus.OK.name());
                baseResponse.setTotalRecords(userMapper.totalUser());
                baseResponse.setErrorDesc("Thêm mới thành công");
            } else {
                baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
                baseResponse.setErrorDesc("Thêm mới thất bại");
                return baseResponse;
            }
//            }

        } else {
            baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
            return baseResponse;
        }
        return baseResponse;
    }

    @Override
    public BaseResponse getListUser(UserResponse request) {
        BaseResponse baseResponse = new BaseResponse();
        List<UserResponse> list = userMapper.getListUser(request);
        int totalUser = userMapper.totalUser();
        baseResponse.setTotalRecords(totalUser);
        baseResponse.setData(list);
        return baseResponse;
    }

    @Override
    public BaseResponse editUser(UserResponse request) {
        BaseResponse baseResponse = new BaseResponse();
//        System.out.println(userMapper.isUserDeleted(request.getId()));

        if (request == null || Strings.isNullOrEmpty(request.getName())
                || Strings.isNullOrEmpty(request.getEmail())) {
            return new BaseResponse(String.valueOf(HttpStatus.BAD_REQUEST.value()),
                    "Fields is required");
        }
        if(userMapper.checkEmailExist(request.getEmail())>0){
            baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
            baseResponse.setErrorDesc(
                    "email đã tồn tại"
            );
            return baseResponse;
        }
        int b = userMapper.editUser(request);
        if (b !=0) {
            baseResponse.setData(request);
//                baseResponse.setCreator();
            baseResponse.setErrorCode(HttpStatus.OK.name());
            baseResponse.setTotalRecords(userMapper.totalUser());
            baseResponse.setErrorDesc("chỉnh sửa người dùng thành công");
        } else {
            baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
            baseResponse.setErrorDesc("chỉnh sửa người dùng thất bại");
            return baseResponse;
        }
        return baseResponse;
    }

    @Override
    public BaseResponse deleteUser(String id) {
        BaseResponse baseResponse = new BaseResponse();
        if (id != null && !id.isEmpty()) {
            int rs = userMapper.delete(id);
            if (rs > 0) {
                baseResponse.setData(rs);
                baseResponse.setErrorCode(HttpStatus.OK.name());
                baseResponse.setErrorDesc(
                        "Delete Bank success");
            } else {
                baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
                baseResponse.setErrorDesc(
                        "Delete Bank failed");
                return baseResponse;
            }
        } else {
            baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
            return baseResponse;
        }
        return baseResponse;
    }




}
