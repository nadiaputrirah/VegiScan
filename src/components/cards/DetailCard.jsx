import React from "react";
import ReactMarkdown from "react-markdown";
// import "../../style.css"
const DetailCard = ({ name, image, description, recipe, onClose }) => {
  if (!name) return null;

  return (
    <div className="w-full min-h-screen bg-white p-8 flex flex-col items-center">
      {/* Tombol kembali */}
      <button
        onClick={onClose}
        className="text-gray-600 hover:text-gray-800 text-sm mb-6 self-start"
      >
        ← Back
      </button>

      {/* Gambar sayuran */}
      <img
        src={image}
        alt={name}
        className="w-full max-w-3xl h-64 object-cover rounded-lg mb-6"
      />
      
      {/* Nama dan detail */}
      <h2 className="text-4xl font-bold mb-4 text-center">{name}</h2>
      <div className="text-2xl mb-4 text-justify" dangerouslySetInnerHTML={{ __html: description.slice(7).slice(0, -4) }} />

      <h3 className="text-4xl font-bold mb-4 text-center"> Simple Recipe </h3>
      <div className="text-2xl mb-4 text-justify" dangerouslySetInnerHTML={{ __html: recipe.slice(7).slice(0, -4) }} />
    </div>
  );
};

export default DetailCard;
