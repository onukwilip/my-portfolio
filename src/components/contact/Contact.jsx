import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    //setSuccess(true);
    emailjs
      .sendForm(
        "service_l6q59qb",
        "template_928xftd",
        form.current,
        "0qab9OBvFLtvP0FeQ"
      )
      .then(
        (result) => {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="con-main" id="Contact">
      <div className="row">
        <div className="col-xl-6 co-l-side">
          <div className="l-side-wrap">
            <h1>Get in touch</h1>
            <h1 className="highlight">Contact me!</h1>
          </div>
        </div>
        <div className="col-xl-6 co-r-side">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="">Name:</label>
              <input
                required
                type="text"
                name="user_name"
                placeholder="Enter name"
                id=""
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="">Email address</label>
              <input
                type="email"
                required
                name="user_email"
                id=""
                placeholder="Enter email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="">Message</label>
              <textarea
                required
                name="message"
                className="form-control"
                placeholder="Enter message"
                id=""
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <br />
            <div align="center">
              <button>Send</button>
            </div>
            <br />
            <p align="center">{success && "Message sent successfully..."}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
