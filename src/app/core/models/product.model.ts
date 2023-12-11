export interface ProductList{
    totalRecords: number;
    data: Array<Product>;
}

export interface Product{
    productId: string;
    name: string;
    quantity: number;
    sold: number;
    remain: number;
    price: number;
}

export interface Color{
    id: number;
    name: string;
}

export interface Size{
    id: number;
    name: string;
}

export interface ProductRequest{
    productId: string;
    name: string;
    description: string;
    rate: number;
    material: string;
    categoryId: number;
    price: number;
    quantity: number;
    sold: number;
    remain: number;
    colorId: number;
    sizeId: number;
    image: string;
    discount: number;
}


export interface ProductDetail{
    productId: string;
    name: string;
    description: string;
    rate: number;
    material: string;
    category: number;
    price: GLfloat;
    quantity: number;
    sold: number;
    remain: number;
    color: number;
    size: number;
    image: string;
    discount: number;
}
export interface Image{
    name: string;
    content: string;
}

export interface Size{
    size: string;
    quantity: number;
    sold: number;
    remain: number;
}

export interface Category{
    id: number;
    name: string;
}