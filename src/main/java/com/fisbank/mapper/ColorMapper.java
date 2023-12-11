package com.fisbank.mapper;

import com.fisbank.dto.request.ColorRequest;
import com.fisbank.dto.response.ColorResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ColorMapper {
    int addNewColor(ColorRequest colorRequest);

    int checkColorNameExist(ColorRequest colorRequest);

    List<ColorResponse> getListColor(ColorRequest colorRequest);
}
