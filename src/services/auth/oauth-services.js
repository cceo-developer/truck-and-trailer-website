import {useService} from "@/composables/service.js";
import {useAuth} from "@/composables/auth.js";

const service = useService();
const auth = useAuth();

export function isGuestUser() {
    return auth?.user == null;
}

export function createOauthToken(attributes) {
    return service.post('/oauth-tokens', {
        ...attributes, 
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
    })
}

export function register(attributes) {
    return service.post('/auth/register', {
        ...attributes,
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
    });
}

export function getAuthUser() {
    return service.get('/auth');
}