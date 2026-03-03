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

export function oauthSendForgotPasswordEmail(attributes) {
    return service.post(`/oauth/forgot-password`, {
        ...attributes,
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
    });
}

export function oauthResetPassword(query, attributes) {
    return service.post(`/oauth/reset-password${query}`, {
        ...attributes,
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
    });
}

export function oauthVerifyEmail(query, attributes) {
    return service.post(`/oauth/verify-email${query}`, {
        ...attributes,
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
    });
}

export function sendVerifyPhone(user_id) {
    return service.put(`/users/${user_id}/send-verify-phone`);
}

export function verifyPhone(user_id, attributes) {
    return service.put(`/users/${user_id}/verify-phone`, attributes);
}

export function getAuthUser() {
    return service.get('/auth');
}
