export interface Fabric<T> {
    id: number;
    course_id: number;
    image: string;
    textile: string;
    stock: number;
    price: Float32Array;
    created_at: EpochTimeStamp;
    updated_at?: EpochTimeStamp;
    course?: T;
}
