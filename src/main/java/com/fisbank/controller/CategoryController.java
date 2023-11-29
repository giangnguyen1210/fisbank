package com.fisbank.controller;

import com.fisbank.dto.response.CategoryResponse;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/test")
    public ResponseEntity<?> test(){
        return new ResponseEntity("test",HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<BaseResponse> addNewCategory(@RequestBody CategoryResponse categoryResponse){
        return new ResponseEntity<>(categoryService.addNewCategory(categoryResponse), HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<BaseResponse> updateCategory(@RequestBody CategoryResponse categoryResponse){
        return new ResponseEntity<>(categoryService.updateCategory(categoryResponse), HttpStatus.OK);
    }
    @PostMapping("/list")
    public ResponseEntity<BaseResponse> listCategory(@RequestBody CategoryResponse categoryResponse){
        return new ResponseEntity<>(categoryService.getAllCategory(categoryResponse), HttpStatus.OK);
    }

}
