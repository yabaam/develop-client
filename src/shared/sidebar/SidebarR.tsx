/* eslint-disable prettier/prettier */

const SidebarR = () => {
  return (
    <div className="w-1/6 bg-blue-500 h-screen fixed top-0 right-0 flex flex-col z-10">
      <ul className="flex flex-col">
        <li className="text-white py-2 px-4 hover:bg-blue-700 cursor-pointer">Inicio</li>
        <li className="text-white py-2 px-4 hover:bg-blue-700 cursor-pointer">Perfil</li>

      </ul>
    </div>
  );
};

export default SidebarR;
