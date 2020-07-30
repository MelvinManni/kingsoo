import React from 'react';
import Operations from './pages/dashboard/operation';
import ImportClearance from './pages/dashboard/importClearance';
import {Router} from '@reach/router'
import LogIn from './pages/login/LogIn'
import SignUp from './pages/signup/SignUp';
import Dashboard from './pages/dashboard/dashboard';
import ImportClearance2 from './pages/dashboard/importClearance2';
import ImportClearance3 from './pages/dashboard/importClearance3';


function App() {
  return (
    <div className="App">
      <Router>
        <LogIn path='/login'/>
        <SignUp path='/signup' />
        <Dashboard path='/'/>
        <Operations path='/operations'/>
        <ImportClearance path='/import-custom-clearance'/>
        <ImportClearance2 path='/import-custom-clearance/step-2'/>
        <ImportClearance3 path='/import-custom-clearance/step-3' />
      </Router>
    </div>
  );
}

export default App;
