import './App.css';
import React  from 'react';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Page/Home/Home';
import Recommendation from './Page/Recommendation/Recommendation';
import Register from './Page/Sign_page/Register';
import Login from './Page/Sign_page/Login';

function App() {
  return (

    <div className='app' >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/recommendation' element={<Recommendation></Recommendation>}/>
        <Route path='/sign' element={<Register/>}/>
        <Route path='/login' element={<Login></Login>} />


      </Routes>
      </BrowserRouter>
          
    </div>

  );
}

export default App;