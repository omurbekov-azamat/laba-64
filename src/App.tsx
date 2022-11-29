import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./Container/Home/Home";
import Add from "./Container/Add/Add";
import About from "./Container/About/About";
import Contacts from "./Container/Contacts/Contacts";

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <div>
        <Routes>
          <Route path='/home' element={(
            <Home/>
          )}/>
          <Route path='/add' element={(
            <Add/>
          )}/>
          <Route path='/about' element={(
            <About/>
          )}/>
          <Route path='/contacts' element={(
            <Contacts/>
          )}/>
          <Route path='*' element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </div>

    </div>

  );
}

export default App;
