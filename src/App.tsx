import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Container/Home/Home";
import Add from "./Container/Add/Add";
import About from "./Container/About/About";
import Contacts from "./Container/Contacts/Contacts";
import ReadMore from "./Container/ReadMore/ReadMore";
import EditBlog from "./Container/EditBlog/EditBlog";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts' element={<Home/>}/>
          <Route path='/posts/:id' element={<ReadMore/>}/>
          <Route path='posts/:id/edit' element={<EditBlog/>}/>
          <Route path='/new-post' element={<Add/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='*' element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
