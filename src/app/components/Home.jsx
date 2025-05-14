// components/Home.jsx
"use client";
import React, { useState, useEffect } from "react";
import CreateAvatarModal from "./CreateAvatarModal";
import FloatingButton from "./FloatingButton";
import AvatarCard from "./AvatarCard";

export default function Home() {
  const [avatars, setAvatars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAvatars(
          data.data.map((user) => ({
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
            image: user.avatar,
          }))
        );
      });
  }, [page]);

  const handleCreateAvatar = (newAvatar) => {
    setAvatars((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newAvatar.name,
        image:
          newAvatar.image ||
          "https://api.dicebear.com/7.x/miniavs/svg?seed=" +
            encodeURIComponent(newAvatar.name),
      },
    ]);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center px-2 py-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 tracking-tight">
            AI Dashboard
          </h1>
          <p className="text-base sm:text-lg text-blue-600 mt-2">
            Welcome back, User!
          </p>
        </div>
        <div className="flex justify-center mb-6 gap-4">
          <button
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium shadow hover:bg-blue-200 transition disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="self-center font-semibold text-blue-700">
            Page {page}
          </span>
          <button
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium shadow hover:bg-blue-200 transition disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(2, p + 1))}
            disabled={page === 2}
          >
            Next
          </button>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5">
          {avatars.length > 0 ? (
            avatars.map((avatar) => (
              <AvatarCard
                key={avatar.id}
                name={avatar.name}
                image={avatar.image}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-blue-400">
              No avatars found.
            </p>
          )}
        </div>
      </div>
      {showModal && (
        <CreateAvatarModal
          setShowModal={setShowModal}
          onCreate={handleCreateAvatar}
        />
      )}
      <FloatingButton setShowModal={setShowModal} />
    </div>
  );
}
