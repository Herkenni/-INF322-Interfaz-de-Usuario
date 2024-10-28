import React, { useState } from 'react';
import backgroundImage from '../assets/pantalla.png';
import Ingreso from '../components/ingreso';
import '../stylesheets/home_page/home_page.scss';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="title-container">
        <h1 className="title">Reciclaje Inteligente</h1>
      </div>
      <div className="button-container">
        <button className="option-button" onClick={openModal}>Usuario</button>
        <button className="option-button" onClick={openModal}>Trabajador</button>
      </div>
      {isModalOpen && <Ingreso onClose={closeModal} />}
    </div>
  );
};

export default HomePage;