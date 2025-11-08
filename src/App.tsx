import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MobileGuard } from './components/mobile-guard/MobileGuard';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';

function App() {
  return (
    <MobileGuard>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </MobileGuard>
  );
}

export default App;
