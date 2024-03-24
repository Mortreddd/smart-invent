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
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    email: string;
    createdAt: number;
    updatedAt: number;
    logId?: number;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
