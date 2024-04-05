import { PageProps } from ".";

export interface Size {
    id: number;
    name: string;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
}
export interface Course {
    id: number;
    name: string;
    created_at: Date;
}
export interface Fabric {
    id: number;
    course_id: number;
    image: string;
    textile: string;
    stock: number;
    price: Float32Array;
    created_at: Date;
    updated_at?: Date;
    course?: Course;
}
interface Pagination {
    total: number;
    perPage: number;
    currentPage: number;
    path: string;
    from: number;
    to: number;
    count: number;
    options?: [string, string];
    lastPage: number;
}
export interface Product {
    id: number;
    name: string;
    image: string;
    created_at: Date;
    updated_at: Date;

    sales_sum_earned?: number;
}

export interface Expense<T> {
    id: number;
    fabric_id: number;
    textile: string;
    quantity: number;
    price: Float32Array;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
    log_id?: number;
    fabric?: T;
}
export interface Sale {
    id: number;
    product_id: number;
    side_id?: Size;
    quantity: number;
    earned: Float32Array;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
    product?: Product;
    size?: Size;
}
