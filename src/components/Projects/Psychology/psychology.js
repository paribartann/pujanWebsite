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

const message="The project was done in collaboration with The USM Psychology department. The intervention application was used in a control group of a larger research project to evaluate the feasibility of voice assistant technology in the recruitment and retention of culturally and linguistically diverse students in psychology programs. Our iPad application was a digital interface to automate the retention experiment of simple single digit mathematical calculations for cognitively weaker children. The application provided interface to generate prompts of mathematical calculations before the start of a rehearsal session and tracked a participant’s history of knowns and unknowns throughout the intervention process. The participants of the experiments were then rehearsed with the new unknowns and tested for the retention of the knowns. We used Text to Speech prompts and flashcard design to go through the retention experiments, aiming to eliminate human on the loop. We also provided various endpoints to analyze the progress of the student groups, common retention and miss patterns observed."

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
        videoId="uTCwMZlLLpQ"
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
          	Memory Retention Voice Agent    
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
