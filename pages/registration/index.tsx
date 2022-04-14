import styles from "../../styles/registration.module.css";
import React from "react";
import { Header, Footer } from "../../components";
import Form from "./registrationForm";

export default function Registration() {
  return (
    <div>
      <Header />
      <div className={styles.registrationPage}>
        <h1>Registration</h1>
        <div className={styles.formContainer}>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}
