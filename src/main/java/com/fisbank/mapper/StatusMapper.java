package com.fisbank.mapper;

import com.fisbank.dto.response.RoleResponse;
import com.fisbank.dto.response.StatusResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface StatusMapper {
    List<StatusResponse> getListStatus();
}
