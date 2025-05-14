"use client";
import React from "react";

const AvatarCard = ({ name, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-blue-200"
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <button className="bg-gray-200 hover:bg-blue-100 text-blue-700 px-4 py-1 rounded transition">
        Edit
      </button>
    </div>
  );
};

export default AvatarCard;

