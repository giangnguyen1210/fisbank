package com.fisbank.service.impl;

import com.fisbank.dto.request.ColorRequest;
import com.fisbank.dto.request.ProductRequest;
import com.fisbank.dto.request.SizeRequest;
import com.fisbank.dto.response.ColorResponse;
import com.fisbank.dto.response.ProductDetailResponse;
import com.fisbank.dto.response.ProductResponse;
import com.fisbank.dto.response.SizeResponse;
import com.fisbank.dto.response.base.BaseResponse;
import com.fisbank.mapper.*;
import com.fisbank.service.ProductService;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.export.JRCsvExporter;
import net.sf.jasperreports.engine.export.ooxml.JRXlsxExporter;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import net.sf.jasperreports.export.SimpleWriterExporterOutput;
import net.sf.jasperreports.export.SimpleXlsxReportConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private CategoryMapper categoryMapper;

    @Autowired
    private ColorMapper colorMapper;

    @Autowired
    private SizeMapper sizeMapper;

    @Override
    public BaseResponse addNewProduct(ProductRequest productRequest)  {
        BaseResponse baseResponse = new BaseResponse();
        if(productRequest==null){
            baseResponse.setErrorDesc("Product must be not null");
            return baseResponse;
        }
        if(productRequest.getName()==null){
            baseResponse.setErrorDesc("Product name must be not null");
            return baseResponse;
        }
        if(productRequest.getDescription()==null){
            baseResponse.setErrorDesc("Product description must be not null");
            return baseResponse;
        }
        if(productRequest.getPrice()<=0){
            baseResponse.setErrorDesc("Product price must be greater than 0");
            return baseResponse;
        }
        if(productRequest.getQuantity()<=0){
            baseResponse.setErrorDesc("Product quantity must be greater than 0");
            return baseResponse;
        }
        if(productMapper.checkProductExist(productRequest)>0){
            baseResponse.setErrorDesc("Product is Exist");
            return baseResponse;
        }
        System.out.println(productMapper.checkProductExist(productRequest));
        productRequest.setProductId(generateProductId(productRequest.getName()));
        int b= productMapper.insertProduct(productRequest);
        baseResponse.setData(b);
        return baseResponse;
    }

    @Override
    public BaseResponse getAllProduct(ProductRequest productRequest) {
        BaseResponse baseResponse = new BaseResponse();
        List<ProductResponse> productResponses = productMapper.getListProduct(productRequest);
//        if(productMapper.checkProductExist(productRequest)>0){
//            baseResponse.setErrorDesc("Product is Exist");
//            return baseResponse;
//        }
        baseResponse.setData(productResponses);
        baseResponse.setTotalRecords(productMapper.totalProduct());

        return baseResponse;
    }

    @Override
    public BaseResponse getProductDetail(ProductRequest productRequest) {
        BaseResponse baseResponse = new BaseResponse();
        List<ProductDetailResponse> productRequests = productMapper.getListProductDetail(productRequest);
        baseResponse.setData(productRequests);

        baseResponse.setTotalRecords(productRequests.size());

        return baseResponse;
    }

    @Override
    public BaseResponse getItemDetail(ProductRequest productRequest) {
        BaseResponse baseResponse = new BaseResponse();
        ProductDetailResponse productRequests = productMapper.getItemDetail(productRequest);
        baseResponse.setData(productRequests);
        return baseResponse;
    }

    public String generateProductId(String name) {
        return name.toLowerCase().replace(" ", "-");
    }

    @Override
    public BaseResponse editProduct(ProductRequest productRequest) {
        BaseResponse baseResponse = new BaseResponse();
        int update = productMapper.updateProduct(productRequest);
        return baseResponse;
    }

    @Override
    public BaseResponse editProductDetail(ProductRequest productRequest) {
        BaseResponse baseResponse = new BaseResponse();
        int update = productMapper.updateProductDetail(productRequest);
        if (update==1){
            baseResponse.setData("update data success");
        }
        else {
            baseResponse.setData("update fail");
        }
        return baseResponse;
    }

    @Override
    public BaseResponse deleteProduct(ProductRequest productRequest){
        BaseResponse baseResponse = new BaseResponse();
        int delete = productMapper.deleteProduct(productRequest);
        List<ProductResponse> productResponses = productMapper.getListProduct(productRequest);
        if (delete==1){
            baseResponse.setTotalRecords(productResponses.size());
            baseResponse.setData("delete data success");
        }
        else {
            baseResponse.setData("delete fail");
        }
        return baseResponse;
    }

    @Override
    public BaseResponse deleteProductDetail(ProductRequest productRequest){
        BaseResponse baseResponse = new BaseResponse();
        int delete = productMapper.deleteProductDetail(productRequest);
        List<ProductDetailResponse> productResponses = productMapper.getListProductDetail(productRequest);
        if (delete==1){
            baseResponse.setTotalRecords(productResponses.size());

            baseResponse.setData("delete data success");
        }
        else {
            baseResponse.setData("delete fail");
        }
        return baseResponse;
    }

    @Override
    public BaseResponse exportFileProduct(ProductRequest productRequest) throws JRException, FileNotFoundException {
        String path = "/Users/hongnguyen/Documents/Giang/2023/intern-fis/downloads/";
        List<ProductResponse> productResponses = productMapper.getListProduct(productRequest);
        File file = ResourceUtils.getFile("classpath:product.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(productResponses);
        Map<String, Object> map = new HashMap<>();
        map.put("name","Giang");
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, map,dataSource);
        if(productRequest.getFormat().equalsIgnoreCase("pdf")){
            JasperExportManager.exportReportToPdfFile(jasperPrint, path+"product.pdf");
        }
        if(productRequest.getFormat().equalsIgnoreCase("html")){
            JasperExportManager.exportReportToHtmlFile(jasperPrint, path+"/product.html");
        }
        if(productRequest.getFormat().equalsIgnoreCase("csv")){
            //  Csv
            JRCsvExporter exporter = new JRCsvExporter();
            exporter.setExporterInput(new SimpleExporterInput(jasperPrint));
            exporter.setExporterOutput(
                    new SimpleWriterExporterOutput(path+"/product.csv"));
            exporter.exportReport();
        }
        if(productRequest.getFormat().equalsIgnoreCase("excel")){
            //  Csv
            JRXlsxExporter exporter = new JRXlsxExporter();
            exporter.setExporterInput(new SimpleExporterInput(jasperPrint));
            exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(path+"/product.xlsx"));
            SimpleXlsxReportConfiguration reportConfig
                    = new SimpleXlsxReportConfiguration();
            reportConfig.setSheetNames(new String[] { "Product-Data" });
            exporter.setConfiguration(reportConfig);
            exporter.exportReport();
        }
        return null;
    }
    // color service

    @Override
    public BaseResponse addNewColor(ColorRequest colorRequest) {
        BaseResponse baseResponse = new BaseResponse();
        if(colorMapper.checkColorNameExist(colorRequest)==1){
            baseResponse.setData("Color name existed!");
            return baseResponse;
        }
        colorMapper.addNewColor(colorRequest);
        baseResponse.setData("Add color success");
        return baseResponse;
    }

    @Override
    public BaseResponse getListColor(ColorRequest colorRequest) {
        BaseResponse baseResponse = new BaseResponse();

        List<ColorResponse> colorResponses = colorMapper.getListColor(colorRequest);
        baseResponse.setData(colorResponses);
        return baseResponse;
    }

    // size service

    @Override
    public BaseResponse addNewSize(SizeRequest sizeRequest) {
        BaseResponse baseResponse = new BaseResponse();
        if(sizeMapper.checkSizeNameExist(sizeRequest)==1){
            baseResponse.setData("Size name existed!");
            return baseResponse;
        }
        sizeMapper.addNewSize(sizeRequest);
        baseResponse.setData("Add size success");
        return baseResponse;
    }

    @Override
    public BaseResponse getListSize(SizeRequest sizeRequest) {
        BaseResponse baseResponse = new BaseResponse();

        List<SizeResponse> sizeResponses = sizeMapper.getListSize(sizeRequest);
        baseResponse.setData(sizeResponses);
        return baseResponse;
    }


}
