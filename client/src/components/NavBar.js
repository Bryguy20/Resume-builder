import React from "react";
import Auth from "../utils/auth";
import { Form, Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
            <ul style={{ position:"absolute", marginLeft: "20px", justifyContent: "flex-end"}} className="flex-row">
              <li className="mx-1">
                <a href="/"  onClick={() => Auth.logout()}>
                   Logout
               </a>
              </li>
            </ul>
            <div style={{
              boxSizing: "border-box",
              margin: "0 auto",
              width: "8.5in",
              height: "11in",
              backgroundColor: "#fff",
              boxShadow: "0 3px 8px -3px rgba(0, 0, 0, 0.7)",
            }}>
              <form style={{marginTop: "60px", position: "absolute", marginLeft: "305px"}}>
                <label></label>
                <input type="text" placeholder="Your name here :)"></input>
              </form>
              <form style={{ marginTop: "100px", position: "absolute", marginLeft: "200px"}}>
                <label></label>
                  <input type="text" placeholder="Your profession and job position" size="50" width="15">
                  </input>
              </form>
                <form style={{ position: "absolute"}}>
                  <label></label>
                  <input type= "text" placeholder= "list your previous places of employment here" size="200"></input>
                </form>
            </div>
        </div>
          
          

        
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
  <main>
    <body>
      <header className="flex-row px-1" style={{background: "pink", height: "100px", textAlign: "center"}}>
        <h1 style={{textAlign: "center"}}>Resume Generator</h1>
        <br></br>
        <h2 >Please create and account so we can start!</h2>
     </header>
     <nav style={{textAlign: "center", marginTop: "80px"}}>{showNavigation()}</nav> 
    </body>
      <footer style={{ background: "pink"}}>
        <h3 style={{ marginTop: "600px", position: "absolute", marginLeft: "425px", background: "pink"}}>
          Contact our team @ Bryguy20, DeQuanD, BenKawalec, HappyPanda6453, and AaronWilson113
          <br></br>
        </h3>
      </footer>
  </main>
  );
}

export default Nav;
