import {
    AssignmentInd,
    Diversity3,
    Drafts,
    Explore,
    Home, ListAlt, MenuBook, Search, Task,
} from '@mui/icons-material'
export const links = [
    {
        icon: <Home />,
        name: 'Home page',
        link:'/',
    },
    {
        icon: <AssignmentInd />,
        name: 'User Profile',
        link:'/perfil',
    },
    {
        icon: <Search />,
        name: 'Search',
        link:'/search',
    },
    {
        icon: <Diversity3 />,
        name: 'Community',
        link:'/community',
    },
    {
        icon: <ListAlt />,
        name: 'My Tasks',
        link:'/mytasks',
    },
    {
        icon: <MenuBook />,
        name: 'Task Catalog',
        link:'/catalog',
    },
    {
        icon: <Explore />,
        name: 'Explorer',
        link:'/explorar',
    },
]
