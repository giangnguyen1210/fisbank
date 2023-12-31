package com.fisbank.dto.response;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class ProductResponse {
    private String productId;
    private String name;
    private int quantity;
    private int sold;
    private int remain;
    private double price;
    private int totalRecords;
    private int page;
    private int limit;
}
