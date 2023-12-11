package com.fisbank.dto.response;

import lombok.Data;

import java.util.Date;

@Data
public class CategoryResponse {
    private int id;
    private String name;

    private Date createdAt;
    private Date updatedAt;
}
