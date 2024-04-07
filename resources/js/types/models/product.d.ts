export interface Product {
    id: number;
    name: string;
    image: string;
    created_at: Date;
    updated_at: Date;
    sales_sum_earned?: number;
}
