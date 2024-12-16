import React, { useState } from "react";

const FormValidation = () => {
  const [user, setUser] = useState({
    fname: "",
    term: false,
    password: "",
    email: "",
    contact: "",
  });

  const changeInput = (event) => {
    const { type, name, value, checked } = event.target;
    setUser({ ...user, [name]: type === "checkbox" ? checked : value });
  };

  const checkData = (event) => {
    event.preventDefault();

    // Name 
    if (user.fname.trim() === "") {
      window.alert("Enter your name.");
      return false;
    }
    if (!user.fname.trim().match(/^[a-zA-Z\s]{3,20}$/)) {
      window.alert("Enter a valid full name (3-20 characters, letters only).");
      return false;
    }

    // Email 
    if (user.email.trim() === "") {
      window.alert("Enter your email.");
      return false;
    }
    if (!user.email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      window.alert("Enter a valid email address.");
      return false;
    }

    // Password 
    if (user.password.trim() === "") {
      window.alert("Enter a password.");
      return false;
    }
    if (!user.password.trim().match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? ]).*$/)) {
      window.alert(
        "Password must be at least 8 characters long and include letters, numbers, and special characters."
      );
      return false;
    }

    // Contact 
    if (user.contact.trim() === "") {
      window.alert("Enter your contact number.");
      return false;
    }
    if (!user.contact.trim().match(/^[7-9][0-9]{9}$/)) {
      window.alert("Enter a valid 10-digit contact number starting with 7, 8, or 9.");
      return false;
    }

    // Term
    if (!user.term) {
      window.alert("You must accept the terms and conditions.");
      return false;
    }

    
    window.alert(JSON.stringify(user));
  };

  return (
    <div>
      <h2>Form Validation Component</h2>
      <form onSubmit={checkData}>
        <div>
          <label htmlFor="fname">Enter your first name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={changeInput}
            value={user.fname}
          />
        </div>
        <div>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={changeInput}
            value={user.email}
          />
        </div>
        <div>
          <label htmlFor="password">Enter your password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={changeInput}
            value={user.password}
          />
        </div>
        <div>
          <label htmlFor="contact">Enter your contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            onChange={changeInput}
            value={user.contact}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="term"
            name="term"
            onChange={changeInput}
            checked={user.term}
          />
          <label htmlFor="term">I accept the terms and conditions.</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
