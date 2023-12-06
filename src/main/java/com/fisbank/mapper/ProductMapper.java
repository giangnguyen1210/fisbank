package com.fisbank.mapper;

import com.fisbank.dto.model.Product;
import com.fisbank.dto.request.ProductRequest;
import com.fisbank.dto.model.Image;
import com.fisbank.dto.response.ProductResponse;
import com.fisbank.dto.response.ProductSize;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {

    int insertProduct(Product product);

    int checkProductExist(ProductResponse productResponse);

    int getNextIdProduct();

    List<ProductResponse> getListProduct(ProductResponse productResponse);

    List<ProductRequest> getListProductDetail(ProductResponse productResponse);

    int totalProduct();

    int insertSize(ProductSize productSize);
    int insertImage(Image image);

    ProductSize getProductTotalById(ProductSize productSize);

    int insertProductTotal(int productId);
}
