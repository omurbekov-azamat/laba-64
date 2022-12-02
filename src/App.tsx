import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./container/Home/Home";
import Add from "./container/Add/Add";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";
import ReadMore from "./container/ReadMore/ReadMore";
import EditBlog from "./container/EditBlog/EditBlog";
import FixForm from "./components/FixForm/FixForm";

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
          <Route path='/about' element={<About/>}>
            <Route path='/about/fix-about/:id' element={(
              <FixForm link='/about/' setNavigate='/about' button='Edit About'/>
            )}/>
          </Route>
          <Route path='/contacts' element={<Contacts/>}>
            <Route path='/contacts/fix-contacts/:id' element={(
              <FixForm link='/contacts/' setNavigate='/contacts' button='Edit Contact'/>
            )}/>
          </Route>
          <Route path='*' element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
