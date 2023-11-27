package com.fisbank.mapper;

import com.fisbank.dto.response.ProductResponse;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ProductMapper {
    int addNewProduct(ProductResponse productResponse);

    int checkProductExist(ProductResponse productResponse);

    int getNextIdProduct();

    int totalProduct();
}
