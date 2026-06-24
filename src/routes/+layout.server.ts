import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = (event) => {
    if (!event.locals.user) {
        // return redirect(302, '/login');
        return {
            user: null,
            isAuthenticated: false
        }
    }
    return { user: event.locals.user, isAuthenticated: true };
};