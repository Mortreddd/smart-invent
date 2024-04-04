import { PageProps } from ".";

export interface Size {
    id: number;
    name: string;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
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
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;

    sales_sum_earned?: number;
}

export interface Sale {
    id: number;
    product_id: number;
    side_id?: Size;
    quantity: number;
    earned: Float32Array;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
    product: Product;
}

export interface RecentSalesProps extends PageProps {
    sales: Sale[];
}
