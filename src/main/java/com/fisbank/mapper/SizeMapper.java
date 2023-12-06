package com.fisbank.mapper;

import com.fisbank.dto.model.Size;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SizeMapper {
    void insertSize(Size size);
}
