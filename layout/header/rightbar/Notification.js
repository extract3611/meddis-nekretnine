import Link from 'next/link'
import React from 'react'
import { Bell } from 'react-feather'
import { useSelector } from 'react-redux'
import { Media } from 'reactstrap'

const Notification = () => {
    let neodobreneNekretnine=useSelector(state=>state.neodobreneNekretnine.niz);
    return (
        <li className="onhover-dropdown notification-box">
            <Bell />
            <span className="label label-shadow label-pill notification-badge">{neodobreneNekretnine.length}</span>
            <div className="notification-dropdown onhover-show-div">
                <div className="dropdown-title">
                    <h6>Notifikacije</h6>
                    <Link href='/admin/neodobrene-nekretnine'>Prikaži sve</Link>
                </div>
                <ul>
                    {neodobreneNekretnine.map((nekretnina,index)=>{
                        return (<li key={index}>
                            <Media className="media">
                                <div className="icon-notification bg-primary-light">
                                <img src={`/slike/${nekretnina.slika}`} className="img-fluid" alt='' />

                                </div>
                                <Media body className="media-body">
                                    <h6>{nekretnina.naziv}</h6>
                                    <span>{nekretnina.datum}</span>
                                    <p className="mb-0">{nekretnina.opis}</p>
                                    <ul className="user-group">
                                     
                                        
                                    </ul>
                                </Media>
                            </Media>
                        </li>)
                    })}
                    
              
                </ul>
            </div>
        </li>
    )
}

export default Notification