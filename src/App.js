import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import CheckOut from './Components/CheckOut/CheckOut';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Rooms from './Components/Rooms/Rooms';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/about-us' element={<AboutUs></AboutUs>}></Route>

        <Route path='/rooms' element={<Rooms></Rooms>}></Route>

        <Route path='/checkout' element={
          <RequireAuth><CheckOut></CheckOut></RequireAuth>
        }></Route>

        <Route path='/contact' element={<Contact></Contact>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
