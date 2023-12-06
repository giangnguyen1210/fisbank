package com.fisbank.service;

import com.fisbank.dto.model.Product;
import com.fisbank.dto.request.ProductRequest;
import com.fisbank.dto.response.ProductResponse;
import com.fisbank.dto.response.base.BaseResponse;

import java.io.IOException;

public interface ProductService {
    BaseResponse addNewProduct(Product product);
    BaseResponse getAllProduct(ProductResponse productResponse);

}
