import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../App.css";
export default function Contact() {
  const navigate=useNavigate()
    const [contactDetail,setContactDetail]=useState({})
  return (
    <div class="mainContactDiv" data-aos="zoom-in">
      <div class="contact-form-container">
        <div class="contact-us">
          {/* <i class="fa-solid fa-delete-left" style={{color:"white"}} onClick={()=>{
            navigate('/about')
          }}></i> */}
          <div class="contact-header">
            <h1>&#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT US</h1>
          </div>
          <div class="social-bar">
            <ul>
              <li>
                <i class="fa-brands fa-square-github"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="header">
          <h1>Let's Get Started</h1>
          <h2>Contact us to start your next project!</h2>
        </div>
        <div class="address">
          <i class="fas fa-map-marker-alt"></i>
          <h3>Bhaktinagar</h3>
        </div>
        <div class="phone">
          <i class="fas fa-phone-alt"></i>
          <h3>7572819370</h3>
        </div>
        <div class="email">
          <i class="fas fa-envelope"></i>
          <h3>schnpatadiya@gmail.com</h3>
        </div>
        <div class="contact-form">
          <form>
            <input placeholder="Name" type="text"  onChange={(e)=>{
                setContactDetail({...contactDetail,name:e.target.value})
            }}/>
            <input placeholder="Email" type="email"  onChange={(e)=>{
                setContactDetail({...contactDetail,email:e.target.value})
            }}/>
            <textarea
              placeholder="Tell us about your project..."
              rows="4" onChange={(e)=>{
                setContactDetail({...contactDetail,discription:e.target.value})
              }}
            ></textarea>
            <button type="button" onClick={(e)=>{
                e.preventDefault()
                fetch('http://localhost:3030/contactpage',{
                    method: "POST",
                    body: JSON.stringify(contactDetail),
                    headers: { "Content-Type": "application/json" },
                })
                console.log("=======================",contactDetail);
            }}>SEND </button>
          </form>
        </div>
      </div>
    </div>
  );
}
