package com.fisbank.dto.response;

import lombok.Data;

@Data
public class UserResponse {
    private String id;
    private String name;
    private String password;
    private String email;
    private String avatar;
    private int roleId;
    private String roleName;
    private int status;
    private String statusName;
    private int isDeleted;
}
