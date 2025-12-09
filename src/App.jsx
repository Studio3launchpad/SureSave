import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ResetPassword from "./pages/Auth/ResetPassWord";
import Dashboard from "./pages/Dashboard/Dashboard";
import Savings from "./pages/Dashboard/Savings";
import Jobs from "./pages/Dashboard/Jobhub";
import Transactions from "./pages/Dashboard/Transaction";
import Help from "./pages/Dashboard/Help";
import SettingsPage from "./pages/Dashboard/Settingspage";
import AccountPage from "./pages/Dashboard/Account";
import Surewallet from "./pages/Dashboard/surewallet";
import QuickSave from "./components/Quicksave";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/surewallet" element={<Surewallet />} />
        <Route path="/Quicksave" element={<QuickSave />} />
      </Routes>
    </Router>
  );
}

export default App;
