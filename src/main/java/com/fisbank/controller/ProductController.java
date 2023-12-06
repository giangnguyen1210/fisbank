package com.fisbank.controller;

import com.fisbank.dto.model.Product;
import com.fisbank.dto.request.ProductRequest;
import com.fisbank.dto.response.ProductResponse;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping(value="/add",consumes = "application/json")
    public ResponseEntity<BaseResponse> addNewProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.addNewProduct(product), HttpStatus.OK);
    }

//    @PostMapping(value="/image",consumes = "application/json")
//    public ResponseEntity<Image> getImageByProductId(@RequestBody int id) {
//        return new ResponseEntity<>(imageProductService.getImageByProductId(id), HttpStatus.OK);
//    }

    @PostMapping("/list")
    public ResponseEntity<BaseResponse> listProduct(@RequestBody ProductRequest productRequest){
        return new ResponseEntity<>(productService.getAllProduct(productRequest), HttpStatus.OK);
    }

}
