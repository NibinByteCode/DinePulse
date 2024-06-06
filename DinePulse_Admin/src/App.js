import './components/LoginRegister.css';
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
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeaderSidebar = location.pathname !== '/' && location.pathname !== '/adminregister';

  return (
    <div className='flex-container plain-background'>
      {showHeaderSidebar && <AdminHeader />}
      {showHeaderSidebar && <AdminSidebar />}
      <div className='main-content'>
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/dashboard" element={<Layout><AdminDashboard /></Layout>} />
        <Route path="/products" element={<Layout><DashboardProducts /></Layout>} />
        <Route path="/tables" element={<Layout><DashboardTables /></Layout>} />
        <Route path="/reservations" element={<Layout><DashboardReservations /></Layout>} />
        <Route path="/employees" element={<Layout><DashboardEmployees /></Layout>} />
        <Route path="/takeorders" element={<Layout><DashboardTakeOrders /></Layout>} />
        <Route path="/orders" element={<Layout><DashboardOrders /></Layout>} />
        <Route path="/kitchen" element={<Layout><DashboardKitchen /></Layout>} />
        <Route path="/receipts" element={<Layout><DashboardReceipts /></Layout>} />
        <Route path="/reports" element={<Layout><DashboardReports /></Layout>} />
        <Route path="/settings" element={<Layout><DashboardSettings /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
