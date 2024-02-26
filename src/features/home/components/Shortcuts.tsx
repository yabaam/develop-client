import React from 'react';

const Shortcuts = () => {
  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <div className="text-lg font-semibold border-b px-6 py-4">Shortcuts</div>
      <div className="divide-y">
        {[
          // Aquí iría tu array de elementos del menú
          { name: 'News Feed', icon: '📰' }
          // Repite para cada elemento...
        ].map((item) => (
          <a className="flex items-center space-x-3 px-6 py-3 hover:bg-gray-100 text-gray-700" key={item.name}>
            <span className="text-xl">{item.icon}</span>
            <span className="flex-1 min-w-0">
              <span className="block font-medium truncate">{item.name}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Shortcuts;
