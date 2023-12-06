package com.fisbank.service.impl;

import com.fisbank.dto.model.Color;
import com.fisbank.dto.model.Image;
import com.fisbank.dto.model.Product;
import com.fisbank.dto.model.Size;
import com.fisbank.dto.response.ProductResponse;
import com.fisbank.dto.response.ProductSize;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.mapper.*;
import com.fisbank.service.ProductService;
import com.google.common.base.Strings;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private CategoryMapper categoryMapper;

    @Autowired
    private ColorMapper colorMapper;

    @Autowired
    private ImageMapper imageMapper;

    @Autowired
    private SizeMapper sizeMapper;

    private void validateProduct(Product product){
        Assert.notNull(product, "Product must not be null");
        Assert.notNull(product.getName(), "Product name must not be null");
        Assert.notNull(product.getCategoryId(), "Product category is needed");
        Assert.notNull(product.getDescription(), "Product description must not be null");
        Assert.isTrue(product.getPrice()>0,"Product price must be greater than 0");

//        List<Color> colors = product.getColors();
//        Assert.notNull(colors, "Colors list must not be null");
//        Assert.isTrue(!colors.isEmpty(), "Colors list must not be empty");
//        for (Color color : colors) {
//            validateColor(color);
//        }
    }

    private void validateColor(Color color){
        Assert.notNull(color, "Color must not be null");
        Assert.notNull(color.getName(), "Color name must not be null");
        List<Image> images = color.getImages();
        Assert.notNull(images, "Images list must not be null");
        for (Image image: images){
            validateImage(image);
        }
        List<Size> sizes = color.getSize();
        Assert.notNull(sizes, "Size list must not be null");
        for(Size size: sizes){
            validateSize(size);
        }
    }
    private void validateImage(Image image){
        Assert.notNull(image, "Image must not be null");
        Assert.notNull(image.getName(), "Image name must not be null");
        Assert.notNull(image.getContent(), "Image content must not be null");
    }
    private void validateSize(Size size){
        Assert.notNull(size, "Size must not be null");
        Assert.notNull(size.getSize(), "Size name must not be null");
        Assert.notNull(size.getQuantity(), "Size quantity must not be null");
        Assert.notNull(size.getPrice(), "Size price must not be null");
    }


    @Override
    public BaseResponse addNewProduct(Product product)  {
        BaseResponse baseResponse = new BaseResponse();
        validateProduct(product);
        System.out.println(product.getName());

        int nextIdProduct = 0;

        if(productMapper.totalProduct()>0){
            int productId = productMapper.getNextIdProduct();
            nextIdProduct = productId +1;
        }

        product.setId(nextIdProduct);
        if(categoryMapper.getCategoryId(product.getCategoryId())==0){
            baseResponse.setErrorDesc("Phân loại không tồn tại");
            return baseResponse;
        }


        int b = productMapper.insertProduct(product);
        System.out.println(product);
//        for (Color color : product.getColors()) {
//            color.setProductId(nextIdProduct);
//            System.out.println(color);
//            colorMapper.insertColor(color);
//
//            for (Image image : color.getImages()) {
//                image.setColorId(image.getColorId());
//                System.out.println(image.getColorId());
//                imageMapper.insertImage(image);
//            }
//
//            for (Size size : color.getSize()) {
//                size.setColorId(size.getColorId());
//                sizeMapper.insertSize(size);
//            }
//        }
        if(b!=0){
            baseResponse.setData(product);
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

    @Override
    public BaseResponse getAllProduct(ProductResponse productResponse) {
        BaseResponse baseResponse = new BaseResponse();
        List<ProductResponse> list = productMapper.getListProduct(productResponse);
        System.out.println(productMapper.getListProduct(productResponse));
//        System.out.println(productImageMapper.getImageByProductId());
//        list.add(productResponse);
        int totalUser = productMapper.totalProduct();
        baseResponse.setTotalRecords(totalUser);
        baseResponse.setData(list);
        return baseResponse;
    }


}
