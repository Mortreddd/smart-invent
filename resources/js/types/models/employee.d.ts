export interface Employee {
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    role: string;
    image: string | null;
    phone: string;
    gender: string;
    email: string;
    password: string;
    remember_token: string | null;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}
