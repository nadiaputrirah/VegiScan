import React from "react";

const DetailCard = ({ name, image, details, onClose }) => {
  if (!name) return null;

  return (
    <div className="w-full max-w-screen-xl mx-auto bg-white px-4 md:px-8 py-8 mt-10 mb-20 flex flex-col">
      {/* Tombol kembali */}
      <div className="flex items-center w-full max-w-full mb-6">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 text-secondary-500 rounded-lg text-lg"
        >
          <span className="text-lg">←</span> Back
        </button>
      </div>

      {/* Gambar sayuran */}
      <img
        src={image}
        alt={name}
        className="w-full max-w-full h-96 object-cover rounded-lg mb-6"
      />

      {/* Nama dan detail */}
      <h2 className="text-4xl text-textDark font-bold mb-4 text-left">{name}</h2>
      <p className="text-lg text-textDark text-left">{details}</p>
    </div>
  );
};

export default DetailCard;
