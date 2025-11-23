import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MobileGuard } from './components/mobile-guard/MobileGuard';
import { Games } from './pages/games/Games';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Profile } from './pages/profile/Profile';
import { Tournaments } from './pages/tournaments/Tournaments';

function App() {
  return (
    <MobileGuard>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jogos" element={<Games />} />
          <Route path="/torneios" element={<Tournaments />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </MobileGuard>
  );
}

export default App;
