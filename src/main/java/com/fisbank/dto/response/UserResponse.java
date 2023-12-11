package com.fisbank.dto.response;

import lombok.Data;

@Data
public class UserResponse {
    private String id;
    private String name;
    private String password;
    private String email;
    private String avatar;
    private String roleId;
    private int isDeleted;
}
