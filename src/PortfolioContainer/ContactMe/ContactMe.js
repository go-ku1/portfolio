import React, { useState } from "react";
import imgBack from "../../../src/images/emailbg.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Typical from "react-typical";
import "./ContactMe.css"
import axios from 'axios'
import {toast} from 'react-toastify';

export default function ContactMe(props) {
  
  let fadeInHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInscreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.CurrentScreenFadeIn.subscribe(fadeInHandler);

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [banner,setBanner]=useState("")
    const [bool,setBool]=useState(false)

    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleMessage=(e)=>{
        setMessage(e.target.value)
    }
    console.log(name);
    console.log(email);
    console.log(message);

    const submitForm=async(e)=>{
      e.preventDefault();
      try{
        let data={
          name,
          email,
          message,
        };
        setBool(true);
        const res=await axios.post('/contact',data)
        if(name.length===0||email.length===0||message.length===0){
          setBanner(res.data.msg)
          toast.error(res.data.msg)
          setBool(false)
        }
        else if(res.status===200){
          setBanner(res.data.msg)
          toast.success(res.data.msg)
          setBool(false)
        }
      }
        catch(error){
          console.log(error)
        }
      }

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"leave me message"} />
      <div className="central-form">
        <div className="col">
          <h2>
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Email me",
                1000,
                "Get in touch",
                1000,
                "lets talk",
                1000,
              ]}
            />
          </h2>

          <a href="https://www.facebook.com/zayn/">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/zayn/?hl=en">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@Zayn">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="https://twitter.com/zaynmalik">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
            <div className="img-back">
                <h4>Send me an Email</h4>
                <img src={imgBack} alt="image not found"/>
            </div>
            <form onSubmit={submitForm}>
                <p>{banner}</p>
                <label htmlFor="name">Name</label>
                <input type='text'
                       onChange={handleName}
                       value={name}/>

                <label htmlFor="email">Email</label>
                <input type='email'
                       onChange={handleEmail}
                       value={email}/>

                <label htmlFor="message">Message</label>
                <textarea type='text'
                       onChange={handleMessage}
                       value={message}/>

                <div className="snd-btn">
                    <button type="submit">
                        Send <i className="fa fa-paper-plane"/>
                        {bool? (<b className="load">
                          <img src={load1} alt="image no available"/>
                          </b>):("")}
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
