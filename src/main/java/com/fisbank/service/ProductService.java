package com.fisbank.service;

import com.fisbank.dto.request.ColorRequest;
import com.fisbank.dto.request.ProductRequest;
import com.fisbank.dto.request.SizeRequest;
import com.fisbank.dto.response.ProductResponse;
import com.fisbank.dto.response.base.BaseResponse;
import net.sf.jasperreports.engine.JRException;

import java.io.FileNotFoundException;

public interface ProductService {
    BaseResponse addNewProduct(ProductRequest productRequest);
    BaseResponse getAllProduct(ProductRequest productRequest);

    BaseResponse getProductDetail(ProductRequest productRequest);
    BaseResponse getItemDetail(ProductRequest productRequest);

    BaseResponse editProduct(ProductRequest productRequest);
    BaseResponse editProductDetail(ProductRequest productRequest);

    BaseResponse deleteProduct(ProductRequest productRequest);
    BaseResponse deleteProductDetail(ProductRequest productRequest);
    BaseResponse exportFileProduct(ProductRequest productRequest) throws JRException, FileNotFoundException;


    BaseResponse addNewColor(ColorRequest colorRequest);


    BaseResponse getListColor(ColorRequest colorRequest);


    BaseResponse addNewSize(SizeRequest sizeRequest);
    BaseResponse getListSize(SizeRequest sizeRequest);





//    BaseResponse insertProductColor(List<Color> colors);

}
