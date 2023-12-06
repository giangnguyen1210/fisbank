package com.fisbank.mapper;

import com.fisbank.dto.model.Image;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ImageMapper {
    void insertImage(Image image);
}
