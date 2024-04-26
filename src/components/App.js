import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./link";
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home user = {user.name} city={user.city} colour={user.color}/>
      <About user = {user.bio} links={user.links}/>
    </div>
  );
}

export default App;
