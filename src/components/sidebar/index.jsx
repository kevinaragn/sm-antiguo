import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar inicialmente cerrado

  const handleSlide = () => {
    setIsOpen(!isOpen); // Alterna entre abierto y cerrado
  };

  return (
    <>
      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-screen w-80 bg-gray-800 text-white p-4 box-border z-50 flex flex-col items-center"
        initial={{ x: '-100%' }} // Inicia fuera de la pantalla
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ type: 'tween', stiffness: 300 }}
      >
        {/* Logo */}
        <div className="w-24 h-24 mb-6">
          <img
            src="/archivo.jpeg"
            alt="Logo"
            className="w-full h-full object-contain rounded-full border-2 border-gray-400"
          />
        </div>

        <h2 className="lg:text-2xl md:text-xl sm:text-lg font-bold text-gray-200 mb-4 text-center">
          Archivo y Museo Historico del Partido de San Miguel
        </h2>
        <p className="lg:text-sm md:text-xs sm:text-xs mb-2 text-center text-gray-300">
          Recopilación de fotos antiguas del centro de San Miguel
        </p>
        <p className="lg:text-sm md:text-xs sm:text-xs mb-4 text-center text-gray-300">
          Tecnologías usadas: Leaflet y React
        </p>
        <a
          href="https://www.linkedin.com/in/kevinaragn"
          target="_blank" // Abre el enlace en una nueva pestaña
          rel="noopener noreferrer" // Mejora seguridad y previene vulnerabilidades
          className="lg:text-sm md:text-xs sm:text-xs mb-4 text-blue-400 hover:underline text-center"
        >
          https://www.linkedin.com/in/kevinaragn
        </a>

        {/* Botón "Comenzar" debajo del enlace */}
        <button
          className="mt-4 bg-gray-400 text-black px-4 py-2 rounded"
          onClick={handleSlide}
        >
          Deslizar
        </button>
      </motion.div>

      {/* Botón para volver a mostrar el Sidebar */}
      {!isOpen && (
        <div className="fixed top-10 left-20 z-50">
          {/* En pantallas grandes, se muestra el logo */}
          <button
            className="hidden lg:flex items-center justify-center p-2 rounded"
            onClick={handleSlide}
          >
            <img
              src="/archivo.jpeg"
              alt="San Miguel Antiguo"
              className="w-32 h-32 object-cover rounded-full"
            />
          </button>

          {/* En pantallas pequeñas, se muestra el botón de texto */}
          <button
            className="lg:hidden bg-gray-300 text-black px-6 py-3 rounded "
            onClick={handleSlide}
          >
            Mapa Interactivo
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
