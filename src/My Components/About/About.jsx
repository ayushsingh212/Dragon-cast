import React from 'react';

const About = () => {
  return (
    <div className='w-full p-4 h-full bg-yellow-600  bg-[url("./assets/aboutbg.png")] '>
    <div className="p-6 max-w-4xl mx-auto min-h-screen bg-gradient-to-b  from-blue-900 rounded-2xl shadow-lg  dark:text-white ">
      <h1 className="text-4xl font-bold mb-4 text-yellow-400">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to <span className="font-semibold text-purple-400">Dragon Realms</span>, a mythical world where dragons soar above ancient castles, enchanted forests whisper forgotten tales, and brave adventurers carve their destinies.
      </p>
      <p className="text-lg mb-4">
        Our fantasy platform brings you an immersive experience through episodic storytelling, magical lore, and interactive quests. Dive into a universe rich with kingdoms at war, elemental magic, and mythical creatures waiting to be discovered.
      </p>
      <p className="text-lg mb-4">
        Whether you're a wandering mage, a fearless knight, or a curious scholar, Dragon Realms offers a tale tailored to your spirit. Every chapter opens a new gate to wonder, danger, and unforgettable journeys.
      </p>
      <p className="text-lg">
        Join us, and become part of the legend. The castle gates are open — your quest begins now.
        
      </p>
      <h2>This Page has been created by Ayush the Devloper</h2>
    </div>
    </div>
  );
};

export default About;
