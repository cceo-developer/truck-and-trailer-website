
const Login = () => import('@/views/auth/LoginView.vue');
const Register = () => import('@/views/auth/RegisterView.vue');

export default [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
]