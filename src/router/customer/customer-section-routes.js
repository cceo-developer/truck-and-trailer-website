const VehiclesView = () => import('@/views/customer/VehiclesView.vue');
const DriverLicenseView = () => import('@/views/customer/DriverLicenseView.vue');
const PaymentMethodsView = () => import('@/views/customer/PaymentMethodsView.vue');

export default [
    {
        path: '/my-account/vehicles',
        name: 'vehicles',
        component: VehiclesView,
        meta: { title: 'Vehicles | Truck & Trailer Storage' }
    },
    {
        path: '/my-account/driver-licenses',
        name: 'driver-licenses',
        component: DriverLicenseView,
        meta: { title: 'Driver Licenses | Truck & Trailer Storage' }
    },
    {
        path: '/my-account/payment-methods',
        name: 'payment-methods',
        component: PaymentMethodsView,
        meta: { title: 'Payment Methods | Truck & Trailer Storage' }
    },
]