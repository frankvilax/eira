import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_35nazrw",
        "template_tztn7hl",
        form.current,
        "p9-0Osd1EWCx5rcmi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <label className="formLabel">nome / name</label>
      <input className="input" type="text" name="from_name" />
      <label className="formLabel">email</label>
      <input className="input" type="email" name="from_email" />
      <label className="formLabel">telemóvel / phone</label>
      <input className="input" type="email" name="from_email" />
      <label className="formLabel">mensagem / message</label>
      <textarea className="input" name="message" />
      <input className="submitButton" type="submit" value="Send" />
    </form>
  );
};
