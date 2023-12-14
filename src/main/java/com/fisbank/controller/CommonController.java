package com.fisbank.controller;

import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin/common")
public class CommonController {
    @Autowired
    private BaseService baseService;
    @PostMapping(value = "/list-role")
    public ResponseEntity<BaseResponse> getListRole(){
        return new ResponseEntity<>(baseService.getListRole(), HttpStatus.OK);
    }
    @PostMapping(value = "/list-status")
    public ResponseEntity<BaseResponse> getListStatus(){
        return new ResponseEntity<>(baseService.getListStatus(), HttpStatus.OK);
    }
}
