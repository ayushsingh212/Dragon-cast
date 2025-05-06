import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Chapters = () => {
  const prevChapl = [
    { cN: 'Chapter 1 ', price: 0, path: 'chap/0', tC: 'An exciting adventure begins in Chapter 1...', seen: false },
    { cN: 'Chapter 2', price: 10, path: 'chap/1', tC: 'The journey continues with unexpected twists.', seen: false },
    { cN: 'Chapter 3', price: 15, path: 'chap/2', tC: 'A new character emerges, changing everything.', seen: false },
    { cN: 'Chapter 4', price: 0, path: 'chap/3', tC: 'Trouble brews as secrets are revealed.', seen: false },
    { cN: 'Chapter 5', price: 20, path: 'chap/4', tC: 'An epic battle takes place under the stars.', seen: false },
    { cN: 'Chapter 6', price: 0, path: 'chap/5', tC: 'Allies are tested as the stakes grow higher.', seen: false },
    { cN: 'Chapter 7', price: 25, path: 'chap/6', tC: 'A mysterious map leads the team into danger.', seen: false },
    { cN: 'Chapter 8', price: 0, path: 'chap/7', tC: 'A daring escape thrills the readers.', seen: false },
    { cN: 'Chapter 9', price: 30, path: 'chap/8', tC: 'New lands bring strange new challenges.', seen: false },
    { cN: 'Chapter 10', price: 0, path: 'chap/9', tC: 'A long-lost artifact is uncovered.', seen: false },
    { cN: 'Chapter 11', price: 35, path: 'chap/10', tC: 'Old enemies return with a vengeance.', seen: false },
    { cN: 'Chapter 12', price: 0, path: 'chap/11', tC: 'The group faces betrayal from within.', seen: false },
    { cN: 'Chapter 13', price: 40, path: 'chap/12', tC: 'Answers lie in a forgotten temple.', seen: false },
    { cN: 'Chapter 14', price: 0, path: 'chap/13', tC: 'A race against time ensues.', seen: false },
    { cN: 'Chapter 15', price: 45, path: 'chap/14', tC: 'Unexpected help arrives from the skies.', seen: false },
    { cN: 'Chapter 16', price: 0, path: 'chap/15', tC: 'A legend proves to be more than a myth.', seen: false },
    { cN: 'Chapter 17', price: 50, path: 'chap/16', tC: 'A prophecy begins to unfold.', seen: false },
    { cN: 'Chapter 18', price: 0, path: 'chap/17', tC: 'The final preparations for the ultimate showdown.', seen: false },
    { cN: 'Chapter 19', price: 55, path: 'chap/18', tC: 'The climax begins with fierce resolve.', seen: false },
    { cN: 'Chapter 20', price: 0, path: 'chap/19', tC: 'Victory, loss, and a new beginning.', seen: false },
    { cN: 'Chapter 21', price: 60, path: 'chap/20', tC: 'A new chapter opens for the survivors.', seen: false },
  ];

  const [chapters, setChapters] = useState(() => {
    const saved = localStorage.getItem('chapters');
    return saved ? JSON.parse(saved) : prevChapl;
  });

  useEffect(() => {
    localStorage.setItem('chapters', JSON.stringify(chapters));
  }, [chapters]);

  return (
    
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-pink-600 dark:text-white">
    
      <div className="container mx-auto px-6 py-12">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-extrabold text-shadow-lg animate-fade-in">The Chapter Begins Here</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {chapters.map((e, i) => (
            <section
              key={i}
              className={`${
                e.seen ? 'border-4 border-teal-500 bg-indigo-800' : 'bg-white dark:bg-gray-800'
              } rounded-xl  shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2`}
            >
              <h2 className="text-3xl font-semibold text-black mb-4 dark:text-white">{e.cN}</h2>
              <img src="./src/assets/chap.png" alt="" srcset="" />
              <p className="text-lg text-gray-800 dark:text-gray-300">{e.tC}</p>

              <NavLink
                className={({ isActive }) =>
                  `text-xl ${isActive ? 'text-yellow-400' : 'text-gray-600'} rounded-md p-2 my-3 bg-gradient-to-r from-yellow-400 to-orange-600 border-[1px] border-solid border-black font-semibold dark:text-white`
                }
                to={`/${e.path}`}
                onClick={()=>{
                  window.scrollTo({top:0,behavior : 'smooth'})
                }}

              >
                Explore here {e.cN}
              </NavLink>

              <NavLink
                to={`/${e.path}`}

                className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:text-white p-2 mt-2 hover:bg-blue-800 rounded-md inline-block transition-all duration-200"
                onClick={()=>{
                  window.scrollTo({top:0,behavior : 'smooth'})
                }}
              >
                &#8377; {e.price} | {e.price === 0 ? 'Enter' : 'Upcoming'}
              </NavLink>

              <button
                className={`mt-3 px-4 py-2 rounded-md transition-all duration-300 ${
                  e.seen
                    ? 'bg-teal-500 text-white cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-800 text-white'
                }`}
                onClick={() => {
                  setChapters(prev =>
                    prev.map((chap, idx) =>
                      idx === i ? { ...chap, seen: !chap.seen } : chap
                    )
                  );
                }}
              >
                {e.seen ? 'Mark UnRead' : 'Mark Read'}
              </button>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapters;
