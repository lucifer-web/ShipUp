import React from 'react'
import Home from './Pages/Home/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='' element={<Navigate to={'/home'}/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
