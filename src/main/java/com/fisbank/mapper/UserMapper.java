package com.fisbank.mapper;

import com.fisbank.dto.request.UserRequest;
import com.fisbank.dto.response.UserResponse;
import org.apache.catalina.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserMapper {
    int createUser(UserResponse userResponse);
    int checkEmailExist(String requestEmail);

    String getNextId();

    int totalUser();
    List<UserResponse> getListUser(UserResponse response);

    int editUser(UserResponse response);
    int delete(String id);
    int countIdUser(UserResponse response);
    int isUserDeleted(String id);
}
