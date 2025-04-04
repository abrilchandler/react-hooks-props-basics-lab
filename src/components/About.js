import React from "react";
import Links from "./Links"

function About(props) {
  console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" /> 
      {props.user ? <Links linkedin={props.user.links.linkedin} github={props.user.links.github} /> : null}
    </div>
  );
}
//working
export default About;
