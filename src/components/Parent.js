import React,{useState} from "react"
import Form from "./Form"
import DisplayData from "./DisplayData";
function Parent (){
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsletter, setNewsletter] = useState(false)
    function handleFirstNameChange(event){
        setFirstName(event.target.value)
      }
      console.log(firstName)
      function handleLastNameChange(event){
        setLastName(event.target.value)
      }
      function handleNewsletterChange(event){
        setNewsletter(event.target.checked);
      }return(
        <div>
        <Form 
        handleFirstNameChange={handleFirstNameChange} 
        firstName={firstName}
        handleLastNameChange={handleLastNameChange} 
        lastName={lastName}
        handleNewsletterChange={handleNewsletterChange}
        newsletter={newsletter}/>
        <DisplayData firstName={firstName} lastName={lastName}/>
        </div>
      )
}
export default Parent;