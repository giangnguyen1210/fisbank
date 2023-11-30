export interface ProductList{
    totalRecords: number;
    data: Array<Product>;
}

export interface Product{
    id: number;
    name: string;
    description: string;
    image: Array<Image>;
    rate: string;
    material: string;
    size: Array<Size>;
    // total: number;
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