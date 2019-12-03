import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/listmodule.css";
import thumbnail from "../../Images/paper1.png";
import { Icon } from "antd";
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

function Lists(props) {
  return (
    <div className="List">
      <ul className="list-group">
        <li className="list-group-item">
          <div style={{ display: "flex" }}>
            <div style={{ width: "100%" }}>
              <h2 className="text-center" style={{ padding: "10px" }} >
                <u>{props.title}</u>
              </h2>
	  <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
              <p>{props.description}</p>
	  </ReactTextCollapse>
            </div>
          </div>
          <div className="text-center">
            <a href={props.href}>
              <span style={{ fontSize: "24px" }}>
                {" "}
                <Icon type="read" style={{ padding: "10px" }} />
              </span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Lists;
