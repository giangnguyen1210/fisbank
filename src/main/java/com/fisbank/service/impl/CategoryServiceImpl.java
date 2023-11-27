package com.fisbank.service.impl;

import com.fisbank.dto.response.CategoryResponse;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.mapper.CategoryMapper;
import com.fisbank.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryMapper categoryMapper;
    @Override
    public BaseResponse addNewCategory(CategoryResponse categoryResponse) {
        BaseResponse baseResponse = new BaseResponse();
        if(categoryResponse.getName()!=null){
            if(categoryMapper.checkCategoryExist(categoryResponse)==1){
                baseResponse.setErrorCode("category đã tồn tại");
                return baseResponse;
            }
            int b = categoryMapper.addNewCategory(categoryResponse);
            if(b!=0){
                baseResponse.setData(categoryResponse);
                baseResponse.setErrorCode(HttpStatus.OK.name());
                baseResponse.setTotalRecords(categoryMapper.totalCategory());
                baseResponse.setErrorDesc("Thêm mới thành công");
            }
        }
        return baseResponse;
    }

    @Override
    public BaseResponse updateCategory(CategoryResponse categoryResponse) {
        BaseResponse baseResponse = new BaseResponse();
        if(categoryResponse.getName()!=null){
            if(categoryMapper.checkCategoryExist(categoryResponse)==1 ){
                baseResponse.setErrorCode("category đã tồn tại");
                return baseResponse;
            }
            int b = categoryMapper.updateCategory(categoryResponse);
            if (b !=0) {
                baseResponse.setData(categoryResponse);
                baseResponse.setErrorCode(HttpStatus.OK.name());
                baseResponse.setTotalRecords(categoryMapper.totalCategory());
                baseResponse.setErrorDesc("chỉnh sửa thành công");
            } else {
                baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
                baseResponse.setErrorDesc("chỉnh sửa thất bại");
                return baseResponse;
            }
        }
        return null;
    }

    @Override
    public BaseResponse getAllCategory(CategoryResponse categoryResponse) {
        return null;
    }
}
