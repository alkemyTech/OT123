import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createContact } from "../../app/state/contact";

export function Contacts() {
  const dispatch = useDispatch();

  const [newContact, setNewContact] = useState({});

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("ENTRE AL IFFFF");
    dispatch(createContact(newContact));
  };
  console.log("newContact", newContact);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Contacto</h1>

        <div>
          <label> Nombre </label>
          <input name="name" onChange={handleChange} />
        </div>

        <div>
          <label> Phone </label>
          <input name="phone" onChange={handleChange} />
        </div>

        <div>
          <label> Email </label>
          <input name="email" onChange={handleChange} />
        </div>

        <div>
          <label> Message </label>
          <input name="message" onChange={handleChange} />
        </div>

        <button type="submit">Mandar</button>
      </form>
    </div>
  );
}
