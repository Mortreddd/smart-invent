export interface Sale<T, S> {
    id: number;
    product_id: number;
    side_id?: number;
    quantity: number;
    earned: Float32Array;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
    product?: T;
    size?: S;
}
