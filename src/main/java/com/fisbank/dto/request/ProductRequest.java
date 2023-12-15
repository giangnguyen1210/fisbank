package com.fisbank.dto.request;

import com.fisbank.dto.model.Product;
import lombok.Data;

import java.util.Date;

@Data
public class ProductRequest {
    private int id;
    private String productId;
    private String name;
    private String description;
    private int discount;
    private int rate;
    private int quantity;
    private int sold;
    private int remain;
    private double price;
    private String material;
    private Date createdAt;
    private Date updatedAt;
    private int categoryId;
    private int colorId;
    private int sizeId;
    private String image;
    private int page;
    private int limit;
    private String keyword;
    private String format;
}
