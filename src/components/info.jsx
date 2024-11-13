import React, { useState } from 'react';
import '../stylesheets/info/info.scss';
import Close from '../assets/close.png';
import MoreInfo from '../assets/more-info.png';
import Tutorial from '../components/tutorial';
import Papel from '../assets/Papel.png'

const Info = ({ onClose }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="modal">
      <div className="modal-content">

        <button style={{position:'relative',height: 50,width:50, left:-80, top:-20, backgroundColor:'rgb(255,100,100)'}} onClick={onClose}>
            <img style={{height:30,width:30}} src={Close}/>
        </button>
        <button style={{position:'relative',height: 50,width:50, left:0, top:-20, backgroundColor:'rgb(0,100,0)', borderRadius:'50%', pointerEvents: 'none'}}>
            <img style={{ width: 30, height: 30}} src={Papel}/>
        </button>
        <button style={{position:'relative',height: 50,width:50, left:80, top:-20, backgroundColor:'rgb(255,255,0)'}} onClick={openModal}>
            <img style={{height:30,width:30}} src={MoreInfo}/>
        </button>
        <div style={{padding:10,flex:1}}>
            <div style={{textAlign:'left'}}>
                <div style={{backgroundColor:'rgb(180,238,200)',borderRadius:5,padding:10}}>Material: Papel</div>
                <br/>
                <div style={{backgroundColor:'rgb(180,238,200)',borderRadius:5,padding:10}}>Estado: Vacío </div>
                <br/>
                <div style={{backgroundColor:'rgb(180,238,200)',borderRadius:5,padding:10}}>Ubicación: Mercedes</div>
                <br/>
                <div style={{backgroundColor:'rgb(180,238,200)',borderRadius:2,padding:10}}>Distancia: 0.5 km</div>
                <div style={{backgroundColor:'rgb(180,238,200)',borderRadius:2,padding:10}}>Minutos caminando: 20 minutos</div>
                <div style={{backgroundColor:'rgb(180,238,200)',borderRadius:2,padding:10}}>Minutos en auto: 5 min</div>
            </div>

        </div>
      </div>
      {isModalOpen && <Tutorial onClose={closeModal} />}
    </div>
    
  );
};

export default Info;