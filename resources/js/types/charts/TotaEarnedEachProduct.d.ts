import { PageProps } from "..";

interface Product {
    id: number;
    name: string;
    image: string;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
    sales_sum_earned?: number;
}

export interface TotalEarnedEachProductProps extends PageProps {
    products: Product[];
}
