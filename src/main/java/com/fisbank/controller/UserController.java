package com.fisbank.controller;

import com.fisbank.dto.request.UserRequest;
import com.fisbank.dto.response.UserResponse;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<BaseResponse> createUser(@RequestBody UserResponse response){
        return new ResponseEntity<>(userService.createUser(response), HttpStatus.OK);
    }

    @PostMapping("/list")
    public ResponseEntity<BaseResponse> getUser(@RequestBody UserResponse response){
        return new ResponseEntity<>(userService.getListUser(response), HttpStatus.OK);
    }

    @PostMapping("/edit")
    public ResponseEntity<BaseResponse> editUser(@RequestBody UserResponse response){
        return new ResponseEntity<>(userService.editUser(response), HttpStatus.OK);
    }

    @PostMapping(value = "/delete")
    public ResponseEntity<BaseResponse> deleteBankById(@RequestBody UserResponse user)   {
        return new ResponseEntity<>(userService.deleteUser(user.getId()), HttpStatus.OK);
    }

}
