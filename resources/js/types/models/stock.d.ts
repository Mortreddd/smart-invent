import { Size } from "./size";

export interface Stock<T> {
    id: number;
    product_id: number;
    size_id: number;
    stock: number;
    price: number;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
    size?: Size;
    product?: T;
}
