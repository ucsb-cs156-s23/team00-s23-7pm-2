import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import LosAngeles from "main/pages/LosAngeles";
import SantaCruzPage from "main/pages/SantaCruzPage";


import "bootstrap/dist/css/bootstrap.css";


function App() {

  return (
    <BrowserRouter basename="/team00-s23-7pm-2">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
        <Route exact path="/towns/LosAngeles" element={<LosAngeles />} />
        <Route exact path="/towns/SantaCruz" element={<SantaCruzPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
