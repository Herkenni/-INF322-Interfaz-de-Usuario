import React, { useState }  from 'react';
import backgroundImage from '../assets/mapa.png';
import Papel from '../assets/Papel.png'
import Plastico from '../assets/Plastico.png'
import Vidrio from '../assets/Vidrio.png'
import usuario_imagen from '../assets/Usuario_imagen.png'
import NavBar from '../components/nav_bar.jsx';
import Info from '../components/info.jsx';
import Usuario from '../components/usuario.jsx';

const MapaPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <NavBar/>
      <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>

                  <button  onClick={openModal} style={{position:'relative', top: 300, left: 100 , width: 45, height: 45, backgroundColor: 'green',borderRadius: 45, padding:5}} >
                      <img style={{ width: 30, height: 30}} src={Papel}/>
                  </button>
                  <button  onClick={openModal} style={{position:'relative', top: 500, left: -60 , width: 45, height: 45, backgroundColor: 'red',borderRadius: 45, padding:5}} >
                      <img style={{width: 30, height: 30}} src={Vidrio}/>
                  </button>
                  <button  onClick={openModal} style={{position:'relative', top: 400, left: 100 , width: 45, height: 45, backgroundColor: 'yellow',borderRadius: 45, padding:5}} >
                      <img style={{width: 30, height: 30}} src={Plastico}/>
                  </button>
                  <button  onClick={openModal} style={{position:'relative', top: 50, left: -120 , width: 45, height: 45, backgroundColor: 'grey-white',borderRadius: 45, padding:5}} >
                      <img style={{width: 30, height: 30}} src={usuario_imagen}/>
                  </button>
                  
      </div>
      {isModalOpen && <Info onClose={closeModal} />}
    </div>
  );
};

export default MapaPage;