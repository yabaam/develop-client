import React from 'react';

const Stories = () => {
  // URL de la imagen de perfil que quieres utilizar
  const profileImageUrl = "https://res.cloudinary.com/dyvrrabjf/image/upload/v1704209776/ae151698-dcc0-4213-a90d-9da177d67913.jpg";

  // Un array simple para representar múltiples historias, asumiendo 5 elementos como en la imagen de referencia
  const stories = new Array(5).fill(null);

  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg overflow-x-auto">
      {stories.map((_, index) => (
        <div key={index} className="flex-shrink-0 w-16 h-16 relative">
          <div className="absolute inset-0 m-auto border-4 border-red-500 rounded-full">
            <img
              src={profileImageUrl}
              alt={`Story ${index + 1}`}
              className="w-full h-full rounded-full object-cover border-2 border-white"
            />
          </div>
          {/* <div className="absolute bottom-0 w-full text-center text-xs font-semibold truncate px-1">
            Nombre
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Stories;
