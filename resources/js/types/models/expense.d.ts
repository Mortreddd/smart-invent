export interface Expense<T> {
    id: number;
    category_id: number;
    amount: Float32Array;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
    log_id?: number;
    category?: T;
}
