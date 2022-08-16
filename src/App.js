import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Adminrouter from './components/Adminrouter';
import Driverouter from './components/Driverouter';
import Userouter from './components/Userouter';


function App() {
  return (

    <BrowserRouter>
      <Adminrouter />
      <Driverouter />
      <Userouter />
    </BrowserRouter>

  );
}

export default App;
