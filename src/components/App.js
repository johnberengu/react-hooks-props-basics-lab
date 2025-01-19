import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; // Data from user object

console.log(user); // Log user data to ensure it's available

function App() {
  return (
    <div>
      <NavBar />
      <Home 
        name={user.name} 
        city={user.city} 
        color={user.color} 
      />
      <About 
        bio={user.bio} 
        github={user.links.github} 
        linkedin={user.links.linkedin} 
      />
    </div>
  );
}

export default App;
