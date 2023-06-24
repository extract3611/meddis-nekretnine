import { Bell, BookOpen, DollarSign, Home, MapPin, Settings } from "react-feather";

export const AppPropertyData = {
  WhatAreYouLookingFor: [
    { title: "Kuća", img: "/assets/svg/icons.svg#home-lock", path: "/nekretnine/pretrazi-nekretninu?filtriraniPodaci=%257B%2522cijena%2522%253A%255B100%252C200000%255D%252C%2522povrsina%2522%253A%255B20%252C500%255D%252C%2522tip%2522%253A%2522Ku%25C4%2587a%2522%257D" },
    { title: "Stan", img: "/assets/svg/icons.svg#key", path: "/nekretnine/pretrazi-nekretninu?filtriraniPodaci=%257B%2522cijena%2522%253A%255B100%252C200000%255D%252C%2522povrsina%2522%253A%255B20%252C500%255D%252C%2522tip%2522%253A%2522Stan%2522%257D" },
    { title: "Poslovni", img: "/assets/svg/icons.svg#business", path: "/nekretnine/pretrazi-nekretninu?filtriraniPodaci=%257B%2522cijena%2522%253A%255B100%252C200000%255D%252C%2522povrsina%2522%253A%255B20%252C500%255D%252C%2522tip%2522%253A%2522Poslovni%2520prostor%2522%257D" },
  ],
  PropertyServices: [
    { title: "Oglašavanje, promociju i prodaju nekretnina.", img: <DollarSign />, details:"Naš tim stručnjaka će vam pomoći da efikasno prodate vašu nekretninu. Obezbeđujemo marketinške aktivnosti, pregovaranje sa potencijalnim kupcima i pravnu podršku tokom cijelog procesa prodaje." },
    { title: "Izdavanje nekretnina, organizovanje rezervacija i ugošćavanje gostiju.", img: <Bell />, details: "Pružamo vam podršku u pronalaženju kvalitetnih zakupaca, sastavljanju zakupnih ugovora, organizaciji pregleda nekretnina i rešavanju administrativnih zadataka." },
    { title: "Redovno održavanje nekretnina i stalni kontakt sa stanarima.", img: <Home />, details: "Naša agencija za nekretnine pruža sveobuhvatnu uslugu održavanja nekretnina kako bismo vam omogućili da vaše nekretnine ostanu u besprekornom stanju. Bez obzira da li ste vlasnik stambenih ili poslovnih prostora, naš tim stručnjaka će se pobrinuti za sve vaše potrebe u vezi sa održavanjem nekretnina." },
  ],
  OurNewOffer: [
    
    { title: "Kupujete ili prodajete nekrentinu?", details: "Povjerenje zajednice i naših klijenata kao dokaz našeg integriteta i profesionalne etike .", img: "/assets/images/others/icon-2.png" },
    { title: "Tražite svoj dom?", details: "Stotine novih ponuda svakim danom. Najpouzdanija baza nekretnina u crnoj gori.", img: "/assets/images/others/icon-1.png" },
    { title: "Zašto izabrati White Homes?", details: "Klijenti bi rado dali povjerenje našoj firmi za nekretnine zbog naše stručnosti, predanosti pružanju vrhunske usluge i dokazane sposobnosti da ostvarimo njihove ciljeve i potrebe u svijetu nekretnina.", img: "/assets/images/others/icon-1.png" },
  ],
  corporateLayoutHomeBanner: [
    {
      title: "How Much is My Land Worth ?",
      details: "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening Elegant retreat in a quiet Coral Gables setting.",
    },
    {
      title: "How Much is My House Worth ?",
      details: "This home provides wonderful entertaining spaces with a chef kitchen opening Elegant retreat in a quiet Coral Gables setting. Elegant retreat in a quiet Coral Gables setting.",
    },
  ],
  ProvidedServices: [
    {
      img: "/assets/images/rent.svg",
      title: "Prvi poslovni model",
      details: "Podrazumijeva našu potpunu brigu o stanu, promovisanje i marketing (koji sa sigurnošću rezultira popunjavanjem stanova), prijem i ispraćaj gostiju, održavanje, itd., čime ste vi u potpunosti rasterećeni.",
    },
    {
      img: "/assets/images/rent.svg",
      title: "Drugi poslovni model",
      details: "Drugi poslovni model je za one koji se samostalno žele baviti prijemom gostiju i održavanjem stana, dok će nama prepustiti posao vezan za promociju i marketing organizaciju rezervacija (koji sa sigurnošću rezultira popunjavanjem stanova). Naša provizija u ovom slučaju je 15%, a vaš profit u odnosu na uobičajenu mjesečnu kiriju uvećan je u prosjeku 100%.",
    },

  ],
  PricingPlan: [
    {
      img: "/assets/svg/icons.svg#home-heart",
      title: "Personal",
      details: "Residential design is the design of the interior of private residences.",
      moreDetails: ["Entertaining spaces with kitchen opening.", "Elegant retreat in a quiet setting.", "Apartment An individual multi-unit building."],
      price: "120.00",
    },
    {
      img: "/assets/svg/icons.svg#home-lock",
      title: "Professional",
      details: "Elegant retreat in a quiet Coral Gables setting. This home provides opening.",
      moreDetails: ["house is a single-unit residential building.", "This House provides opening.", "Location of resources will draw attention."],
      price: "310.00",
    },
    {
      img: "/assets/svg/icons.svg#homes",
      title: "Business",
      details: "Apartment An individual multi-unit building. Elegant Coral Gables setting.",
      moreDetails: ["Development team work together in many ways.", "Apartment individual multi-unit building.", "great name for ranch surrounded by valleys."],
      price: "430.00",
    },
    {
      img: "/assets/svg/icons.svg#home-lock",
      title: "Professional",
      details: "Entertaining spaces with kitchen opening. This home provides opening.",
      moreDetails: ["house is a single-unit residential building.", "This House provides opening.", "Location of resources will draw attention."],
      price: "310.00",
    },
  ],
  FeaturedCitiesInEnterprise: [
    { img: "/assets/images/feature/3.jpg", city: "U.S.A" },
    { img: "/assets/images/feature/4.jpg", city: "New York" },
    { img: "/assets/images/feature/6.jpg", city: "England" },
    { img: "/assets/images/feature/5.jpg", city: "America" },
    { img: "/assets/images/feature/7.jpg", city: "Dubai" },
    { img: "/assets/images/feature/5.jpg", city: "England" },
  ],
  PropertyServicesInClassic: [
    {
      img: "/assets/images/service/2.png",
      title: "Mortgage Services",
      details: "Residences can be classified and connected to residences. Different types of housing can be used same physical type.",
    },
    { img: "/assets/images/service/1.png", title: "Property Management", details: "Property management is the operation, maintenance, and oversight of real estate and physical property." },
    { img: "/assets/images/service/3.png", title: "Currency Services", details: "A currency is standardization of money in any form when use or circulation as medium of exchange." },
    {
      img: "/assets/images/service/4.png",
      title: "Important Notification",
      details: "Residences can be classified and connected to residences. Different types of housing can be used same physical type.",
    },
    { img: "/assets/images/service/5.png", title: "Near by me", details: "Residences can be classified and connected to residences. Different types of housing can be used same physical type." },
    { img: "/assets/images/service/1.png", title: "Property Management", details: "Property management is the operation, maintenance, and oversight of real estate and physical property." },
  ],
  Brand1: ["/assets/images/brand/17.png", "/assets/images/brand/18.png", "/assets/images/brand/19.png", "/assets/images/brand/20.png", "/assets/images/brand/21.png", "/assets/images/brand/18.png"],
  Brand2: [
    "/assets/images/brand/6.png",
    "/assets/images/brand/7.png",
    "/assets/images/brand/8.png",
    "/assets/images/brand/9.png",
    "/assets/images/brand/10.png",
    "/assets/images/brand/11.png",
    "/assets/images/brand/7.png",
  ],
  Brand3: ["/assets/images/brand/12.png", "/assets/images/brand/13.png", "/assets/images/brand/14.png", "/assets/images/brand/15.png", "/assets/images/brand/16.png", "/assets/images/brand/13.png"],
  Brand4: ["/assets/images/brand/1.png", "/assets/images/brand/2.png", "/assets/images/brand/3.png", "/assets/images/brand/4.png", "/assets/images/brand/5.png", "/assets/images/brand/2.png"],
};
