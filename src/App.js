import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import logo from './logo1.png';


function App() {

  return (
    <div className="app-container">
      {/* Logo Animasyonu */}
      <motion.div
        className="logo"
        initial={{ scale: 0.8, opacity: 0 }}  // Başlangıçta daha küçük ve görünmez
        animate={{ scale: 1, opacity: 1 }}  // Tam büyüklük ve görünürlük
        transition={{ type: 'spring', stiffness: 100, damping: 25 }}  // Yumuşak geçiş
      >
        <img src={logo} alt="Kavurmacı Logo" className="logo-img" />
      </motion.div>


      <div class="opening-text-container">
        <h1 className="opening-text">YAKINDA AÇILIYORUZ</h1>
      </div>

      {/* İletişim ve Adres Bilgileri */}
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, y: 30 }}  // Başlangıçta biraz daha aşağıda
        animate={{ opacity: 1, y: 0 }}  // Tam görünür ve yukarı
        transition={{ delay: 1.5, duration: 1.5 }}  // Gecikmeli ve uzun geçiş süresi
      >
        <p>📍 <strong>Adres:</strong> Cevizli Mahallesi, Bağdat Caddesi No: 599-601A Maltepe/İstanbul</p>
        <p>📞 <strong>Telefon:</strong> (542) 316 4774</p>
        <p>📧 <strong>E-mail:</strong> hakancizmeci@hotmail.com</p>
        <p>👨‍🍳 <strong>Hakan ÇİZMECİOĞLU</strong></p>
      </motion.div>
    </div>
  );
}

export default App;
