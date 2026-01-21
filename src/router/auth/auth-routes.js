
const Login = () => import('@/views/auth/LoginView.vue');
const Register = () => import('@/views/auth/RegisterView.vue');

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
]