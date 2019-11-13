import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar.component'
import UserList from './components/userlist.component';
import CreateUser from './components/crateusers.componet';
import EditUser from './components/editusers.component';

function App() {
  return (
    <BrowserRouter>
      <div className="containter">
        <Navbar />
        <br />
        <Route path='/' exact component={UserList} />
        <Route path='/createUsers' exact component={CreateUser} />
        <Route path='/edit/:id' exact component={EditUser} />
      </div>
    </BrowserRouter>
  );
}

export default App;
