import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './partials/Navbar.jsx';
import NewsLetter from './components/news_letter.jsx';
import ComingSoon from './partials/coming.jsx';

function Accueil() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 class="hello">Bienvenue sur Pepers!</h1>
      <NewsLetter />
    </div>
  );
}

function MonCompte() {
  return (
    <div>
      <ComingSoon title="Espace Mon Compte" />
    </div>
  );
}

function SupportReseau() {
  return (
    <div>
      <ComingSoon title="Support Réseau" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/mon-compte" element={<MonCompte />} />
        <Route path="/support-reseau" element={<SupportReseau />} />
      </Routes>
    </Router>
  );
}
