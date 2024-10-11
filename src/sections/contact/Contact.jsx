import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contact</h1>

      
        <form>
          <div className={styles.formGroup}>

            <label htmlFor="name" hidden>
               Name
            </label>
            <input
            id="name" 
            type="text" 
            name="name"
            placeholder="Name" 
            required 
            />

            <label htmlFor="email" hidden>
               Email
            </label>
            <input
            id="email" 
            type="text" 
            name="email"
            placeholder="Email" 
            required 
            />

            <label htmlFor="massage" hidden>
               Massage
            </label>
            <textarea
            id="massage" 
            name="massage"
            placeholder="Massage" 
            required >
            </textarea>

          </div>

          <input className="hover btn" type="submit" value="Submit"/>

        </form>

    </section>
  );
};

export default Contact;
