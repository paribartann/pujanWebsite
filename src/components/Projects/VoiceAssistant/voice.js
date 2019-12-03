import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Navbar/Navbar";
import { Jumbotron, Image } from "react-bootstrap";
import MainImage from "../../../Images/main.jpeg";
import YouTube from 'react-youtube';
 const opts = {
      height: '600',
      width: '600',
      playerVars: {
        autoplay: 0
      }
    };
const message="Language Trainer is an integrated Alexa Skill System, which runs on Amazon Alexa with the command, Hey Alexa, Ask my Language Trainer to teach me a new language. And the user can get started with learning a new language (there are 6 of them currently). Language Trainer is an environment where users are encouraged to learn new words, based on the increasing difficulty level of their progress with the language, and also rewarded for their leveling up, quizzed around, all with the medium of voice only. I tried to make sure their language learning process was simplified by using words, prompts and using them in sentences composed of words they already know."

function Quicklabel(props) {
  return (
    <div className="container" style={{"max-width":"100%"}}>
      <Navbar />
    <div className="container" style={{width:"100%",height: "90%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
            style={{ padding: 0 }}
          >
          <YouTube
        videoId="7u-lJRwddRg"
        opts={opts}
      />
	  
	  </div>
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
            style={{ padding: 0 }}
          >
            <Jumbotron style={{padding:"0px", height: "100%", width: "100%" }}>
              <div className="container">
                <h1 className="page-header">
          	Language Tutor    
	  </h1>
                <p style={{ fontSize: "18px" }}> {message} </p>
              </div>
 	 </Jumbotron>
	  </div>
	  </div>
	  </div>
	  </div>
  );
}

export default Quicklabel;
