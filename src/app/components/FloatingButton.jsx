"use client";
// components/FloatingButton.jsx
import React from "react";

const FloatingButton = ({ setShowModal }) => {
  return (
    <button
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-blue-600 text-white rounded-full px-5 py-4 shadow-lg hover:bg-blue-700 transition-all duration-200 z-40 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={() => setShowModal(true)}
      aria-label="Create New Avatar"
    >
      <span className="text-2xl font-bold mr-0 sm:mr-2">+</span>
      <span className="hidden sm:inline text-base font-medium">
        Create New Avatar
      </span>
    </button>
  );
};

export default FloatingButton;
