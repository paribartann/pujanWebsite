import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import { Jumbotron, Image } from "react-bootstrap";
import MainImage from "../../Images/main.jpeg";
import { Icon } from "antd";
import Grid from "../GridComponent/gridmodule";
const message =
  "I am Pujan Paudel, an undergraduate researcher at the University of Southern Mississippi!";

function Homepage() {
  return (
    <div className="container">
      <Navbar />

      <div className="container" style={{ height: "90%" }}>
        <div className="row" style={{ height: "40%" }}>
          <div
            className="col-lg-4 col-md-4 col-sm-4 col-xs-4"
            style={{ padding: 0 }}
          >
            <Image
              src={MainImage}
              alt="Profile Picture"
              style={{ height: "85%", width: "100%" }}
              rounded
            />
          </div>
          <div
            className="col-lg-8 col-md-8 col-sm-8 col-xs-8"
            style={{ padding: 0 }}
          >
            <Jumbotron style={{ height: "85%", width: "100%" }}>
              <div className="container">
                <h1 className="page-header">
                  Hello, World! <small>Welcome to my portfolio!</small>
                </h1>
                <p style={{ fontSize: "22px" }}> {message} </p>
              </div>
              <div className="container">
                <ul className="list-inline">
                <li className="list-inline-item">
                    <a
                      href="http://pujanpaudel.com/PUJAN_PAUDEL.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon type="file" style={{ padding: "5px" }} />
                      CV
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://scholar.google.com/citations?user=8K4IiBwAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon type="google" style={{ padding: "5px" }} />
                      Google Scholar
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/codepujan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon type="github" style={{ padding: "5px" }} />
                      Github
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://devpost.com/codepujan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon type="code" style={{ padding: "5px" }} />
                      Devpost
                    </a>
                  </li>
                </ul>
              </div>
            </Jumbotron>
          </div>
          <div>
            <div className="text-center">
              <h3>
                <u>Research Statement</u>
              </h3>
            </div>
            <div>
              <blockquote
                style={{
                  color: "#666",
                  margin: 0,
                  paddingLeft: "3em",
                  borderLeft: "0.5em #eee solid"
                }}
              >
                <p style={{ fontSize: "18px" }}>
                  I have been studying social bots on Twitter and their impact
                  on social movements for the past two year. I am interested in
                  devising methods to understand all types of threats such as
                  information manipulation, disinformation to online social
                  spaces. I am also interested in mining large scale datasets of
                  human conversations and studying communication patterns from
                  it by experimental design and complex network analysis.
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        <div style={{ height: "20%", width: "100%" }}>
          <div className="text-center">
            <h3>
              <u>Latest</u>
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "6fr 6fr" }}>
            <div style={{ padding: "15px" }}>
              <Grid
                title="How the Tables Have Turned: Studying the New Wave of Social Bots on Twitter Using Complex Network Analysis Techniques"
                description="Twitter bots have evolved from easily-detectable, simple content spammers with bogus identities to sophisticated players embedded in deep levels of social networks, silently promoting affiliate campaigns, marketing various products and services, and orchestrating or coordinating political activities. Much research has been reported on building accurate machine learning classifiers to identifying bots in social networks; recent works on social bots have started the new line of research on the existence, placement, and functions of the bots in a collective manner. In this paper, we study two families of Twitter bots which have been studied previously with respect to spamming activities through advertisement and political campaigns, and perform an evolutionary comparison with the new waves of bots currently found in Twitter. We uncover various evolved tendencies of the new social bots under social, communication, and behavioral patterns. Our findings show that these bots demonstrate evolved core-periphery structure; are deeply embedded in their networks of communication; exhibit complex information diffusion and heterogeneous content authoring patterns; perform mobilization of leaders across communication roles; and reside in niche topic communities. These characteristics make them highly deceptive as well as more effective in achieving operational goals than their traditional counterparts. We conclude by discussing some possible applications of the discovered behavioral and social traits of the evolved bots, and ways to build effective bot detection systems."
          thumbnail="http://pujanpaudel.com/asonamimage.png"
          href="http://pujanpaudel.com/asonam2019.pdf"    
	  />
            </div>
            <div style={{ padding: "15px" }}>
              <Grid
                title="The Devil is in the Details"
                description="Twitter bots have been exercised by political parties and state-level agencies in many contexts. From state-sponsored trolls to political amplifiers, bots have made their mark in the elections. But, the question of how effective and successful strategies of these bots could be in comparison to humans in the same election is an open question. In this work, we study the Twitter bots in the Mayoral Election of Italy in 2013 and compare them with human users activity. Our analysis of the echo-chamber effect, the emotional cost of information diffusion, and mechanism of information spreading reveals us the bots being able to reach wider ideology of political ideology by tweeting with lesser emotional cost in their tweets. We also conduct meme analysis and longitudinal analysis of user roles where the Twitter bots have an edge on showing more effective tweeting and diffusing behaviours. We then discuss the possible implications of this effective behaviour of bots on multiple dimensions and how twitter bots could be deployed in jeopardizing the political process."
	  href="http://pujanpaudel.com/italianelection.pdf"
          thumbnail="http://pujanpaudel.com/devilsimage.png"
	  />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        <span> &copy; Pujan Paudel | 2019 </span>
      </div>
    </div>
  );
}

export default Homepage;
