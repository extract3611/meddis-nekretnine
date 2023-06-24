export const InputForm = [
  { name: "status", label: "Status Nekretnine", size: "12", options: ["Status Nekretnine", "Izdavanje", "Prodaja"] },
  { name: "tip", label: "Tip Nekretnine", size: "12", options: ["Tip Nekretnine", "Stan", "Kuća", "Poslovni prostor", "Zemljište","Vila"] },
  { name: "grad", label: "Grad", size: "6", options: ["Grad","Bar","Podgorica","Nikšić","Pljevlja","Bijelo Polje","Berane","Cetinje", "Ulcinj","Budva","Kotor","Tivat","Herceg Novi","Kolašin","Žabljak"] },
  { name: "spavaceSobe", label: "Spavace Sobe", size: "6", options: ["Spavace Sobe", 1, 2, 3, 4] },
];

export const createPropertyInputForms = [
  { name: "tipNekretnine", label: "Tip Nekretnine", size: "12", options: ["Tip nekretnine", "Stan", "Kuća", "Poslovni prostor", "Zemljište","Vila"], validation: { required: true } },
  { name: "statusNekretnine", label: "Status Nekretnine", size: "12", options: ["Status Nekretnine", "Izdavanje", "Prodaja"], validation: { required: true } },
  { name: "cijenaNekretnine", label: "Cijena Nekretnine", placeHolder: "€2800", validation: { required: true } },
  { name: "maksSoba", label: "Sobe", size: "6", options: ["Maks. Soba", 1, 2, 3, 4, 5, 6], validation: { required: true } },
  { name: "bed", label: "Bed", size: "6", options: ["Bed", 1, 2, 3, 4], validation: { required: true } },
  { name: "kupatila", label: "kupatila", size: "6", options: ["kupatila", 1, 2, 3, 4], validation: { required: true } },
  { name: "povrsinaNekretnine", label: "Povrsina Nekretnine", placeHolder: "85 m2", validation: { required: true } },
  { name: "cijenaNekretnine", label: "Cijena Nekretnine", placeHolder: "€2800", validation: { required: true } },
];
export const InputFormAdmin = [
  { name: "status", label: "Status Nekretnine", size: "12", options: ["Status Nekretnine", "Izdavanje", "Prodaja"] },
  { name: "tip", label: "Tip Nekretnine", size: "12", options: ["Tip nekretnine", "Stan", "Kuća", "Poslovni prostor", "Zemljište","Vila"] },
  { name: "grad", label: "grad", size: "6", options: ["Grad","Bar","Podgorica","Nikšić","Pljevlja","Bijelo Polje","Berane","Cetinje", "Ulcinj","Budva","Kotor","Tivat","Herceg Novi","Kolašin","Žabljak"] },
  
];