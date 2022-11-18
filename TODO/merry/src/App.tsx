import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Add from './page/Add';
import Main from './page/Main';


function App() {
  return (
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/add' element={<Add/>}/>
     </Routes>
  );
}

export default App;
