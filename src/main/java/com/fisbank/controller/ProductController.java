package com.fisbank.controller;

import com.fisbank.dto.request.ColorRequest;
import com.fisbank.dto.request.ProductRequest;
import com.fisbank.dto.request.SizeRequest;
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

    // product controller

    @PostMapping(value="/add",consumes = "application/json")
    public ResponseEntity<BaseResponse> addNewProduct(@RequestBody ProductRequest product) {
        return new ResponseEntity<>(productService.addNewProduct(product), HttpStatus.OK);
    }
    @PostMapping("/list")
    public ResponseEntity<BaseResponse> listProduct(@RequestBody ProductRequest productRequest){
        return new ResponseEntity<>(productService.getAllProduct(productRequest), HttpStatus.OK);
    }

    @PostMapping("/detail")
    public ResponseEntity<BaseResponse> productDetail(@RequestBody ProductRequest productRequest){
        return new ResponseEntity<>(productService.getProductDetail(productRequest), HttpStatus.OK);
    }

    @PostMapping("/item-detail")
    public ResponseEntity<BaseResponse> getItemDetail(@RequestBody ProductRequest productRequest){
        return new ResponseEntity<>(productService.getItemDetail(productRequest), HttpStatus.OK);
    }

    @PostMapping("/edit")
    public ResponseEntity<BaseResponse> editProduct(@RequestBody ProductRequest productRequest){
        return new ResponseEntity<>(productService.editProduct(productRequest), HttpStatus.OK);
    }

    @PostMapping("/edit-detail")
    public ResponseEntity<BaseResponse> editProductDetail(@RequestBody ProductRequest productRequest){
        return new ResponseEntity<>(productService.editProductDetail(productRequest), HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity<BaseResponse> deleteProduct(@RequestBody ProductRequest productRequest){
        return new ResponseEntity<>(productService.deleteProduct(productRequest), HttpStatus.OK);
    }

    @PostMapping("/delete-detail")
    public ResponseEntity<BaseResponse> deleteProductDetail(@RequestBody ProductRequest productRequest){
        return new ResponseEntity<>(productService.deleteProductDetail(productRequest), HttpStatus.OK);
    }

    // color controller
    @PostMapping(value="/color/add",consumes = "application/json")
    public ResponseEntity<BaseResponse> addNewColor(@RequestBody ColorRequest colorRequest) {
        return new ResponseEntity<>(productService.addNewColor(colorRequest), HttpStatus.OK);
    }

    @PostMapping(value="/color/list",consumes = "application/json")
    public ResponseEntity<BaseResponse> getListColor(@RequestBody ColorRequest colorRequest) {
        return new ResponseEntity<>(productService.getListColor(colorRequest), HttpStatus.OK);
    }

    // size controller
    @PostMapping(value="/size/add",consumes = "application/json")
    public ResponseEntity<BaseResponse> addNewSize(@RequestBody SizeRequest sizeRequest) {
        return new ResponseEntity<>(productService.addNewSize(sizeRequest), HttpStatus.OK);
    }

    @PostMapping(value="/size/list",consumes = "application/json")
    public ResponseEntity<BaseResponse> getListSize(@RequestBody SizeRequest sizeRequest) {
        return new ResponseEntity<>(productService.getListSize(sizeRequest), HttpStatus.OK);
    }



}
