// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";

import AdminDashboard from "./pages/AdminDashboard";
import DailyDamages from "./pages/DailyDamages";
import Neccrate from "./pages/Neccrate";
import Dailysales from "./pages/Dailysales";
import Distributor from "./pages/Distributor";
import CashPayments from "./pages/CashPayments";
import DigitalPayments from "./pages/DigitalPayments";
import Outlets from "./pages/Outlets";
import Users from "./pages/Users";

import ViewerDashboard from "./pages/ViewerDashboard";
import { DamageProvider } from "./context/DamageContext";
import { PanelProvider } from "./context/PanelContext";
import AdminLayoutWithPanel from "./layouts/AdminLayoutWithPanel";

function App() {
  return (
    <DamageProvider>
      <PanelProvider>
        <BrowserRouter>
          <Routes>
            {/* PUBLIC */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />

            {/* ADMIN - All pages with panel layout support */}
            <Route
              path="/admin/dashboard"
              element={<AdminLayoutWithPanel><AdminDashboard /></AdminLayoutWithPanel>}
            />
            <Route
              path="/admin/damages"
              element={<AdminLayoutWithPanel><DailyDamages /></AdminLayoutWithPanel>}
            />
            <Route
              path="/admin/neccrate"
              element={<AdminLayoutWithPanel><Neccrate /></AdminLayoutWithPanel>}
            />
            <Route
              path="/admin/dailysales"
              element={<AdminLayoutWithPanel><Dailysales /></AdminLayoutWithPanel>}
            />
            <Route
              path="/admin/distribution"
              element={<AdminLayoutWithPanel><Distributor /></AdminLayoutWithPanel>}
            />
            <Route
              path="/admin/cash-payments"
              element={<AdminLayoutWithPanel><CashPayments /></AdminLayoutWithPanel>}
            />
            <Route
              path="/admin/digital-payments"
              element={<AdminLayoutWithPanel><DigitalPayments /></AdminLayoutWithPanel>}
            />
            <Route
              path="/admin/outlets"
              element={<AdminLayoutWithPanel><Outlets /></AdminLayoutWithPanel>}
            />
            <Route
              path="/admin/users"
              element={<AdminLayoutWithPanel><Users /></AdminLayoutWithPanel>}
            />

            {/* VIEWER */}
            <Route path="/dashboard" element={<ViewerDashboard />} />
          </Routes>
        </BrowserRouter>
      </PanelProvider>
    </DamageProvider>
  );
}

export default App;
