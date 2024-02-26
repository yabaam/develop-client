import React from 'react';
import { FaRegEnvelope, FaBell, FaRegEdit, FaRegImage, FaVideo, FaUserFriends, FaHeart, FaRegThumbsUp, FaRegEye } from 'react-icons/fa';

const YourPage = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <div className="text-lg font-semibold border-b pb-3 mb-4">
        Your Page
      </div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="rounded-full bg-gray-200 h-15 w-15 flex items-center justify-center text-sm">
          {/* Icono de usuario o imagen */}
          <FaRegEdit className="text-xl" />
        </div>
        <div>
          <div className="font-bold">My Creative Page</div>
          <div className="flex items-center space-x-1 text-gray-600 text-sm">
            <FaRegEnvelope />
            <span>Messages</span>
            <FaBell />
            <span>Notifications</span>
          </div>
        </div>
      </div>
      <div className="flex justify-around text-gray-600 text-sm mb-6">
        <FaRegEdit />
        <span>Publish</span>
        <FaRegImage />
        <span>Photo</span>
        <FaVideo />
        <span>Live</span>
        <FaUserFriends />
        <span>Invite</span>
      </div>
      <div className="flex space-x-2 justify-center mb-6">
        <button className="bg-red-500 text-white rounded px-4 py-2 flex items-center">
          <FaRegThumbsUp className="mr-2" />
          Likes
        </button>
        <button className="bg-gray-200 rounded px-4 py-2 flex items-center">
          <FaRegEye className="mr-2" />
          Views
        </button>
      </div>
      <div className="text-center text-2xl font-bold mb-2">
        <FaHeart className="text-red-500" />
        884
      </div>
      <div className="text-center text-gray-600 mb-6">35 New Likes This Week</div>
      <div className="flex justify-center space-x-1">
        {/* Asumiendo que estos son íconos o imágenes */}
        <FaRegEdit className="text-xl" />
        <FaRegImage className="text-xl" />
        <FaVideo className="text-xl" />
        <FaUserFriends className="text-xl" />
      </div>
    </div>
  );
}

export default YourPage;
