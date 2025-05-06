import React from 'react';
import { useNavigate } from 'react-router-dom';

const SorryUpcom = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-950 via-purple-800 to-black text-white flex flex-col items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-md border border-purple-700 rounded-3xl p-8 max-w-xl w-full text-center shadow-2xl">
        <h1 className="text-3xl font-bold text-pink-300 mb-4 animate-pulse">📖 Chapter Coming Soon!</h1>
        <p className="text-lg text-gray-200 mb-6">
          This chapter is not available yet, but a magical tale is brewing! Stay tuned for upcoming adventures as we expand the world of fantasy.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold rounded-xl transition duration-300"
        >
          🔙 Go Back
        </button>
      </div>
    </div>
  );
};

export default SorryUpcom;
