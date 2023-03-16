import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';
import Hoje from './components/Hoje/Hoje';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hoje" element={<Hoje />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
