export interface Expense {
    id: number;
    name: string;
    category: string;
    amount: Float32Array;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
    month?: number;
    year?: number;
}
