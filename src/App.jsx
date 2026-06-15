import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ServicePage from "./pages/ServicePage";


function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/careers" element={<Careers />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>

      <Route path="/terms" element={<Terms/>}/>

      <Route path="/services/:slug" element={<ServicePage />} />

    </Routes>

  );
}

export default App;