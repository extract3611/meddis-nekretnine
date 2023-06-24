import { Clipboard, Home, Layers, Link, MapPin, User, Zap } from "react-feather";

export const MainNavMenuItems = [
  {
    title: "Naslovna",
    icon: <Home />,
    type: "link",
    path:"/",
  
  },
  {
    title: "Nekretnine",
    icon: <Home />,
    type: "link",
    path:"/nekretnine",
  
  },
  {
    title: "Izdavanje Apartmana",
    icon: <Home />,
    type: "link",
    path:"/Izdavanje-apartmana",
  
  },
  {
    title: "Generalno čišćenje",
    icon: <Home />,
    type: "link",
    path:"/generalno-ciscenje",
  
  },
  {
    title: "O nama",
    icon: <Home />,
    type: "link",
    path:"/o-nama",
  
  },
  {
    title: "Kontakt",
    icon: <Home />,
    type: "link",
    path:"/kontakt",
  
  },


  
  
];

export const RightNavMenuItem = [
  {
    title: "language",
    option: [
      { lang: "en", language: "English" },
      { lang: "fr", language: "French" },
      { lang: "ar", language: "Arabic" },
      { lang: "es", language: "Spanish" },
    ],
  },

  {
    title: "Valuta",
    type: [
      {
        currency: "USD",
        name: "Dolar",
        symbol: "$",
        value: 1,
      },
      {
        currency: "EUR",
        name: "euro",
        symbol: "€",
        value: 0.997,
      },
    ]},
];
