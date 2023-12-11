package com.fisbank.mapper;

import com.fisbank.dto.request.ColorRequest;
import com.fisbank.dto.request.SizeRequest;
import com.fisbank.dto.response.SizeResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SizeMapper {
    int addNewSize(SizeRequest sizeRequest);

    int checkSizeNameExist(SizeRequest sizeRequest);

    List<SizeResponse> getListSize(SizeRequest sizeRequest);
}
