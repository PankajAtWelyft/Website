import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Careers from "./pages/Careers";

function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/careers" element={<Careers />} />

    </Routes>

  );
}

export default App;