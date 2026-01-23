
const Login = () => import('@/views/auth/LoginView.vue');
const Register = () => import('@/views/auth/RegisterView.vue');
const ForgotPassword = () => import('@/views/auth/ForgotPasswordView.vue');
const ResetPassword = () => import('@/views/auth/ResetPasswordView.vue');
const VerifyEmail = () => import('@/views/auth/VerifyEmailView.vue');
const VerifyPhone = () => import('@/views/auth/VerifyPhoneView.vue');

export default [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { title: 'Sign in | Truck & Trailer Storage' }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { title: 'Register | Truck & Trailer Storage' }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword,
        meta: { title: 'Forgot password | Truck & Trailer Storage' }
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ResetPassword,
        meta: { title: 'Reset password | Truck & Trailer Storage' }
    },
    {
        path: '/verify-email',
        name: 'verify-email',
        component: VerifyEmail,
        meta: { title: 'Verify email | Truck & Trailer Storage' }
    },
    {
        path: '/verify-phone',
        name: 'verify-phone',
        component: VerifyPhone,
        meta: { title: 'Verify phone | Truck & Trailer Storage' }
    },
]