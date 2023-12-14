package com.fisbank.mapper;

import com.fisbank.dto.model.Product;
import com.fisbank.dto.request.ProductRequest;
import com.fisbank.dto.response.ProductDetailResponse;
import com.fisbank.dto.response.ProductResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {

    int insertProduct(ProductRequest productRequest);

    int checkProductExist(ProductRequest productRequest);
    List<ProductResponse> getListProduct(ProductRequest productRequest);

    List<ProductDetailResponse> getListProductDetail(ProductRequest productRequest);
    ProductDetailResponse getItemDetail(ProductRequest productRequest);

    int updateProduct(ProductRequest productRequest);

    int updateProductDetail(ProductRequest productRequest);

    int totalProduct();

    int deleteProduct(ProductRequest productRequest);
    int deleteProductDetail(ProductRequest productRequest);



}
