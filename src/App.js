import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';
import Hoje from './components/Hoje/Hoje';
import Habitos from './components/Habitos/Habitos';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserDataProvider } from './Contex/UserDataContext';

function App() {
  return (
    <UserDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
        </Routes>
      </BrowserRouter>
    </UserDataProvider>
  );
}

export default App;
