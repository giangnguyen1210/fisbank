package com.fisbank.service;

import com.fisbank.dto.response.ProductResponse;
import com.fisbank.dto.response.base.BaseResponse;

import java.io.IOException;

public interface ProductService {
    BaseResponse addNewProduct(ProductResponse productResponse) throws IOException;
}
