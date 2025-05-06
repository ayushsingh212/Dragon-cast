import React, { useEffect } from 'react';
import { useUser } from '../Context/UseContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { name, setName,Login,setLogi } = useUser();
   
  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem("user"));
    if (storedName) {
      setName(storedName.name);
      setLogi(true)
      
   

    }
  }, [setName,setLogi]);

  const navg = useNavigate()
  const goHome = () =>{

 Login?  navg('/chapters'):navg('/login')

  }

  return (
    <div className="min-h-screen font-serif  text-white flex flex-col items-center justify-center text-center p-8 animate-fade-in bg-[url('./assets/drgnimg.png')] bg-cover bg-center dark:bg-black">
      <h1 className="text-4xl font-bold mb-4">
        Welcome {name || "Adventurer"} to the Realm of Eldoria
      </h1>
      {  Login? '':( <h3 className='text-red-700 font-bold'>Dear User, Please Login</h3> ) }
      <p className="mb-6 text-lg max-w-xl">
        A world of magic, dragons, and hidden secrets awaits. Begin your journey into the unknown.
      </p>
      <button className="px-6 py-3 bg-orange-500 rounded-xl text-lg hover:scale-105 transition-transform" onClick={goHome}>
        Begin Journey
      </button>
    </div>
  );
};

export default Home;
