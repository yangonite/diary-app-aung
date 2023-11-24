// src/App.js
import React from 'react';
import { useState } from "react";
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from './components/Jumbotron.js'
import { auth } from './firebase.js';
import { signOut } from "firebase/auth";
import SignUp from './components/SignUp.js';
import SignIn from './components/SignIn.js';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './components/defaultPage.js';
import ProtectedPage from './components/protectedPage.js';



function App() {

  const [user, setUser] = useState({})


  //fire something off if "auth" state changes
  onAuthStateChanged(auth, (current) => {
    setUser(current) //we set user to the current auth object
    if (user) {
      console.log("onAuthStateChanged-> current user is: " + user.email)

    }
  });

  const handleSignOut = async () => {
    await signOut(auth);
    console.log("handleSignOut -> \n" + " user signed out")
  }

  const handleauth = () => {
    console.log("user: " + user);
    console.log("auth: " + auth);
  }

  

  return (
    <div className="App">
      <Jumbotron />
      <Router>
        <Routes>
          {/* <Route path="/" element={<Diary/>}/> */}
          <Route path="/a" element={<DefaultPage />} />
          <Route path="/b" element={<ProtectedPage />} />

        </Routes>
      </Router>

      <Container>

        <Row style={{ marginTop: "5%" }}>
          <Col md={{ span: 6 }}>
            <SignUp />
          </Col>

          <Col md={{ span: 6 }}>
            <SignIn />
          </Col>
        </Row>

      </Container>


      <button onClick={handleSignOut}>LOGOUT</button>
      <button onClick={handleauth}>CHECK AUTH STATUS</button>
      {user?.email}






    </div>
  );
}

export default App;

