import React, { useState } from 'react';
import '../stylesheets/info/info.scss';
import Close from '../assets/close.png';
import MoreInfo from '../assets/more-info.png';

const Info = ({ onClose }) => {


  return (
    <div className="modal">
      <div className="modal-content">
        <button style={{position:'relative',height: 50,width:50, left:-110, top:-20, backgroundColor:'rgb(255,100,100)'}} onClick={onClose}>
            <img style={{height:30,width:30}} src={Close}/>
        </button>
        <button style={{position:'relative',height: 50,width:50, left:110, top:-20, backgroundColor:'rgb(255,255,0)'}} onClick={onClose}>
            <img style={{height:30,width:30}} src={MoreInfo}/>
        </button>
        <div style={{padding:10,flex:1}}>
            <div style={{textAlign:'left'}}>
                <div style={{backgroundColor:'rgb(180,238,200)',borderRadius:5,padding:10}}>Material: Papel</div>
                <br/>
                <div style={{backgroundColor:'rgb(180,238,200)',borderRadius:5,padding:10}}>Estado: Vacío </div>
                <br/>
                <div style={{backgroundColor:'rgb(180,238,200)',borderRadius:5,padding:10}}>Ubicación: Mercedes</div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Info;