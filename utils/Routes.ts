export const adminRoutes = [
    {
        name: "Dashboard",
        href: "/admin",
        icon: "Dashboard",
    },
    {
        name: "Merchants",
        href: "/admin/merchants",
        icon: "Merchant",
    },
    {
        name: "Accounts",
        href: "/admin/accounts",
        icon: "Accounts",
    },
    {
        name: "Customers",
        href: "/admin/customers",
        icon: "Customers",
    },
    {
        name: "Transactions",
        href: "/admin/transactions",
        icon: "Transactions",
    },
    {
        name: "Top-Up",
        href: "/admin/top-ups",
        icon: "TopUp",
    },
    {
        name: "Refunds Requests",
        icon: "Refund",
        sub: [
            {
                name: "Pending Refund Request",
                href: "/admin/refund-requests/pending-refund-request",
            },
            {
                name: "Refund Request History",
                href: "/admin/refund-requests/refund-request-history",
            },
        ],
    },
    {
        name: "Retrieval/Chargeback",
        icon: "ChargeBack",
        sub: [
            {
                name: "Retrieval",
                href: "/admin/retrieval-chargeback/retrieval",
            },
            {
                name: "Chargeback",
                href: "/admin/retrieval-chargeback/chargeback",
            },
            {
                name: "Retrieval/Chargeback",
                href: "/admin/retrieval-chargeback",
            },
        ],
    },
    {
        name: "Exchange Rates",
        href: "/admin/exchange-rates",
        icon: "ExchangeRate",
    },
    {
        name: "Settlements",
        href: "/admin/settlements",
        icon: "Settlements",
    },
    {
        name: "Admins",
        icon: "Admin",
        sub: [
            {
                name: "Roles and Permission",
                href: "/admin/roles-and-permission",
            },
            {
                name: "Default Fee Settings",
                href: "/admin/default-fee-settings",
            },
            {
                name: "Default Transaction Limits",
                href: "/admin/default-transaction-limits",
            },
        ],
    },
];

export const merchantRoutes = [
    {
        name: "Dashboard",
        href: "/admin/dashboard",
        icon: "Dashboard",
    },
    {
        name: "Merchants",
        href: "/admin/merchants",
        icon: "Merchants",
    },
    {
        name: "Accounts",
        href: "/admin/accounts",
        icon: "Accounts",
    },
    {
        name: "Customers",
        href: "/admin/customers",
        icon: "Customers",
    },
    {
        name: "Top-Up",
        href: "/admin/top-Ups",
        icon: "TopUp",
    },
    {
        name: "Exchange Rates",
        href: "/admin/exchange-rates",
        icon: "ExchangeRate",
    },
    {
        name: "Settlements",
        href: "/admin/settlements",
        icon: "Settlements",
    },
    {
        name: "Admins",
        href: "/admin/list",
        icon: "Admin",
    },
];
