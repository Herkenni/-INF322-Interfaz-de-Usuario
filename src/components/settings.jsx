import React, { useState } from 'react';
import More_info from '../assets/more-info.png';
import Tutorial from './tutorial'; // Asegúrate de importar el componente Tutorial

const Settings = () => {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  const toggleSettingsMenu = () => {
    setShowSettingsMenu(!showSettingsMenu);
  };

  const openTutorial = () => {
    setShowTutorial(true);
  };

  const closeTutorial = () => {
    setShowTutorial(false);
  };

  return (
    <div style={{ cursor: 'pointer', marginLeft: '10px' }}>
      <img 
        src={More_info} 
        alt="Settings Icon" 
        style={{ width: 60, height: 60, borderRadius: '25%', backgroundColor: 'rgb(255,255,0)' }} 
        onClick={toggleSettingsMenu}
      />
      {showSettingsMenu && (
        <div>
          <button style={{ backgroundColor: 'rgb(180,238,200)', borderRadius: 5, padding: 10, margin: 10 }} onClick={openTutorial}>
            Como reciclar Papel
          </button>
          <button style={{ backgroundColor: 'rgb(180,238,200)', borderRadius: 5, padding: 10, margin: 10 }}>
            Como reciclar Plastico
          </button>
          <button style={{ backgroundColor: 'rgb(180,238,200)', borderRadius: 5, padding: 10, margin: 10 }}>
            Como reciclar Vidrio
          </button>
        </div>
      )}
      {showTutorial && <Tutorial onClose={closeTutorial} />}
    </div>
  );
};

export default Settings;
