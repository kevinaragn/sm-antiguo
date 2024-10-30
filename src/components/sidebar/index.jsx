import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar inicialmente abierto

  const handleSlide = () => {
    setIsOpen(!isOpen); // Alterna entre abierto y cerrado
  };

  return (
    <>
      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex-col p-4 box-border z-50"
        initial={{ x: '0%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ type: 'tween', stiffness: 300 }}
      >
        <h2 className="lg:text-2xl md:text-xl sm:text-lg font-bold text-yellow-400 mb-4">San Miguel Antiguo</h2>
        <p className="lg:text-sm md:text-xs sm:text-xs mb-2">
          Recopilación de fotos antiguas del centro de San Miguel desde la calle Irigoin hasta Pardo
        </p>
        <p className="lg:text-sm md:text-xs sm:text-xs mb-4">Tecnologías usadas: Leaflet y React</p>
        
        {/* Botón "Deslizar" */}
        <button
          className="bg-yellow-400 text-black p-2 rounded"
          onClick={handleSlide}
        >
          Deslizar
        </button>
      </motion.div>

      {/* Botón para volver a mostrar el Sidebar */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 bg-gray-800 text-yellow-400 p-2 rounded z-50"
          onClick={handleSlide}
        >
          Mostrar Sidebar
        </button>
      )}
    </>
  );
};

export default Sidebar;
