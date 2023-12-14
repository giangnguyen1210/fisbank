package com.fisbank.mapper;

import com.fisbank.dto.response.RoleResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RoleMapper {
    List<RoleResponse> getListRole();
}
