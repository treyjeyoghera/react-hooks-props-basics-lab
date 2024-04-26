import React from "react";
import Links from "./link";
function About({ bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio !== "" && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <links/>
    </div>
  );
}


export default About;
