import './components/css/AdminDashboardStyles.css';
import { AdminHome } from "./components/pages/AdminHome";
import { AdminRegister } from "./components/pages/AdminRegister";
import { AdminHeader } from "./components/pages/AdminHeader";
import { AdminSidebar } from "./components/pages/AdminSidebar";
import { AdminDashboard } from "./components/pages/AdminDashboard";
import { DashboardProducts } from "./components/pages/DashboardProducts";
import { DashboardTables } from "./components/pages/DashboardTables";
import { DashboardReservations } from "./components/pages/DashboardReservations";
import { DashboardEmployees } from "./components/pages/DashboardEmployees";
import { DashboardTakeOrders } from "./components/pages/DashboardTakeOrders";
import { DashboardOrders } from "./components/pages/DashboardOrders";
import { DashboardKitchen } from "./components/pages/DashboardKitchen";
import { DashboardReceipts } from "./components/pages/DashboardReceipts";
import { DashboardReports } from "./components/pages/DashboardReports";
import { DashboardSettings } from "./components/pages/DashboardSettings";
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
