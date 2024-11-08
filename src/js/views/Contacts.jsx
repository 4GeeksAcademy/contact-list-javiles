import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import CardContact from "../component/CardContact.jsx";

const Contacts = () => {

    const { store, actions } = useContext(Context)
    console.log(store.listContacts)



    return (

        <div className="w-75 mx-auto">
            <ul className="list-group mt-3">
                {store.listContacts && store.listContacts.length > 0 && store.listContacts.map((contact, index) => {
                    return (
                        <CardContact contact={contact} key={index} />
                    )
                })}
            </ul>

            <div className="d-flex justify-content-center">
                <Link to="/AddContact">
                    <button className="btn btn-warning mt-2">Agregar un Contacto</button>
                </Link>
            </div>
        </div>
    );
};
export default Contacts;