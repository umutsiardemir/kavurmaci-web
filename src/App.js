import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import logo from './logo1.png';


function App() {
  const [isHoveredForNumber, setIsHoveredForNumber] = useState(false);
  const [isHoveredForEmail, setIsHoveredForEmail] = useState(false);
  const [isHoveredForMap, setIsHoveredForMap] = useState(false);


  const address = 'Cevizli Mahallesi, Bağdat Caddesi No: 599-601A Maltepe/İstanbul';  // Buraya adresi girin
  const phoneNumber = "+90542 316 4774"; // Burada telefon numarasını yazın
  const email = "hakancizmeci@hotmail.com";

  const openMap = () => {
    // Adresi URL'ye encode ederek Google Maps'te açma
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps?q=${encodedAddress}`;
    window.open(mapUrl, '_blank'); // Yeni pencerede açılır
  };


  const handleCall = () => {
    const telUrl = `tel:${phoneNumber}`; // Tel protokolünü kullanarak arama başlatılır
    window.location.href = telUrl; // Telefon arama ekranını açar
  };


  const handleMail = () => {
    const mailtoUrl = `mailto:${email}`; // Mailto protokolü ile mail adresini açma
    window.location.href = mailtoUrl; // Varsayılan e-posta istemcisini açar
  };

  return (
    <div className="app-container" name="viewport" content="with=device-with , initial-scale = 1.0" >
      {/* Logo Animasyonu */}
      <motion.div
        className="logo"
      >
        <img src={logo} alt="Kavurmacı Logo" className="logo-img" />
      </motion.div>


      <div class="opening-text-container">
        <h1 className="opening-text">ÇOK YAKINDA HİZMETİNİZDEYİZ</h1>
      </div>

      {/* İletişim ve Adres Bilgileri */}
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, y: 30 }}  // Başlangıçta biraz daha aşağıda
        animate={{ opacity: 1, y: 0 }}  // Tam görünür ve yukarı
        transition={{ delay: 1.5, duration: 1.5 }}  // Gecikmeli ve uzun geçiş süresi
      >
        <p align="left" onClick={openMap} onMouseEnter={() => setIsHoveredForMap(true)} // Hover başladığında
          onMouseLeave={() => setIsHoveredForMap(false)} // Hover bittiğinde
          style={{
            color: isHoveredForMap ? '#e60000' : 'white', // Hover durumunda renk değişimi
            cursor: 'pointer', // Tıklanabilir
            transition: 'color 0.3s ease' // Geçiş efekti
          }}>📍 <strong>Adres:</strong> Cevizli Mahallesi, Bağdat Caddesi No: 599-601A Maltepe/İstanbul</p>
        <p align="left" onClick={handleCall} 
        onMouseEnter={() => setIsHoveredForNumber(true)} 
        onMouseLeave={() => setIsHoveredForNumber(false)} // Hover bittiğinde
        style={{
          color: isHoveredForNumber ? '#e60000' : 'white', // Hover durumunda renk değişimi
          cursor: 'pointer', // Tıklanabilir
          transition: 'color 0.3s ease' // Geçiş efekti
        }}>📞 <strong>Telefon:</strong> (0542) 316 4774</p>
        <p align="left" onClick={handleMail} 
        onMouseLeave={() => setIsHoveredForEmail(false)} // Hover bittiğinde
        onMouseEnter={() => setIsHoveredForEmail(true)}
        style={{
          color: isHoveredForEmail ? '#e60000' : 'white', // Hover durumunda renk değişimi
          cursor: 'pointer', // Tıklanabilir
          transition: 'color 0.3s ease' // Geçiş efekti
        }}>📧 <strong>E-mail:</strong> hakancizmeci@hotmail.com</p>
        <p align="left">👨‍🍳 <strong>Hakan ÇİZMECİOĞLU</strong></p>

      </motion.div>
    </div>
  );
}

export default App;
