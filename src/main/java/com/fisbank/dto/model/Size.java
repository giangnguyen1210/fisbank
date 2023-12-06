package com.fisbank.dto.model;

public class Size {
    private int id;
    private String size;
    private int quantity;
    private int sold = 0;
    private int remain;
    private double price;
    private int colorId;

    public int getColorId() {
        return colorId;
    }

    public void setColorId(int colorId) {
        this.colorId = colorId;
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Size(int id, String size, int quantity, int sold, int remain) {
        this.id = id;
        this.size = size;
        this.quantity = quantity;
        this.sold = sold;
        this.remain = quantity;
    }
}
