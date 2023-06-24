import DataTable from "react-data-table-component";
import axios from "axios";
import LayoutNested from './layout'
import { useEffect,useState } from "react";
import { useAlert } from "react-alert";

import { Trash2 } from "react-feather";
const Klijenti=()=>{
  const [bjeleska,postaviBjelesku]=useState("");

    let [korisnici,postaviKorisnike]=useState([]);
    useEffect(()=>{
        axios.get('/api/korisnici').then(res=>{
            postaviKorisnike(res.data);
            console.log(res)
        }).catch(err=>console.log(err))

        
    },[]);

    const brisiKorisnika=(row)=>{
      axios.post('/api/izbrisiKorisnika',{id:row.id}).then(()=>{
        axios.get('/api/korisnici').then(res=>{
          postaviKorisnike(res.data);
          console.log(res)
      }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
    };   

    const alert = useAlert();
    const alertFnc = (row) => {
      alert.show("Da li ste sigurni da želite da obrižete izabrani projekat?", {
        title: "Upozorenje!",
    
        actions: [
          {
            copy: "Da, siguran sam",
            onClick: () => {
              brisiKorisnika(row);
            },
          },
          {
            copy: "Ne, Izađi",
            onClick: () => {},
          },
        ],
      });
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
      <div >
        <strong>{row.ime_prezime}</strong>{" "}
      </div>
    ),
    width: "20%",
  },
  {
    name: "Email",
    selector: (row) => (
      <div disabled>
        {row.email}
      </div>
    ),
    width: "15%",
  },
  {
      name: "Kontakt",
      selector: (row) => (
        <div disabled>
          {row.kontakt}
        </div>
      ),
      width: "15%",
    },
  
    {
      name: "Bjeleske",
      selector: (row) => (
        <div className="editable"  style={{display:'flex',flexDirection:'column'}}>
          <textarea onInput={(e)=>{postaviBjelesku(e.target.value)}} height="100%" rows="5" cols='30' width="100%">
          {row.bjeleske}</textarea>
          <button onClick={()=>axios.post('/api/bjeleska',{id:row.id,bjeleska:bjeleska}).then(data=>console.log(data)).catch(err=>console.log(err))} className="btn btn-gradient mt-3">Sacuvaj bjelesku</button>
        </div>
      ),
      width: "30%",
    },
    {
      name: "Akcije",
      selector: (row) => (
        <div className="editable"  style={{display:'flex',flexDirection:'column'}}>
          <button onClick={()=>{
            alertFnc(row);
           }} style={{display:'flex',justifyContent:'space-between'}} type="button" className="btn btn-dashed btn-pill">
                <Trash2 style={{height:20,color:'red'}}/> Izbriši
                </button>
        </div>
      ),
      width: "10%",
    },

    /**/
];
    return(<>
 <DataTable

            columns={Kolone}
            noDataComponent={
              <p
                style={{ marginTop: 30, fontSize: "25px", textAlign: "center" }}
              >
                Ne postoje podaci za prikaz.
              </p>
            }
            selectableRows
            pagination={true}
            data={korisnici}
          />
        </>)
}
Klijenti.getLayout = function getLayout(page) {
    return <LayoutNested>{page}</LayoutNested>;
  };
  
  export default Klijenti;