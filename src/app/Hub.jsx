import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import RegisterPage from '../pages/RegisterPage';
import EquipmentPage from '../pages/EquipmentPage';
import ObservationPage from "../pages/ObservationPage"
import '../styles/Hub.css';

function Hub() {
  return (

    
    <Routes>
      
      <Route path="/" element={<LoginPage/>} />
      
      <Route path="/HomePage" element={<HomePage/>} />

      <Route path="/MainPage" element={<MainPage/>} />

      <Route path="/RegisterPage" element={<RegisterPage/>}/>
      
      <Route path="/EquipmentPage" element={<EquipmentPage/>}/>

      <Route path="/ObservationPage" element={<ObservationPage/>}/>

    </Routes>
  
   
  );
}

export default Hub;