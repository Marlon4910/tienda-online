import type { User } from "@/interfaces/user.interface";

// login, registar, checkstatus
export interface AuthResponse {
    user: User;
    token: string;
}

