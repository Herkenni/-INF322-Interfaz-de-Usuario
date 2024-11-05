import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../assets/user-icon.png';
import Close from '../assets/close.png';


const Usuario = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    console.log("Cerrar sesión");
    setShowMenu(false);
    navigate('/'); 
  };

  return (
    <div onClick={toggleMenu}>
      <img src={showMenu ? Close : UserIcon} alt="User Icon" style={{ width: showMenu ? 40 : 50
                                                                    , height: showMenu ? 40 : 50
                                                                    ,backgroundColor: showMenu ? 'rgb(255,100,100)' : 'rgb(180,238,200)'
                                                                    ,borderRadius: '25%',
                                                                    padding: '4px', 
                                                                    margin: '5px' 
                                                                    , cursor: 'pointer' }} />
      {showMenu && (
        <div >
          <div style={{backgroundColor:'rgb(180,238,200)',borderRadius:5,padding:10,margin:10}}>
            -Nombre de Usuario-
            </div>
          <button style={{backgroundColor:'light gray',borderRadius:5,padding:10,margin:10}} onClick={handleLogout}>
            Cerrar sesión
            </button>
        </div>
      )}
    </div>
  );
};

export default Usuario;
