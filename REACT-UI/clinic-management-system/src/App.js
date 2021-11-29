import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './Homepage';
import LoginForm from "./Login";
import RegisterUser from "./RegisterUser";
import RegisterStaff from "./RegisterStaff";
import RegisterPatient from "./RegisterPatient";
import RegisterMedicine from "./RegisterMedicine";
import PatientAppointment from "./PatientAppointment"
import About from "./About";
import NoMatch from "./NoMatch";

function App() {
  return (
    <>
    <MyRouter/>
    </>
  );
};

function MyRouter(){
  return(
    <Router>
      <h1>Clinic Management System</h1>
      <h3>Phasellus efficitur condimentum ipsum ut vestibulum.</h3>
      <div>
      <div><Link to = "/">Home</Link></div>
      <div><Link to = "/userreg">Register</Link></div>
      <div><Link to = "/login">LogIn</Link></div>
      <div><Link to = "/staffreg">Register Staff</Link></div>
      <div><Link to = "/patientreg">Register Patient</Link></div>
      <div><Link to = "/medreg">Register Medicine</Link></div>
      <div><Link to="/PatientAppointment">Patient Appintment</Link></div>
      <div><Link  to = "/about">About Us</Link></div>

      </div>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/login" element = {<LoginForm />}/>
        <Route path = "/userreg" element = {<RegisterUser />}/>
        <Route path = "/staffreg" element = {<RegisterStaff />}/>
        <Route path = "/patientreg" element = {<RegisterPatient />}/>
        <Route path = "/medreg" element = {<RegisterMedicine />}/>
        <Route path="/patientappointment" element={<PatientAppointment/>}/>
        <Route path = "*" element = {<NoMatch />}></Route>

        
      </Routes>

      <br/><br/>
      <footer>copyright@2021</footer>
    </Router>
  );
};

export default App;
