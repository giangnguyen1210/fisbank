package com.fisbank.controller;

import com.fisbank.dto.response.ProductResponse;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/admin/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping(value="/add",consumes = "application/json")
    public ResponseEntity<BaseResponse> addNewProduct(@RequestBody ProductResponse productResponse) throws IOException {
        return new ResponseEntity(productService.addNewProduct(productResponse), HttpStatus.OK);
    }
}
