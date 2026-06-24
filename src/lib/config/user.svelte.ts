import type { User } from "better-auth";
class UserInfo {
    user: User | null = $state(null);
    isAuthenticated: boolean = $state(false);

    async signOut() {
    }
}

export const user = new UserInfo();