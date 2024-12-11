import React, { useState } from "react";
import UploadPopup from "./UploadPopup"; // Pastikan path-nya benar

const DetailScan = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scanDetails, setScanDetails] = useState(null); // Data hasil scan

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = (result) => {
    setIsPopupOpen(false);
    if (result) {
      setScanDetails(result); // Simpan data hasil scan
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detail Scan</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        onClick={handleOpenPopup}
      >
        Upload Image
      </button>

      {/* Tampilkan hasil scan jika ada */}
      {scanDetails && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
          <h2 className="text-xl font-semibold mb-2">Hasil Scan</h2>
          <p>
            <strong>Label:</strong> {scanDetails.label}
          </p>
          <p>
            <strong>Link:</strong>{" "}
            <a
              href={scanDetails.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {scanDetails.link}
            </a>
          </p>
          <p>
            <strong>Details:</strong> {scanDetails.details}
          </p>
        </div>
      )}

      {/* Popup untuk upload gambar */}
      <UploadPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default DetailScan;
