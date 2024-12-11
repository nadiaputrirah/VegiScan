import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

// import "../../style.css"
const DetailCard = ({ name, image, description, recipe, onClose }) => {
  if (!name) return null;
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt!');
      return;
    }

    setLoading(true);
    const perintah = `You are only permitted to talk about ${name}. If they talk about something else, respond to them in about two sentences saying you are not understand about what are they talking politely. Now, Listen to the following prompt and explain it as usual: ${prompt}`;
    try {
      const response = await fetch('https://test-backend-javascript-623812248472.asia-southeast2.run.app/prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify JSON payload
        },
        body: JSON.stringify({ prompt: perintah }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      console.log("TEST");
      const data = await response.json();
      setResult(data.data || 'No result returned from API.');
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
        <div className="text-2xl mb-4 text-justify" dangerouslySetInnerHTML={{ __html: description }} />

        <h3 className="text-4xl font-bold mb-4 text-center"> Simple Recipe </h3>
        <div className="text-2xl mb-4 text-justify" dangerouslySetInnerHTML={{ __html: recipe }} />
      </div>

      <div style={styles.container}>
        <textarea
          style={styles.textarea}
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />
        <button style={styles.button} onClick={sendPrompt} disabled={loading}>
          {loading ? 'Sending...' : 'Send Prompt'}
        </button>
        <textarea
          style={styles.textarea}
          placeholder="Result will appear here..."
          value={result}
          readOnly
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    alignSelf: 'center',
  },
};
export default DetailCard;
