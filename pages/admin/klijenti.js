import DataTable from "react-data-table-component";
import axios from "axios";
import LayoutNested from './layout'
import { useEffect, useState } from "react";
import { Trash2 } from "react-feather";
import { toast, ToastContainer } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast

const Klijenti = () => {
  const [bjeleska, postaviBjelesku] = useState("");
  let [korisnici, postaviKorisnike] = useState([]);

  useEffect(() => {
    axios.get('/api/korisnici').then(res => {
      postaviKorisnike(res.data);
    }).catch(err => console.log(err))
  }, []);

  const brisiKorisnika = (row) => {
    axios.post('/api/izbrisiKorisnika', { id: row.id }).then(() => {
      axios.get('/api/korisnici').then(res => {
        postaviKorisnike(res.data);
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  };

  const toastFnc = (row) => {
    // Dohvatanje trenutnog ID-a toasta
    const toastId = toast.warn(
      <div>
        <p>Da li ste sigurni da želite da obrišete željenog korisnika?</p>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          {/* Dugme za potvrdu */}
          <button
            onClick={() => {
              brisiKorisnika(row); // Brisanje korisnika
              toast.success("Korisnik je uspešno obrisan.");
              toast.dismiss(toastId); // Zatvaranje trenutnog toasta
            }}
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "8px 12px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Da, siguran sam
          </button>
  
          {/* Dugme za odbijanje */}
          <button
            onClick={() => {
              toast.info("Akcija je otkazana.");
              toast.dismiss(toastId); // Zatvaranje trenutnog toasta
            }}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "8px 12px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Ne, izađi
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false, // Onemogućava automatsko zatvaranje
        closeOnClick: false, // Onemogućava zatvaranje klikom na toast
        draggable: false, // Onemogućava pomeranje
      }
    );
  };

  const Kolone = [
    {
      name: "ID",
      selector: (row) => <div style={{ textAlign: "center" }}>{row.id}</div>,
      width: "5%",
    },
    {
      name: "Ime",
      selector: (row) => (
        <div>
          <strong>{row.ime_prezime}</strong>{" "}
        </div>
      ),
      width: "20%",
    },
    {
      name: "Email",
      selector: (row) => (
        <div >
          {row.email}
        </div>
      ),
      width: "15%",
    },
    {
      name: "Kontakt",
      selector: (row) => (
        <div >
          {row.kontakt}
        </div>
      ),
      width: "15%",
    },

    {
      name: "Bjeleske",
      selector: (row) => (
        <div className="editable" style={{ display: 'flex', flexDirection: 'column' }}>
          <textarea onInput={(e) => { postaviBjelesku(e.target.value) }} height="100%" rows="5" cols='30' width="100%">
            {row.bjeleske}
          </textarea>
          <button onClick={() => axios.post('/api/bjeleska', { id: row.id, bjeleska: bjeleska }).then(data =>{toast.success(`Bjeleška je uspješno dodata za korisnika "${row.ime_prezime}"`)}).catch(err => console.log(err))} className="btn btn-gradient mt-3">Sacuvaj bjelesku</button>
        </div>
      ),
      width: "30%",
    },
    {
      name: "Akcije",
      selector: (row) => (
        <div className="editable" style={{ display: 'flex', flexDirection: 'column' }}>
          <button onClick={() => { toastFnc(row); }} style={{ display: 'flex', justifyContent: 'space-between' }} type="button" className="btn btn-dashed btn-pill">
            <Trash2 style={{ height: 20, color: 'red' }} /> Izbriši
          </button>
        </div>
      ),
      width: "10%",
    },
  ];

  return (
    <>

      <DataTable
        columns={Kolone}
        noDataComponent={
          <p style={{ marginTop: 30, fontSize: "25px", textAlign: "center" }}>
            Ne postoje podaci za prikaz.
          </p>
        }
        selectableRows
        data={korisnici}
      />

      {/* Toast Container for displaying toasts */}
    </>
  );
}

Klijenti.getLayout = function getLayout(page) {
  return <LayoutNested>{page}</LayoutNested>;
};

export default Klijenti;
