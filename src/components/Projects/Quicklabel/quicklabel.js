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

const message="This project is called QuickLabel. This project allows various users (Research scholars, or Image processing enthusiasts) to create Image Segmentation Datasets of their own. It allows user to manage multiple private datasets containing thousands of images, as well as work on multiple datasets created by other users inside the system. After they create dataset and enter various metadata related to it , they can upload any number of images which they want to semantically segment inside our system . They are presented with an integrated editor system where they can quickly provide semantic label to the images. The goal of this project was to reduce time of traditional method (MIT Labelme) while creating dataset annotations for Semantic Segmentation. For this, the users weren't just presented the raw images, but instead, the initial Image presented to them is Meanshift Image. Compared to the previous approach of plotting down multiple polygon points, they can apply various set merge operations to quickly create semantic segmentation images and hence, create the dataset. "
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
        videoId="gx8njZeBDOQ"
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
          	QuickLabel      
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
