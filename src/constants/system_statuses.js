export const NO_INFORMATION_OBJECT = {
    label: 'No information', color: '#71717a', background: '#fafafa', icon: 'fa-solid fa-circle-question'
}

export const RESERVATION_STATUSES = [
    { label: 'Canceled', color: '#dc2626', background: '#fef2f2', icon: 'fa-solid fa-circle-xmark' },
    { label: 'Refunded', color: '#7e22ce', background: '#faf5ff', icon: 'fa-solid fa-rotate-right' },
    { label: 'Pending', color: '#ca8a04', background: '#fefce8', icon: 'fa-solid fa-solid fa-clock' },
    { label: 'Confirmed', color: '#0284c7', background: '#f0f9ff', icon: 'fa-solid fa-calendar-check' },
    { label: 'In progress', color: '#0d9488', background: '#ecfdf5', icon: 'fa-solid fa-stopwatch' },
    { label: 'Check-in delayed', color: '#d97706', background: '#fff7ed', icon: 'fa-solid fa-person-circle-question' },
    { label: 'Check-out delayed', color: '#ea580c', background: '#fff7ed', icon: 'fa-solid fa-person-circle-exclamation' },
    { label: 'Forfeited', color: '#e11d48', background: '#fff1f2', icon: 'fa-solid fa-calendar-xmark' },
    { label: 'Completed', color: '#16a34a', background: '#f0fdf4', icon: 'fa-solid fa-circle-check' },
    { label: 'Expired', color: '#be185d', background: '#fdf2f8', icon: 'fa-solid fa-ban' },
];

export const BACK_RESERVATION_STATUSES = {
    STATUS_CANCELED: 'Canceled',
    STATUS_REFUNDED: 'Refunded',
    STATUS_PENDING: 'Pending',
    STATUS_CONFIRMED: 'Confirmed',
    STATUS_IN_PROGRESS: 'In progress',
    STATUS_CHECK_IN_DELAYED: 'Check-in delayed',
    STATUS_CHECK_OUT_DELAYED: 'Check-out delayed',
    STATUS_FORFEITED: 'Forfeited',
    STATUS_COMPLETED: 'Completed',
    STATUS_EXPIRED: 'Expired',
}

export const RESERVATION_PAYMENT_STATUSES = [
    { label: 'Pending', color: '#ca8a04', background: '#fefce8', icon: 'fa-solid fa-clock' },
    { label: 'Paid', color: '#16a34a', background: '#f0fdf4', icon: 'fa-solid fa-circle-check' },
    { label: 'Canceled', color: '#dc2626', background: '#fef2f2', icon: 'fa-solid fa-circle-xmark' },
    { label: 'Refunded', color: '#7e22ce', background: '#faf5ff', icon: 'fa-solid fa-rotate-right' },
    { label: 'Cancel request', color: '#e11d48', background: '#fff1f2', icon: 'fa-solid fa-hand' },
    { label: 'Refund request', color: '#c026d3', background: '#fdf4ff', icon: 'fa-solid fa-hand' },
];

export const BACK_RESERVATION_PAYMENT_STATUSES = {
    PAYMENT_STATUS_PENDING: 'Pending',
    PAYMENT_STATUS_PAID: 'Paid',
    PAYMENT_STATUS_CANCELED: 'Canceled',
    PAYMENT_STATUS_REFUNDED: 'Refunded',
    PAYMENT_STATUS_CANCELLATION_REQUESTED: 'Cancel request',
    PAYMENT_STATUS_REFUND_REQUESTED: 'Refund request',
}