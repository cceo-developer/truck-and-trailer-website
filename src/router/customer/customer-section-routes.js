
const VehiclesView = () => import('@/views/customer/VehiclesView.vue');

export default [
    {
        path: '/my-account/vehicles',
        name: 'vehicles',
        component: VehiclesView,
        meta: { title: 'Vehicles | Truck & Trailer Storage' }
    },
]