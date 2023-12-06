package com.fisbank.mapper;

import com.fisbank.dto.model.Color;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ColorMapper {
    int insertColor(Color color);
}
