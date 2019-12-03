import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar/Navbar";
import Lists from "../ListComponent/listmodule_without_expand";
function Projects() {
  return (
    <div className="container">
    <Navbar />
    <div className="container" style={{ padding: "100px" }}>
           <Lists
          title="Language Tutor"
          description="Developed a Voice Driven Language tutor (based on Amazon Alexa Skill) which was a verbal communication tool for teaching user multiple languages (Duolingo Style) in an integrated environment.  "
          href="/projects/voice"
        thumbnail="https://carlisletheacarlisletheatre.org/images/alexa-logo-5.jpg"
          />

	  <Lists
          title="Memory Retention Voice Agent"
          description="An iPad application for USM Psychology department to study the feasibility of voice assistant technology in retention experiments of single digit mathematical calculations for cognitively weaker children. "
          href="/projects/psychology"
          thumbnail="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/University_of_Southern_Mississippi_seal.svg/1200px-University_of_Southern_Mississippi_seal.svg.png"
        />

	  <Lists
          title="QuickLabel"
          description="A Web-Based Image Segmentation Tool for faster creation of Semantic   
Segmentation Datasets. The tool was used to create a dataset for Indoor Navigation   
system."
	  thumbnail="http://pujanpaudel.com/quicklabel.png"
          href="/projects/quicklabel"
        />

        <Lists
          title="Medical Dissection Data Collection"
          description="An iPad application for William Carey University in enhancing the curriculum of Medicine by engaging in innovative data collection/grading strategies for the school."
          href="/projects/medical"
	  thumbnail="http://www.wmcarey.edu/sites/default/files/pictures/12WCUCOM.png"
        />

      </div>
    </div>
  );
}

export default Projects;
