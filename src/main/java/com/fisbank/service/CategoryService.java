package com.fisbank.service;

import com.fisbank.dto.response.CategoryResponse;
import com.fisbank.dto.response.base.BaseResponse;

public interface CategoryService {
    BaseResponse addNewCategory(CategoryResponse categoryResponse);
    BaseResponse updateCategory(CategoryResponse categoryResponse);

    BaseResponse getAllCategory(CategoryResponse categoryResponse);

    BaseResponse getCategoryById(String category);

//    BaseResponse getCurrentId();
}
