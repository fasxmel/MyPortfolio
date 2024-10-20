import styles from "./Contact.module.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iy4rikg', 
        'template_j0ggf6z', 
        form.current,
         
        {
        publicKey: '0L2IDyhf6LfMUoOic',  //public key
      })

      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent. Thank you!",
            icon: "success"
          });
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };





  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contact</h1>

      {/* TODO: Add functionality to send email to resive email also */}
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.formGroup}>

            <label htmlFor="name" hidden>
               Name
            </label>
            <input
            id="name" 
            type="text" 
            name="user_name"
            placeholder="Name" 
            required 
            />

            <label htmlFor="email" hidden>
               Email
            </label>
            <input
            id="email" 
            type="email" 
            name="user_email"
            placeholder="Email" 
            required 
            />

            <label htmlFor="message" hidden>
               Message
            </label>
            <textarea
            id="message" 
            name="message"
            placeholder="Message" 
            required >
            </textarea>

          </div>

          <input className="hover btn" type="submit" value="Submit"/>

        </form>

    </section>
  );
};

export default Contact;
