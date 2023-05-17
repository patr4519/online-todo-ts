import React from 'react';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       {/* <Header /> */}
       <div className='contnet'>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Route path='/profile' element={<Profile />} /> */}
          </Routes>
       </div>
       {/* <Footer /> */}
    </div>
  );
}

export default App;
