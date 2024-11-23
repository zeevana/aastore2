import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import NavbarComponent from './components/NavbarComponent';
import KelasPage from './pages/KelasPage';
import FooterComponent from './components/FooterComponent';
import KelasDetail from './pages/KelasDetail';
import PaymentPage from './pages/PaymentPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div style={{ paddingTop: "50px" }}></div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kelas" element={<KelasPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/kelas/:kelasId" element={<KelasDetail />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
