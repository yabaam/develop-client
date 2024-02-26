import React from 'react';
import { FaBell, FaCamera, FaChartLine, FaForumbee, FaLightbulb, FaPlus, FaQuestion, FaStar, FaUser, FaVideo } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Contenedor superior para SidebarL, Home y SidebarR */}
      <div className="flex flex-grow">
        {/* Sidebar Izquierda */}
        <div className="w-64 bg-blue-500 flex-shrink-0 flex flex-col shadow-lg">
          {/* Elementos del SidebarL */}
          {/* ... */}
        </div>

        {/* Contenido Principal */}
        <div className="flex-grow bg-white overflow-auto">
          <div className="container mx-auto py-4 px-6">
            {/* Sección 'Create Post' */}
            <div className="bg-gray-200 p-4 rounded-lg shadow mb-4">
                <h2 className="text-lg font-semibold mb-2">Create Post</h2>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Share what you are thinking?"
                    className="flex-grow p-2 bg-white rounded border border-gray-300"
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded shadow">Post</button>
                </div>
              </div>
            {/* Sección 'Stories' */}
            <div className="bg-gray-200 p-4 rounded-lg shadow mb-4">
                <h2 className="text-lg font-semibold mb-2">Stories</h2>
                <div className="flex items-center space-x-2 overflow-x-auto">
                  {/* Botón para agregar una nueva historia */}
                  <button className="flex items-center justify-center w-20 h-20 bg-white rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                    <FaPlus size={24} />
                  </button>
                  {/* Tarjetas de historias (elementos placeholder) */}
                  {/* Estos serían elementos mapeados de un array en una implementación real */}
                  <div className="w-20 h-20 bg-blue-300 rounded-full"></div>
                  <div className="w-20 h-20 bg-green-300 rounded-full"></div>
                  <div className="w-20 h-20 bg-red-300 rounded-full"></div>
                </div>
              </div>
            {/* Sección 'Reels' */}
             <div className="bg-gray-200 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Reels</h2>
                <div className="grid grid-cols-3 gap-4">
                  {/* Botones de acciones para Reels */}
                  <button className="bg-white p-4 rounded shadow">
                    <FaCamera size={24} className="text-gray-600 mb-2" />
                    <span className="text-sm">Publish Photo</span>
                  </button>
                  <button className="bg-white p-4 rounded shadow">
                    <FaVideo size={24} className="text-gray-600 mb-2" />
                    <span className="text-sm">Live Video</span>
                  </button>
                  <button className="bg-white p-4 rounded shadow">{/* Otro ícono o acción */}</button>
                  {/* Más botones o contenido para Reels */}
                </div>
              </div>
          </div>
        </div>

        {/* Sidebar Derecha */}
        <div className="w-64 bg-red-500 flex-shrink-0 flex flex-col shadow-lg">
          {/* Elementos del SidebarR */}
          {/* ... */}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-yellow-500">
        {/* Elementos del footer */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Home;
