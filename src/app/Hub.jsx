import { Routes, Route } from 'react-router-dom';
import EditPage from '../pages/EditPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import RegisterPage from '../pages/RegisterPage';
import EquipmentPage from '../pages/EquipmentPage';
import ObservationPage from "../pages/ObservationPage"
import QueryPage from "../pages/QueryPage";
import ManagePage from '../pages/ManagePage';
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

      <Route path="/QueryPage" element={<QueryPage/>}/>

      <Route path="/EditPage" element={<EditPage/>}/>

      <Route path="/ManagePage" element={<ManagePage/>}/>

    </Routes>
  
   
  );
}

export default Hub;