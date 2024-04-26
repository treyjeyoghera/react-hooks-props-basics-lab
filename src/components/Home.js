import React from "react";
import Links from "./link";
function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>,
      <Links/>
    </div>
  );
}

export default Home;
