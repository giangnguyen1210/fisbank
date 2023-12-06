package com.fisbank.dto.response;

public class ProductSize {
    private int id;
    private String size;
    private int quantity;
    private int sold = 0;
    private int remain;
    private int productId;

    public ProductSize(int id, String size, int quantity, int sold, int remain, int productId) {
        this.id = id;
        this.size = size;
        this.quantity = quantity;
        this.sold = sold;
        this.remain = quantity;
        this.productId = productId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getSold() {
        return sold;
    }

    public void setSold(int sold) {
        this.sold = sold;
    }

    public int getRemain() {
        return remain;
    }

    public void setRemain(int remain) {
        this.remain = remain;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }
}
