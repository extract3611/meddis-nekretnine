import { Airplay, BarChart, CreditCard, Grid, Layout, Lock, MapPin, UserPlus, Users } from "react-feather";

export const SidebarMenuItem = [
    {
        title: 'Admin Panel',
        icon: <Airplay />,
        type: 'link',
        path: "/admin"
    },
    {
        title: 'Sve Nekretnine',
        icon: <Grid />,
        type: 'sub',
        children: [
            {
                path: "/admin/dodaj-nekretninu",
                title: 'Dodaj nekretninu',
                type: 'link'
            },
            
            {
                path: "/admin/sve-nekretnine",
                title: 'Lista nekretnina',
                type: 'link'
            },
         
         
        ]
    },
    {
        title: 'Nekretnine klijenti',
        icon: <Users />,
        type: 'sub',
        children: [
         
            {
                path: "/admin/neodobrene-nekretnine",
                title: 'Neodobrene nekretnine',
                type: 'link'
            },
            {
                path: "/admin/klijenti-nekretnine",
                title: 'Klijenti nekretnine',
                type: 'link'
            },
            {
                path: "/admin/klijenti",
                title: 'Klijenti',
                type: 'link'
            },
         
        ]
    },
    
    
    
    
]