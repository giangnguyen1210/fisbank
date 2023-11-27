package com.fisbank.mapper;

import com.fisbank.dto.response.CategoryResponse;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CategoryMapper {
    int addNewCategory(CategoryResponse categoryResponse);

    int checkCategoryExist(CategoryResponse categoryResponse);

    int totalCategory();

    int updateCategory(CategoryResponse categoryResponse);

    int getCategoryId(int id);
}