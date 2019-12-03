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

const message="William Carey Medical App is an IOS Tablet Application, designed for William Carey University where the professors were experimenting with a new system of grading their students, by using mobile technologies. Also, we presented the student's new method of entering their dissection data onto the grading system by annotating their assignments using the tablet and later on, the professors would be able to work on their grading. We are currently working on the new stage of the project, where we are applying various data analysis algorithms to observe and produce conclusions about different learning pedagogies for the medical students. "
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
        videoId="BKuEvmLjMrY"
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
	  Medical Dissection Data Collection
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
