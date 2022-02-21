import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/contact.css";
const Contact = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  axios.defaults.withCredentials = true;
  const sendForm = async () => {
    await axios
      .post("http://localhost:3001/send", {
        nama: nama,
        email: email,
        pesan: pesan,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendForm();
  };
  return (
    <div className="contact-container">
      <form action="submit">
        <label htmlFor="nama">nama</label>
        <input
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setNama(e.target.value);
          }}
          value={nama}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label htmlFor="pesan">pesan</label>
        <textarea
          name="pesan"
          id="pesan"
          cols="30"
          rows="10"
          onChange={(e) => {
            e.preventDefault();
            setPesan(e.target.value);
          }}
          value={pesan}
        ></textarea>
        <button onClick={(e) => handleSubmit(e)}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
