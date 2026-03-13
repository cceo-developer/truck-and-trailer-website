const VehiclesView = () => import('@/views/customer/VehiclesView.vue');
const DriverLicenseView = () => import('@/views/customer/DriverLicenseView.vue');

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
]