import Image from "next/image";
import React from "react";
import Link from "next/link";
import contactimg from "../public/assets/contact.png";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section id="contactSection" className={`${styles.contactSection}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.contactInfo}`}>
          <Image src={contactimg} alt="contact" className={`${styles.contactImage}`} />
          <h2 className={`${styles.contactName}`}>OWAIS ABDULLAH</h2>
          <p className={`${styles.contactDescription}`}>
            AI-powered WordPress Developer & Digital Marketer <br />
            I am available for freelance work. Connect with me via Email or call.
          </p>
          <h2 className={`${styles.contactSubtitle}`}>ADDRESS</h2>
          <p className={`${styles.contactDetails}`}>Karachi, Pakistan</p>
          <h2 className={`${styles.contactSubtitle}`}>EMAIL</h2>
          <Link href="mailto:owais@oneklickdigi.com" className={`${styles.contactLink}`}>
            owais@oneklickdigi.com
          </Link>
          <h2 className={`${styles.contactSubtitle}`}>PHONE</h2>
          <Link href={"tel:+923262283140"}>
            <p className={`${styles.contactDetails}`}>+923262283140</p>
          </Link>
        </div>
        <div className={`${styles.contactFormContainer}`}>
          <h2 className={`${styles.formTitle}`}>CONNECT WITH ME</h2>
          <form action="https://formspree.io/f/xnnqvnzl" method="POST">
            <div className={`${styles.formGroup}`}>
              <label htmlFor="name" className={`${styles.formLabel}`}>NAME</label>
              <input type="text" id="name" name="name" className={`${styles.formInput}`} required />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="email" className={`${styles.formLabel}`}>EMAIL</label>
              <input type="email" id="email" name="email" className={`${styles.formInput}`} required />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="subject" className={`${styles.formLabel}`}>SUBJECT</label>
              <input type="text" id="subject" name="subject" className={`${styles.formInput}`} required />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="message" className={`${styles.formLabel}`}>MESSAGE</label>
              <textarea id="message" name="message" className={`${styles.formTextarea}`} required />
            </div>
            <button className={`${styles.submitButton}`}>SEND MESSAGE</button>
          </form>
          <p className={`${styles.formFooterText}`}>
            Send me a message, and I&apos;ll contact you shortly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;