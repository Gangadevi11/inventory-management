import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InventoryLogin from './inventorylogin';  
import InventoryRegister from './inventoryregister';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<InventoryLogin />} />  
        <Route path="/inventoryregister" element={<InventoryRegister />} />  
      </Routes>
    </Router>
  );
};

export default AppRoutes;




