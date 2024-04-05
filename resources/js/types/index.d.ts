// export interface User {
//     id: number;
//     name: string;
//     email: string;
//     email_verified_at: string;
// }

// export type PageProps<T extends Record<string, unknown>> = T & {
//     auth: {
//         user: User;
//     };
// };

export interface User {
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    image: string;
    gender: string;
    email: string;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
    log_id?: number;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export interface Employee {
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    image: string;
    gender: string;
    email: string;
    created_at: EpochTimeStamp;
    updated_at: EpochTimeStamp;
    log_id?: number;
}
