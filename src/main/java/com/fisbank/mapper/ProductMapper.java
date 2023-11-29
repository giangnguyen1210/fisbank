package com.fisbank.mapper;

import com.fisbank.dto.response.ProductResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
    int addNewProduct(ProductResponse productResponse);

    int checkProductExist(ProductResponse productResponse);

    int getNextIdProduct();

    List<ProductResponse> getListProduct(ProductResponse productResponse);

    int totalProduct();
}
