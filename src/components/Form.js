import React, { useState } from "react";
//Controlled form is a form taht derives its input values from a state
function Form({handleFirstNameChange,firstName,handleLastNameChange,lastName,handleNewsletterChange,
newsletter}) {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName}  />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
      type="checkbox"
      id="newsletter"
      onChange={handleNewsletterChange}
      checked={newsletter}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
