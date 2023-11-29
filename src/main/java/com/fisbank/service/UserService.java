package com.fisbank.service;

import com.fisbank.dto.request.UserRequest;
import com.fisbank.dto.response.UserResponse;
import com.fisbank.dto.response.base.BaseResponse;
import org.springframework.http.ResponseEntity;

public interface UserService {
    BaseResponse createUser(UserResponse userRequest);

    BaseResponse getListUser(UserResponse request);

    BaseResponse editUser(UserResponse response);

    BaseResponse deleteUser(String id);

}
