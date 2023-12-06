package com.fisbank.dto.response;

import com.fisbank.dto.model.Image;

import java.util.Date;
import java.util.List;

public class ProductResponse {
    private int id;
    private String name;
    private String description;
    private int categoryId;
    private int rate;
    private int total;
    private double price;

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    private String material;
    private Date createdAt;
    private Date updatedAt;

    private List<Image> images;

    private List<ProductSize> sizes;

    public List<ProductSize> getSizes() {
        return sizes;
    }

    public void setSizes(List<ProductSize> sizes) {
        this.sizes = sizes;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    private byte[] content;

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }
    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
