import React from "react";
import { Link } from  "react-router-dom"
import { Button } from "reactstrap";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <h2 style={{backgroundColor: "skyblue", display: "flex", justifyContent: "center"}}>Hospital Management System</h2>
    <nav>
      <ul style={{border: 1}}>
        <li >
         <Link to="/costEstimator"><Button style={{backgroundColor: 'orange', borderRadius : 3, border: 1}}><h3>Cost Estimator</h3>
          </Button></Link>
        </li>
        <br/>
        <li>
          <Link to="/"><Button style={{backgroundColor: 'orange', borderRadius : 3, border: 1}}>
            <h3>Schedule Appointment</h3></Button></Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
