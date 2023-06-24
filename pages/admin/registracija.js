import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
const Registracija = () => {
  const [prikazi, postaviPrikazano] = useState();
  const [unos, postaviUnos] = useState({
    ime: "",
    email: "",
    sifra: "",
  });
  let navigacija = useRouter();
  console.log(unos);
  const handleChange = (e) => {
    postaviUnos((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const odgovor = await axios.post(`/api/registracija`, { unos });
      if (odgovor.data == "Korisnik sa unijetim podacima već postoji.") {
        postaviPrikazano("block");
        console.log(odgovor);
      } else {
        postaviPrikazano("none");
        navigacija.push("/admin");

        console.log(odgovor);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auth">
      <h1>Registracija</h1>
      <form>
        <input
          name="ime"
          required
          type="text"
          onChange={handleChange}
          placeholder="ime"
        />
        <input
          name="email"
          required
          type="email"
          onChange={handleChange}
          placeholder="email"
        />
        <input
          name="sifra"
          required
          type="text"
          onChange={handleChange}
          placeholder="sifra"
        />
        <button onClick={handleSubmit}>Registruj se</button>
        <p style={{ display: prikazi }}>
          Korisnik sa postojećim podacima za autentikaciju već postoji
        </p>
        <span>
          Da li već imate nalog? <Link href="/admin/prijava">Prijavi se</Link>
        </span>
      </form>
    </div>
  );
};

export default Registracija;
