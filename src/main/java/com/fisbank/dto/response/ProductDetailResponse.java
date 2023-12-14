package com.fisbank.dto.response;

import lombok.Data;

@Data
public class ProductDetailResponse {
    private String productId;
    private String name;
    private String description;
    private String material;
    private int rate;
    private String category;
    private int quantity;
    private int sold;
    private int remain;
    private int discount;
    private double price;
    private String image;
    private String size;
    private String color;
    private int colorId;
    private int sizeId;
    private int totalRecords;
}
