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
              <h2 style={{ position: "absolute", marginTop: "175px", marginLeft: "10px"}}>Work Experience</h2>
                <form style={{ position: "absolute", marginTop: "225px", marginLeft: "10px"}}>
                  <label></label>
                  <input type= "text" placeholder= "list your previous places of employment here" height= "50" size="75"></input>
                </form>
                <form style={{ position: "absolute", marginTop: "275px", marginLeft: "10px"}}>
                  <label></label>
                  <input type= "text" placeholder= "list your previous places of employment here" height= "50" size="75"></input>
                </form>
                <form style={{ position: "absolute", marginTop: "325px", marginLeft: "10px"}}>
                  <label></label>
                  <input type= "text" placeholder= "list your previous places of employment here" height= "50" size="75"></input>
                </form>
               <form style={{ position: "absolute", marginTop: "375px", marginLeft: "10px"}}>
                  <label></label>
                  <input type= "text" placeholder= "list your previous places of employment here" height= "50" size="75"></input>
               </form>
               <h2 style ={{ position: "absolute", marginTop: "425px", marginLeft: "10px"}}>Education and academic achievements</h2>
               <form style={{ position: "absolute", marginTop: "475px", marginLeft: "10px"}}>
                  <label></label>
                  <input type= "text" placeholder= "anyone smell margerin?" height= "50" size="75"></input>
               </form>
               <form style={{ position: "absolute", marginTop: "525px", marginLeft: "10px"}}>
                  <label></label>
                  <input type= "text" placeholder= "I quit coding Im gonna cook crystal meth" height= "50" size="75"></input>
               </form>
               <form style={{ position: "absolute", marginTop: "575px", marginLeft: "10px"}}>
                  <label></label>
                  <input type= "text" placeholder= "me personally, I have worked at a mcdonalds for 17 years" height= "50" size="75"></input>
               </form>
               <form style={{ position: "absolute", marginTop: "625px", marginLeft: "10px"}}>
                  <label></label>
                  <input type= "text" placeholder= "2 cool 4 school" height= "50" size="75"></input>
               </form>
               <h2 style={{ position:"absolute", marginTop: "675px", marginLeft: "10px"}}>Skills and interests</h2>
               <form style={{ position: "absolute", marginTop: "725px", marginLeft: "10px"}}>
                  <label></label>
                  <input type= "text" placeholder= "2 cool 4 school" height= "50" size="75"></input>
               </form>
               <form style={{ position: "absolute", marginTop: "775px", marginLeft: "10px"}}>
                  <label></label>
                  <input type= "text" placeholder= "2 cool 4 school" height= "50" size="75"></input>
               </form>
               <h2 style={{ position:"absolute", marginTop: "825px", marginLeft: "10px"}}>Check off the languages you are confident with</h2>
               <form style={{position: "absolute", marginTop: "875px", marginLeft: "25px"}}> HTML
                <input type="checkbox">
                </input>
               </form>
               <form style={{position: "absolute", marginTop: "925px", marginLeft: "25px"}}> REACT
                <input type="checkbox">
                </input>
               </form>
               <form style={{position: "absolute", marginTop: "975px", marginLeft: "25px"}}> SQL
                <input type="checkbox">
                </input>
               </form>
               <form style={{position: "absolute", marginTop: "1025px",marginLeft: "25px"}}> CSS
                <input type="checkbox">
                </input>
               </form>

               <form style={{position: "absolute", marginTop: "875px", marginLeft: "325px"}}> MONGO
                <input type="checkbox">
                </input>
               </form>
               <form style={{position: "absolute", marginTop: "925px", marginLeft: "325px"}}> JAVASCRIPT
                <input type="checkbox">
                </input>
               </form>
               <form style={{position: "absolute", marginTop: "975px", marginLeft: "325px"}}> APOLLO
                <input type="checkbox">
                </input>
               </form>
               <form style={{position: "absolute", marginTop: "1025px", marginLeft: "325px"}}> PYTHON
                <input type="checkbox">
                </input>
               </form>

               <form style={{position: "absolute", marginTop: "875px", marginLeft: "625px"}}> PHP
                <input type="checkbox">
                </input>
               </form>
               <form style={{position: "absolute", marginTop: "925px", marginLeft: "625px"}}> RUST
                <input type="checkbox">
                </input>
               </form>
               <form style={{position: "absolute", marginTop: "975px", marginLeft: "625px"}}> C++
                <input type="checkbox">
                </input>
               </form>
               <form style={{position: "absolute", marginTop: "1025px", marginLeft: "625px"}}> NPM
                <input type="checkbox">
                </input>
               </form>

               <form style={{position: "absolute", marginRight: "250px"}}>
                <input type = "date"></input>
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
