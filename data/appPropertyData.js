import { Bell, BookOpen, DollarSign, Home, MapPin, Settings } from "react-feather";

export const AppPropertyData = {
  WhatAreYouLookingFor: [
    { title: "Kuća", img: "/assets/svg/icons.svg#home-lock", path: "/nekretnine/pretrazi-nekretninu?filtriraniPodaci=%257B%2522cijena%2522%253A%255B100%252C200000%255D%252C%2522povrsina%2522%253A%255B20%252C500%255D%252C%2522tip%2522%253A%2522Ku%25C4%2587a%2522%257D" },
    { title: "Stan", img: "/assets/svg/icons.svg#key", path: "/nekretnine/pretrazi-nekretninu?filtriraniPodaci=%257B%2522cijena%2522%253A%255B100%252C200000%255D%252C%2522povrsina%2522%253A%255B20%252C500%255D%252C%2522tip%2522%253A%2522Stan%2522%257D" },
    { title: "Poslovni", img: "/assets/svg/icons.svg#business", path: "/nekretnine/pretrazi-nekretninu?filtriraniPodaci=%257B%2522cijena%2522%253A%255B100%252C200000%255D%252C%2522povrsina%2522%253A%255B20%252C500%255D%252C%2522tip%2522%253A%2522Poslovni%2520prostor%2522%257D" },
  ],
  PropertyServices: [
    { title: "Kupovina imovine", img: <Home />, details:"Pomažemo vam da pronađete idealnu nekretninu iz naše bogate baze koja uključuje stanove, kuće, vile i zemljišne parcele. Naši stručnjaci pružaju podršku od početnih konsultacija, organizovanja pregleda i pregovora, do kompletne pravne obrade i registracije vlasništva, sve u skladu sa zakonima Crne Gore." },
    { title: "Prodaja nekretnina", img: <DollarSign />, details: "Učinite prodaju vaše nekretnine brzom i profitabilnom uz našu pomoć. Nudimo analizu tržišne vrednosti, kreiranje marketinške strategije, organizaciju pregleda za potencijalne kupce, vođenje pregovora i pravnu podršku tokom čitavog procesa prodaje." },
    { title: "Iznajmljivanje nekretnina.", img: <Bell />, details: "Olakšavamo dugoročno iznajmljivanje stanova, kuća i poslovnih prostora. Naši stručnjaci biraju opcije po vašim kriterijumima, organizuju obilaske i zaključuju ugovore na crnogorskom i ruskom jeziku, uz savete o svim pravnim i poreskim pitanjima." },
    { title: "Podrška transakcijama.", img: <DollarSign />, details: "Pratimo vas kroz sve faze kupoprodajnih transakcija, uključujući proveru dokumenata, zakazivanje kod notara, registraciju vlasništva i rešavanje komunalnih pitanja. Naša potpuna podrška je besplatna pri kupovini iz naše baze, dok se pojedinačne usluge mogu naručiti po potrebi." },

  ],
  OurNewOffer: [
    
    { title: "Profesionalni pristup.", details: "Naša agencija zapošljava iskusne i licencirane agente koji posjeduju duboko poznavanje tržišta nekretnina. Njihova stručnost i profesionalnost garantuju da će vaši interesi biti zastupljeni na najbolji mogući način.", img: "/assets/images/others/icon-2.png" },
    { title: "Zašto izabrati našu agenciju za nekretnine?", details: "U našoj ponudi možete pronaći širok spektar nekretnina – od luksuznih vila i stanova u centru grada, do pristupačnih kuća i apartmana na periferiji. Bez obzira na vaše želje i budžet, sigurni smo da imamo nešto što će vam savršeno odgovarati.", img: "/assets/images/others/icon-1.png" },
    { title: "Širok asortiman nekretnina.", details: "Klijenti bi rado dali povjerenje našoj firmi za nekretnine zbog naše stručnosti, predanosti pružanju vrhunske usluge i dokazane sposobnosti da ostvarimo njihove ciljeve i potrebe u svijetu nekretnina.", img: "/assets/images/others/icon-1.png" },
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
