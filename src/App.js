import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import RegisterScreen from "./Screen/RegisterScreen/RegisterScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./Screen/FrontPage/FrontPage";
import Header from "./components/Navbar";
import "./bootstrap.min.css";
import LandingPage from "./Screen/LandingPage/LandingPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/account" element={<LandingPage />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
