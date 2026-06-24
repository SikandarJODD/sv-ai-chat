import type { User } from "better-auth";
class UserInfo {
    user: User | null = $state(null);
    isAuthenticated: boolean = $state(false);

}

export const user = new UserInfo();