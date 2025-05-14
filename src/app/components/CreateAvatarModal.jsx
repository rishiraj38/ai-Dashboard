"use client";
import React, { useState } from "react";

const CreateAvatarModal = ({ setShowModal, onCreate }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onCreate({ name });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form
        className="bg-white rounded-lg p-8 w-80 shadow-lg relative"
        onSubmit={handleSubmit}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          type="button"
          onClick={() => setShowModal(false)}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Create New Avatar</h2>
        <div className="mb-4">
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateAvatarModal;
