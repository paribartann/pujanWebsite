import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/gridmodule.css";
import { Icon } from "antd";
import thumbnail from "../../Images/paper1.png";
import ReactTextCollapse from "react-text-collapse"
const TEXT_COLLAPSE_OPTIONS = {
  collapse: false, // default state when component rendered
  collapseText: '... Show more', // text to show when collapsed
  expandText: 'show less', // text to show when expanded
  minHeight: 300, // component height when closed
  maxHeight: 500, // expanded to
  textStyle: { // pass the css for the collapseText and expandText here
    color: "blue",
    fontSize: "20px"
  }
}

function Grid(props) {
  return (
    <div className="card" style={{padding:"2%" }}>
      <img src={props.thumbnail} alt="Avatar" style={{ width: "100%" }} />
      <div className="containerItem">
        <h4>
          <b>{props.title}</b>
        </h4>
	  <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
        <p>{props.description}</p>
	  </ReactTextCollapse>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <span style={{ fontSize: "24px"}}>
            {" "}
            <Icon type="read" style={{ padding: "10px" }} />
            <button type="button" className="btn btn-primary">
              Read More
            </button>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Grid;
