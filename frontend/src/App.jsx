import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/home/Home";
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";
import GenerateQR from "./components/generate-qr/GenerateQR";
import ScanQR from "./components/scan-qr/ScanQR";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate" element={<GenerateQR />} />
        <Route path="/scan" element={<ScanQR />} />
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
