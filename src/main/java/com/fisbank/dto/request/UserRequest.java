package com.fisbank.dto.request;

import com.fisbank.dto.response.UserResponse;
import lombok.Data;

@Data
public class UserRequest extends UserResponse {
    private int page;
    private int limit;
}
