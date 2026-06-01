import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/careers" element={<Careers />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>

    </Routes>

  );
}

export default App;