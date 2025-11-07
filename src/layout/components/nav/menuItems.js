export const mainItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services', dd: 'services' },
    { label: 'Pages', to: '/pages', dd: 'pages' },
    { label: 'Blog', to: '/blog' },
    { label: 'Shop', to: '/shop' },
    { label: 'Contacts', to: '/contacts' },
]

export const services = [
    { label: 'Road Freight', desc: 'Local & cross-border', to: '/services/road', icon: 'fa-solid fa-truck' },
    { label: 'Air Freight',  desc: 'Global fast delivery', to: '/services/air',  icon: 'fa-solid fa-plane' },
    { label: 'Sea Freight',  desc: 'FCL & LCL shipping',   to: '/services/sea',  icon: 'fa-solid fa-ship' },
    { label: 'Warehousing',  desc: 'Storage & fulfillment',to: '/services/wh',   icon: 'fa-solid fa-warehouse' },
    { label: 'Project Cargo',desc: 'Oversized logistics',  to: '/services/proj', icon: 'fa-solid fa-boxes-stacked' },
    { label: 'Customs',      desc: 'Brokerage & clearance',to: '/services/cust', icon: 'fa-solid fa-file-invoice' },
]

export const pages = [
    { label: 'About',   desc: 'Company profile',   to: '/pages/about' },
    { label: 'Team',    desc: 'Meet our people',   to: '/pages/team' },
    { label: 'Pricing', desc: 'Service plans',     to: '/pages/pricing' },
    { label: 'Careers', desc: 'Open positions',    to: '/pages/careers' },
    { label: 'FAQ',     desc: 'Common questions',  to: '/pages/faq' },
    { label: 'Contact', desc: 'Get in touch',      to: '/contacts' },
]