package com.fisbank.dto.model;

import lombok.Data;

import java.util.List;

@Data
public class Product {
    private int id;
    private String productId;
    private String name;
    private String description;
    private int categoryId;
    private int rate;
    private double price;
    private String material;
    private int isDeleted;
}
