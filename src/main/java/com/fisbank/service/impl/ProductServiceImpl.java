package com.fisbank.service.impl;

import com.fisbank.dto.response.Image;
import com.fisbank.dto.response.ProductResponse;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.mapper.CategoryMapper;
import com.fisbank.mapper.ImageMapper;
import com.fisbank.mapper.ProductMapper;
import com.fisbank.service.ProductService;
import com.google.common.base.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private CategoryMapper categoryMapper;

    @Autowired
    private ImageMapper imageMapper;

    @Override
    public BaseResponse addNewProduct(ProductResponse productResponse) throws IOException {
        BaseResponse baseResponse = new BaseResponse();
        System.out.println(productResponse.getName());

        int nextIdProduct = 0;

        if(productResponse==null || Strings.isNullOrEmpty(productResponse.getName())){
            baseResponse.setErrorDesc("Ten is required");
            baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
            return baseResponse;
        }


        if(productMapper.totalProduct()>0){
            int productId = productMapper.getNextIdProduct();
            nextIdProduct = productId +1;
        }
        if(categoryMapper.getCategoryId(productResponse.getCategoryId())==0){
            baseResponse.setErrorDesc("Category id khong ton tai");
            return baseResponse;
        }
        productResponse.setId(nextIdProduct);
        int b = productMapper.addNewProduct(productResponse);
        if(productMapper.checkProductExist(productResponse)>0){
            baseResponse.setErrorDesc("Product đã tồn tại");
            baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
            return baseResponse;
        }
        if(productResponse.getImages()!=null && !productResponse.getImages().isEmpty()){
            for (Image image : productResponse.getImages()) {
                image.setProductId(productResponse.getId());
                imageMapper.insertImage(image);
            }
        }
        if(b!=0){
            baseResponse.setData(productResponse);
            baseResponse.setErrorCode(HttpStatus.OK.name());
            baseResponse.setErrorDesc("Thêm mới thanh cong");
//            baseResponse.setTotalRecords();
        } else {
            baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
            baseResponse.setErrorDesc("Thêm mới thất bại");
            return baseResponse;
        }

        return baseResponse;
    }
}
