import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Video from './pages/video/Video'
import Homee from './pages/Home/Homee'
const App = () => {

  //const[sidebar,setSidebar] = useState(true);
  const [sidebar,setSidebar] = useState(true)

  return (
    <div>
      <Navbar setSidebar ={setSidebar}/>
      <Routes>
        <Route path='/' element={<Homee sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  );
}

export default App;
