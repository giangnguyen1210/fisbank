package com.fisbank.service;

import com.fisbank.dto.response.UserResponse;
import com.fisbank.dto.response.base.BaseResponse;

public interface AuthService {
    BaseResponse login(UserResponse response);
    BaseResponse register(UserResponse userRequest);

}
