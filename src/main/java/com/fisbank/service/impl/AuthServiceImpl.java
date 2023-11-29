package com.fisbank.service.impl;

import com.fisbank.common.CommonService;
import com.fisbank.dto.response.AuthResponse;
import com.fisbank.dto.response.UserResponse;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.mapper.UserMapper;
import com.fisbank.security.JwtGenerator;
import com.fisbank.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
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
    public AuthResponse login(UserResponse response) {

        UserResponse user = userMapper.findByUsername(response.getEmail());
        AuthResponse authResponse = new AuthResponse("");
        if(response.getEmail()==null || response.getPassword()==null){
            authResponse.setErrorCode("Email or password is empty");
        }else{
            if(passwordEncoder.matches(response.getPassword(), user.getPassword())){
                Authentication authentication = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(response.getEmail(), response.getPassword())
                );
                System.out.printf(authentication.getName());
                SecurityContextHolder.getContext().setAuthentication(authentication);
                String token = jwtGenerator.generateToken(authentication);
                authResponse.setAccessToken(token);
                authResponse.setData("Login thanh cong");
            }else{
                authResponse.setErrorCode("Mat khau khong trung khop");
            }

        }
        return authResponse;
    }
    @Override
    public BaseResponse register(UserResponse request) {
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
}
