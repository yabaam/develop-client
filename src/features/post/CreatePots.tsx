import React from 'react';

const CreatePots = () => {
  return (
    <div className="p-4 shadow-lg rounded-lg bg-white my-6 mx-auto max-w-xl">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-200 h-12 w-12 flex items-center justify-center">
          {/* Aquí iría tu ícono de usuario */}
          <span className="text-sm">45 x 45</span>
        </div>
        <input type="text" placeholder="Share some what you are thinking?" className="flex-1 border-0 focus:ring-0" />
      </div>
      <div className="flex justify-between items-center mt-4">
        {/* Aquí irían tus íconos de adjuntar archivos o realizar otras acciones */}
        <div className="flex space-x-2 text-gray-500">
          {/* Ejemplo de ícono */}
          <span>📍</span>
          <span>🎵</span>
          <span>📁</span>
          <span>📷</span>
        </div>
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2">Post</button>
      </div>
    </div>
  );
};

export default CreatePots;
