package com.fisbank.controller;

import com.fisbank.dto.response.UserResponse;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<BaseResponse> createUser(@RequestBody UserResponse response){
        return new ResponseEntity<>(userService.createUser(response), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<BaseResponse> login(@RequestBody UserResponse response){
        return new ResponseEntity<>(userService.login(response), HttpStatus.OK);
    }
}