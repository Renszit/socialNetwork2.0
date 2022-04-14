import React from "react";
import styles from "../../styles/registration.module.css";
export default function Form() {
  const validateFormWithJS = async (e: any) => {
    e.preventDefault();
    const name = document.querySelector("#first").value;
    const last = document.querySelector("#last").value;
    const email = document.querySelector("#email").value;

    if (!name || !last) {
      alert("Name is required");
      return false;
    }
    if (!email) {
      alert("Email is required");
      return false;
    }
    const data = {
      first: name,
      last: last,
      email: email,
    };

    const endpoint = "/api/form";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };

  return (
    <form
      className={styles.formContainer}
      action="/api/form"
      onSubmit={(e) => validateFormWithJS(e)}
      method="post"
    >
      <label htmlFor="first">First Name:</label>
      <input type="text" id="first" name="first" />
      <label htmlFor="last">Last Name:</label>
      <input type="text" id="last" name="last" />
      <label htmlFor="email">email:</label>
      <input type="email" id="email" name="email" />
      <button type="submit">Submit</button>
    </form>
  );
}
