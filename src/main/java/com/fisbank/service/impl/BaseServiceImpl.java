package com.fisbank.service.impl;

import com.fisbank.dto.response.RoleResponse;
import com.fisbank.dto.response.StatusResponse;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.mapper.RoleMapper;
import com.fisbank.mapper.StatusMapper;
import com.fisbank.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BaseServiceImpl implements BaseService {
    @Autowired
    private RoleMapper roleMapper;

    @Autowired
    private StatusMapper statusMapper;
    @Override
    public BaseResponse getListRole(){
        BaseResponse baseResponse = new BaseResponse();
        List<RoleResponse> role = roleMapper.getListRole();
        baseResponse.setData(role);
        return baseResponse;
    }

    @Override
    public BaseResponse getListStatus(){
        BaseResponse baseResponse = new BaseResponse();
        List<StatusResponse> status = statusMapper.getListStatus();
        baseResponse.setData(status);
        return baseResponse;
    }
}
