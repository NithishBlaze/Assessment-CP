import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {

    const[user,setUser] = useState({
        fname : "",
        email : "",
        contact : "",   
        feedback : ""    
    });

    const changeInput = (event)=>{
        const {type,name,value,checked} = event.target;
        setUser({...user,[name]:type==="checkbox"?checked:value});
    }


    const checkData = (event)=>{
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("Name is required");
            return false;
        }
        if(!user.fname.trim().match("^[a-zA-Z ]{3,30}$")){
            window.alert("Fullname must contain only character 3-30");
            return false;
        }
        if(!user.email.trim().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
          window.alert("Enter a valid email");
          return false;
      }      
        if(!user.contact.trim().match("^[0-9]{9,11}$")){
          window.alert("Enter valid a Contact Number");
          return false;
        }
        if(!user.feedback.trim().match("^[a-zA-Z ]{5,300}$")){
          window.alert("The feedback must be in the range of 5 - 300 characters");
          return false;
      }

      addUser();


      setUser({
        fname: "",
        email: "",
        contact: "",
        feedback: "",
      });
       
      window.alert("Thank you for Contacting Us");
      
    }

    const addUser = (event)=>{
      axios.post(`http://localhost:8000/Users`,user).then(()=>{}).catch((error)=>{})
  }


  return (
    <div className='Contactbox'>
      <section className="Contactform">
        <h2 className="section-title">Contact Us</h2>
        <form onSubmit={checkData} className='formbox' >
            <div>
                <label>Enter your Fullname : </label>{" "}
                <input type='text' name='fname' onChange={changeInput} value={user.fname} className='inputboxform' placeholder='Enter your name'/>
            </div>
            <div>
                <label>Enter your Email : </label>{" "}
                <input type='email' name='email' onChange={changeInput} value={user.email} className='inputboxform' placeholder='Enter your Email'/>
            </div>
            <div>
                <label>Enter your Contact No : </label>{" "}
                <input type='text' name='contact' onChange={changeInput} value={user.contact} className='inputboxform' placeholder='Enter your Contact no'/>
            </div>
            <div>
                <label>Enter your Feedback : </label>{" "}
                <textarea type='text' name='feedback' onChange={changeInput} value={user.feedback} className='inputboxform2' placeholder='Enter your feedback'/>
            </div>

            <button type='submit' className='formsubbutton'>Submit</button>
        </form>
      </section>

      <section className="Clocation">
        <div>
        <h2 className="section-title">Our Location</h2>
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15561.022539447144!2d80.2198157!3d12.8267507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a688f3d32f1%3A0x769131751ee5a50e!2sChangepond%20Technologies!5e0!3m2!1sen!2sth!4v1733806315613!5m2!1sen!2sth"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
       
      <div className='Cvisit'>
          <h2 className="Aboutshoptitle">Visit Our Store</h2>
          <p className="addresscont">Nithish Jewellery, Coats Road, North, N Usman Rd,<br></br> near Pantaloons, T. Nagar, Chennai, Tamil Nadu 600017</p>
      </div>
       

      </section>
    </div>
  )
}

export default Contact
