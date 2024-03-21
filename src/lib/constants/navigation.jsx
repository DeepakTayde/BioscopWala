import { BiSolidBrightness, BiSolidCat, BiSolidCompass, BiSolidFaceMask, BiSolidFilm, BiSolidHome, BiSolidLaugh, BiSolidMeteor, BiSolidSearch, BiSolidStar, BiSolidUserCircle, BiSolidVideoPlus } from "react-icons/bi";

export const BIOSCOPWALA_SITE_LINKS=[

    {
        key:'home',
        label: 'Home',
        path: '/',
        icon: <BiSolidHome/>
    },
    {
        key:'settings',
        label: 'Settings',
        path: '/settings',
        icon: <BiSolidBrightness/>
    },
    {
        key:'search',
        label: 'Search',
        path: '/search',
        icon: <BiSolidSearch/>
    },
    {
        key:'profile',
        label: 'Home',
        path: '/',
        icon: <BiSolidUserCircle/>
    },

]


export const BIOSCOPWALA_CATEGORIES_LINKS = [


    {
        key:'popular',
        label: 'Popular',
        path: '/popular',
        icon: <BiSolidFilm/>
    },
    {
        key:'top-rated',
        label: 'Top Rated',
        path: '/top-rated',
        icon: <BiSolidStar/>
    },
    {
        key:'upcoming',
        label: 'Upcoming',
        path: '/upcoming',
        icon: <BiSolidVideoPlus/>
    },
    

]


export const BIOSCOPWALA_GENRE_LINKS =[

    {
        key:'action',
        label: 'Action',
        path: '/action',
        icon: <BiSolidMeteor/>
    },
    {
        key:'adventure',
        label: 'Adventure',
        path: '/adventure',
        icon: <BiSolidCompass/>
    },
    {
        key:'animation',
        label: 'Animation',
        path: '/animation',
        icon: <BiSolidCat/>
    },
    {
        key:'comedy',
        label: 'Comedy',
        path: '/comedy',
        icon: <BiSolidLaugh/>
    },
    {
        key:'crime',
        label: 'Crime',
        path: '/crime',
        icon: <BiSolidFaceMask/>
    },
    {
        key:'science-fiction',
        label: 'Science Fiction',
        path: '/science-fiction',
        icon: <BiSolidFaceMask/>
    },

]