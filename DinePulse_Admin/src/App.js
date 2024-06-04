import './components/LoginRegister.css';
import './components/AdminStyles.css';
import { AdminHome } from "./components/AdminHome";
import { AdminRegister } from "./components/AdminRegister";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";
import { AdminDashboard } from "./components/AdminDashboard";
import { DashboardProducts } from "./components/DashboardProducts";
import { DashboardTables } from "./components/DashboardTables";
import { DashboardReservations } from "./components/DashboardReservations";
import { DashboardEmployees } from "./components/DashboardEmployees";
import { DashboardTakeOrders } from "./components/DashboardTakeOrders";
import { DashboardOrders } from "./components/DashboardOrders";
import { DashboardKitchen } from "./components/DashboardKitchen";
import { DashboardReceipts } from "./components/DashboardReceipts";
import { DashboardReports } from "./components/DashboardReports";
import { DashboardSettings } from "./components/DashboardSettings";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/" element={<AdminHome />} />
        <Route path="/adminregister" element={<AdminRegister />} />
      </Routes>
    </Router>
  );
}

export default App;

{/*
<div className='grid-container'>
  <AdminHeader/>
  <AdminSidebar/>
  <AdminDashboard/>
  <DashboardProducts/>
  <DashboardTables/>
  <DashboardReservations/>
  <DashboardEmployees/>
  <DashboardTakeOrders/>
  <DashboardOrders/>*
  <DashboardKitchen/>
  <DashboardReceipts/>
  <DashboardReports/>
  <DashboardSettings/>
</div>
*/}
