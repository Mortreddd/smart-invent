import { Course } from "./course";

export interface Fabric {
    id: number;
    course_id: number;
    image: File | null | string;
    textile: string;
    stock: number;
    price: number;
    created_at: EpochTimeStamp;
    updated_at?: EpochTimeStamp;
    course?: Course;
}
