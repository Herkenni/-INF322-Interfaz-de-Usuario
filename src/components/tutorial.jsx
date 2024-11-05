import React, { useState } from 'react';
import '../stylesheets/info/info.scss';
import Close from '../assets/close.png';
import Paso1 from '../assets/Paso 1.png';
import Paso2 from '../assets/Paso 2.png';
import Paso3 from '../assets/Paso 3.png';

const Tutorial = ({ onClose }) => {


  return (
    <div className="modal">
      <div className="modal-content">
        <button style={{position:'relative',height: 50,width:50, left:-110, top:-20, backgroundColor:'rgb(255,100,100)'}} onClick={onClose}>
            <img style={{height:30,width:30}} src={Close}/>
        </button>
        <h2>Tutorial</h2>
        <div style={{padding:10,flex:1}}>
            <div style={{textAlign:'center',backgroundColor:'rgb(180,238,200)',borderRadius: 5, padding: 10}}>                
              Si se trata de un cuaderno o libreta, arranca las hojas.
            </div>
            <div>
              <img src={Paso1} style={{width: 100, height: 100}}/>
            </div>
            <div style={{textAlign:'center',backgroundColor:'rgb(180,238,200)',borderRadius: 5, padding: 10}}>
              Junta las hojas
            </div>
            <div>
              <img src={Paso2} style={{width: 100, height: 100}}/>
            </div>
            <div style={{textAlign:'center',backgroundColor:'rgb(180,238,200)',borderRadius: 5, padding: 10}}>
              Deposita los papeles en el contenedor
            </div>
            <div>
              <img src={Paso3} style={{width: 100, height: 120}}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;