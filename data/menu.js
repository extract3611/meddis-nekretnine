import { Clipboard, Home, Layers, Link, MapPin, User, Zap } from "react-feather";

export const MainNavMenuItems = [
  {
    title: "Naslovna",
    icon: <Home />,
    link: true,
    path:"/nekretnine",
    children:[]
  
  },
  {
    title: "Sve nekretnine",
    icon: <Clipboard />,
    type: "sub",
    path:"/nekretnine/sve-nekretnine",
    children: [
      {
        title: "Prodavanje",
        type: "sub",
        link: true,
    path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C200000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Prodaja%22%7D",
      children:[
        {title: "Kuće",
        link: true,
        path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C5000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Prodaja%22%2C%22tip%22%3A%22Ku%C4%87a%22%7D",},
        {title: "Stanovi",
        link: true,
        path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C5000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Prodaja%22%2C%22tip%22%3A%22Stan%22%7D"},
        {title: "Zemljišta",
        link: true,
         path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C5000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Prodaja%22%2C%22tip%22%3A%22Zemlji%C5%A1te%22%7D",},
        {title: "Vile",
        link: true,

         path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C5000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Prodaja%22%2C%22tip%22%3A%22Vila%22%7D",},
         {title: "Poslovni prostori",
         link: true,
 
          path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C5000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Prodaja%22%2C%22tip%22%3A%22Poslovni%2520prostor%22%7D",}]
      },
      {
        title: "Izdavanje",
        link: true,
        type: "sub",
         path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C5000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Izdavanje%22%7D",
        children:[
          {title: "Kuće",
          link: true,
  
           path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C5000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Izdavanje%22%2C%22tip%22%3A%22Ku%C4%87a%22%7D",},
          {title: "Stanovi",
          link: true,
  
           path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C5000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Izdavanje%22%2C%22tip%22%3A%22Stan%22%7D",},
          {title: "Zemljišta",
          link: true,
  
           path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C5000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Izdavanje%22%2C%22tip%22%3A%22Zemlji%C5%A1te%22%7D",},
          {title: "Vile",
          link: true,
  
           path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C5000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Izdavanje%22%2C%22tip%22%3A%22Vila%22%7D",},
           {title: "Poslovni prostori",
           link: true,
   
            path:"/nekretnine/sve-nekretnine?filtriraniPodaci=%7B%22cijena%22%3A%5B100%2C5000%5D%2C%22povrsina%22%3A%5B20%2C500%5D%2C%22status%22%3A%22Izdavanje%22%2C%22tip%22%3A%22Poslovni%2520prostor%22%7D",}
  
        ],
      },],
    },
       
      {
        title: "Objavi nekretninu",
        icon: <MapPin />,
        type: "link",
        path:"/nekretnine/objavi-nekretninu",   
        children:[]

      },

      {
        title: "O nama",
        icon: <MapPin />,
        type: "link",
        path:"/o-nama",   
      },
  
  {
    title: "Kontakt",
    icon: <MapPin />,
    type: "link",
    path:"/kontakt",   
  },
];

export const RightNavMenuItem = [
  {
    title: "language",
    option: [
      { lang: "sr", language: "Srpski" },
      { lang: "en", language: "Engleski" },
      { lang: "ru", language: "Ruski" },
    ],
  },
  {
    title: "cart",
  },
  {
    title: "currency",
    type: [
      {
        currency: "USD",
        name: "dollar",
        symbol: "$",
        value: 1,
      },
      {
        currency: "EUR",
        name: "euro",
        symbol: "€",
        value: 0.997,
      },
      {
        currency: "GBP",
        name: "pound",
        symbol: "£",
        value: 0.847,
      },
      {
        currency: "IND",
        name: "rupees",
        symbol: "₹",
        value: 79.9,
      },
    ],
  },
  { title: "user" },
];
