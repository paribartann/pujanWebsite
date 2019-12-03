import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/gridmodule.css";
import { Icon } from "antd";
import thumbnail from "../../Images/paper1.png";

function ProjectView(props) {
  return (
    <div className="card" style={{padding:"2%" }}>
      <img src={thumbnail} alt="Avatar" style={{ width: "100%" }} />
      <div className="containerItem">
        <h4>
          <b>{props.title}</b>
        </h4>
        <p>{props.description}</p>
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

export default ProjectView;
