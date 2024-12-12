import React, { useState } from "react";

const DetailScan = ({ name, image, description, recipe, onCloseTwo }) => {
  if (!name) return null;

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt!");
      return;
    }

    setLoading(true);
    const perintah = `You are only permitted to talk about ${name}. If they talk about something else, respond to them in about two sentences saying you are not understand about what are they talking politely. Now, Listen to the following prompt and explain it as usual: ${prompt}`;
    try {
      const response = await fetch(
        "https://test-backend-javascript-623812248472.asia-southeast2.run.app/prompt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: perintah }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setResult(data.data || "No result returned from API.");
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto sm:p-8 flex flex-col items-center">
      {/* Tombol kembali */}
      <div className="flex items-center w-full max-w-full mb-6">
        <button
          onClick={onCloseTwo}
          className="flex items-center gap-2 px-4 py-2 bg-none text-secondary-500 text-lg"
        >
          <span className="text-lg">←</span> Back
        </button>
      </div>

      {/* Card utama */}
      <div className="w-full max-w-screen-xl rounded-lg p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gambar */}
        <div>
          <img
            src={image}
            alt={name}
            className="w-full h-80 object-cover rounded-md shadow-sm"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-textDark text-center lg:text-left">
            {name}
          </h2>
          <div
            className="text-base sm:text-lg text-textDark mb-6 text-justify"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-textDark text-center lg:text-left">
            Simple Recipe
          </h3>
          <div
            className="text-base sm:text-lg text-textDark text-justify"
            dangerouslySetInnerHTML={{ __html: recipe }}
          />
        </div>
      </div>

      {/* Prompt form */}
      <div className="w-full max-w-screen-xl p-6 sm:p-8 mt-8">
        <h3 className="text-2xl font-bold mb-4 text-textDark">Have Any Questions?</h3>
        <textarea
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />
        <div className="flex justify-end">
          <button
            className="w-full sm:w-auto bg-secondary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition disabled:opacity-50"
            onClick={sendPrompt}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
        <textarea
          className="w-full p-3 border rounded-lg mt-4 focus:ring-2 focus:ring-primary-500 focus:outline-none"
          value={result}
          readOnly
        />
      </div>
    </div>
  );
};

export default DetailScan;
