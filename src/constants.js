import {LayoutDashboard,BarChart3,Users,ShoppingBag,Package,CreditCard,MessageSquare,Calendar,FileText,Settings} from 'lucide-react'

export const menuItems=[
    {
        id:'dashboard',
        icon:LayoutDashboard,
        label:'Dashboard',
        active:true,
        badge:'New'
    },
    {
        id:'analytics',
        icon:BarChart3,
        label:'Analytics',
        submenu:[
            {id:'overview',label:'Overview'},
            {id:'reports',label:'Reports'},
            {id:'insights',label:'Insights'}
        ]
    },
    {
        id:'users',
        icon:Users,
        label:'Users',
        count:'2.4k',
        submenu:[
            {id:'all-users',label:'All Users'},
            {id:'roles',label:'Roles & Permissions'},
            {id:'activity',label:'User Activity'}
        ]
    },
    {
        id:'ecommerce',
        icon:ShoppingBag,
        label:'Ecommerce',
        submenu:[
            {id:'products',label:'Products'},
            {id:'orders',label:'Orders'},
            {id:'customers',label:'Customers'}
        ]   
    },
    {
        id:'inventory',
        icon:Package,
        label:'Inventory',
        count:'847'
    },
    {
        id:'transactions',
        icon:CreditCard,
        label:'Transactions'
    },
    {
        id:'messages',
        icon:MessageSquare,
        label:'Mesages',
        badge:'12'
    },
    {
        id:'calendar',
        icon:Calendar,
        label:'Calendar'
    },
    {
        id:'reports',
        icon:FileText,
        label:'Reports'
    },
    {
        id:'settings',
        icon:Settings,
        label:'Settings'
    },
]

