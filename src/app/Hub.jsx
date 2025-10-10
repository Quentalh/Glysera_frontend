import { Routes, Route } from 'react-router-dom';
import EditPage from '../pages/EditPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import RegisterPage from '../pages/RegisterPage';
import EquipmentPage from '../pages/EquipmentPage';
import ObservationPage from "../pages/ObservationPage"
import QuerySelectionPage from "../pages/QuerySelectionPage";
import PatientQueryPage from "../pages/PatientQueryPage";
import EquipmentQueryPage from '../pages/EquipmentQueryPage';
import EditEquipmentPage from '../pages/EditEquipmentPage';
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
      
      <Route path="/QueryPage" element={<QuerySelectionPage/>}/>
      
      <Route path="/PatientQueryPage" element={<PatientQueryPage/>}/>
      
      <Route path="/EquipmentQueryPage" element={<EquipmentQueryPage/>}/>

      <Route path="/EditPage" element={<EditPage/>}/>
      
      <Route path="/EditEquipmentPage" element={<EditEquipmentPage />} />

      <Route path="/ManagePage" element={<ManagePage/>}/>
    
    </Routes>
  );
}

export default Hub;