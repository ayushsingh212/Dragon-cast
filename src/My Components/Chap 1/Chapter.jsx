import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import { useUser } from '../Context/UseContext';
import { useParams ,useNavigate} from 'react-router-dom';
const EnchantedCas = () => {
  const storyTextRef = useRef(null);
  const [spkk,setspkk] = useState(false)
 const {bgColor,setBgColor} = useUser()
const navv = useNavigate();
const speak = () => {
  const storyTextContent = storyTextRef.current.innerText;
  const utterance = new SpeechSynthesisUtterance(storyTextContent);

  if (speechSynthesis.speaking) {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setspkk(true);
    } else {
      speechSynthesis.pause();
      setspkk(false);
    }
  } else {
    setspkk(true);
    speechSynthesis.speak(utterance);
  }
};
const restartSpeech = () => {
  speechSynthesis.cancel();
  const storyTextContent = storyTextRef.current.innerText;
  const utterance = new SpeechSynthesisUtterance(storyTextContent);
  speechSynthesis.speak(utterance);
  setspkk(true);
};



  const {chapId} = useParams();
  const prevChapl = [
    { cN: 'Chapter 1', price: 0, path: '/chap1', tC: 'An exciting adventure begins in Chapter 1...', seen: false },
    { cN: 'Chapter 2', price: 10, path: '/chap2', tC: 'The journey continues with unexpected twists.', seen: false },
    { cN: 'Chapter 3', price: 15, path: '/coming-soon', tC: 'A new character emerges, changing everything.', seen: false },
    { cN: 'Chapter 4', price: 0, path: '/coming-soon', tC: 'Trouble brews as secrets are revealed.', seen: false },
    { cN: 'Chapter 5', price: 20, path: '/coming-soon', tC: 'An epic battle takes place under the stars.', seen: false },
    { cN: 'Chapter 6', price: 0, path: '/coming-soon', tC: 'Allies are tested as the stakes grow higher.', seen: false },
    { cN: 'Chapter 7', price: 25, path: '/coming-soon', tC: 'A mysterious map leads the team into danger.', seen: false },
    { cN: 'Chapter 8', price: 0, path: '/coming-soon', tC: 'A daring escape thrills the readers.', seen: false },
    { cN: 'Chapter 9', price: 30, path: '/coming-soon', tC: 'New lands bring strange new challenges.', seen: false },
    { cN: 'Chapter 10', price: 0, path: '/coming-soon', tC: 'A long-lost artifact is uncovered.', seen: false },
    { cN: 'Chapter 11', price: 35, path: '/coming-soon', tC: 'Old enemies return with a vengeance.', seen: false },
    { cN: 'Chapter 12', price: 0, path: '/coming-soon', tC: 'The group faces betrayal from within.', seen: false },
    { cN: 'Chapter 13', price: 40, path: '/coming-soon', tC: 'Answers lie in a forgotten temple.', seen: false },
    { cN: 'Chapter 14', price: 0, path: '/coming-soon', tC: 'A race against time ensues.', seen: false },
    { cN: 'Chapter 15', price: 45, path: '/coming-soon', tC: 'Unexpected help arrives from the skies.', seen: false },
    { cN: 'Chapter 16', price: 0, path: '/coming-soon', tC: 'A legend proves to be more than a myth.', seen: false },
    { cN: 'Chapter 17', price: 50, path: '/coming-soon', tC: 'A prophecy begins to unfold.', seen: false },
    { cN: 'Chapter 18', price: 0, path: '/coming-soon', tC: 'The final preparations for the ultimate showdown.', seen: false },
    { cN: 'Chapter 19', price: 55, path: '/coming-soon', tC: 'The climax begins with fierce resolve.', seen: false },
    { cN: 'Chapter 20', price: 0, path: '/coming-soon', tC: 'Victory, loss, and a new beginning.', seen: false },
    { cN: 'Chapter 21', price: 60, path: '/coming-soon', tC: 'A new chapter opens for the survivors.', seen: false },
  ];

  const upcNav = useNavigate()

   let ind = parseInt(chapId,10)
    let chapu = prevChapl[ind]
    if (!chapu) return  upcNav('/coming-soon');


  return (
    <div   style={{backgroundColor: bgColor}}  className="min-h-screen bg-gradient-to-br  text-black  flex items-center dark:bg-black justify-center p-6 dark:text-white">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-3xl w-full text-center border border-pink-700">
        <h2 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 mb-6 tracking-wide animate-fade-in">
          🌲 {chapu.cN}: The Dragon Castle :          {chapu.tC}🌲
        </h2>

        <p className="text-lg leading-7 text-black font-serif dark:text-white mb-6 font-light" ref={storyTextRef}>
  ellat libero culpa voluptates perferendis rerum sit sint omnis, excepturi fugit id modi temporibus iste quasi natus suscipit. Deleniti, vero earum maxime perferendis, error ad sint alias asperiores consectetur amet iste in aperiam. Vero, asperiores velit labore cupiditate molestias, autem saepe perspiciatis quia quaerat impedit sunt delectus est commodi, suscipit aliquam. Nisi dolore quaerat doloremque sapiente fugit veritatis qui earum architecto, eos optio. Nesciunt vitae repudiandae dicta facere temporibus, eum qui officiis quia dolorum distinctio voluptates quaerat dignissimos architecto libero sed? Dicta quis, nemo magni, odio quasi ab labore minus distinctio adipisci earum expedita nulla ut aspernatur officia nesciunt pariatur sapiente consequatur quaerat laborum, fugit veritatis aliquid obcaecati! Optio ipsam ea reiciendis pariatur quos, tenetur est excepturi culpa asperiores corrupti officia eaque consequuntur velit dolorem, nihil distinctio ex hic beatae provident quibusdam dolores quisquam quod? Voluptas molestiae qui error tenetur deserunt nobis. Iure maxime totam velit deserunt! Accusamus animi molestias nihil perspiciatis architecto tempore eaque, mollitia perferendis molestiae fugiat sit fuga, atque aliquid dicta iste quae, exercitationem earum ad nostrum eligendi. Nisi veritatis dolore voluptate explicabo dolor perferendis id tempore pariatur, laudantium nemo cumque molestias autem quae provident, nihil sapiente quasi sequi sed optio, aliquam itaque. Tempore architecto error at voluptatum asperiores tempora aspernatur sequi impedit, minima numquam amet quae nostrum nihil accusamus perspiciatis placeat distinctio cupiditate laborum maxime obcaecati. Sequi cumque quae eum, odit aspernatur fugiat, doloremque laudantium expedita laborum ipsam explicabo magnam exercitationem neque. Ipsam, natus molestiae corporis ex alias assumenda dolorum, ut earum tempora, accusamus laborum officiis error delectus illum expedita ullam eligendi quidem inventore. Maiores exercitationem distinctio fugiat laborum incidunt corporis quam cupiditate commodi necessitatibus earum, dolores, magni explicabo laudantium nam illo? Corporis, delectus magni similique in optio culpa mollitia porro facere necessitatibus, libero saepe aliquam, a blanditiis distinctio quibusdam obcaecati exercitationem laboriosam reprehenderit deserunt omnis aliquid perferendis eos sequi. Inventore quasi maiores deleniti quos eius accusamus id dolorem cum? Modi quos dolores rerum nihil iusto error repellat, eaque quas ea, cum expedita nulla fugit esse tenetur mollitia. Autem minima perspiciatis corporis tenetur veritatis perferendis pariatur at corrupti ratione eos mollitia inventore, dignissimos odit, explicabo, quod ex? Dolores dolor obcaecati itaque dicta modi dolorem harum aspernatur officia reiciendis, repellat veniam similique? Odio ipsa dolor illo quibusdam sit nobis ipsum! Dicta laboriosam cupiditate suscipit ducimus mollitia magnam omnis neque praesentium beatae ex autem ut a odio ratione sit similique, placeat reprehenderit nemo? Perferendis, dignissimos cum perspiciatis expedita consequuntur commodi porro delectus quod libero, optio harum, alias vitae in autem corporis iusto nulla sequi qui! Soluta qui autem alias doloribus iste provident fuga, quidem ut id quia natus tenetur incidunt, explicabo modi mollitia a expedita voluptas eos quod rem sunt! At magnam possimus animi voluptatum velit modi est?
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 rounded-xl font-semibold text-lg shadow-xl transform hover:scale-105" onClick={
            ()=>{
               navv(`/chap/${ parseInt(chapId)+1}`)
            }
          }>
            Continue the Quest → 
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 rounded-xl font-semibold text-lg shadow-xl transform hover:scale-105" onClick={
            ()=>{
               navv(`/chap/${ parseInt(chapId)-1}`)
            }
          }>
            Previous Quest → 
          </button>
          <button 
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 rounded-xl font-semibold text-lg shadow-xl transform hover:scale-105"
            onClick={speak}
          >
              
              {spkk ? 'Pause the scene':' 🔊 Speak This Scene' } 
          </button>
         
          <button className='bg-blue-600 rounded-lg border-1 border-s border-black ' onClick={restartSpeech} >Restart</button>
     
          <input placeholder='Enter the color needed' className='text-black rounded border-2 border-s border-blue-700' type="text" value={bgColor} onChange={(e)=>{
            setBgColor(e.target.value)
          }} />
        </div>
      </div>
    </div>
  );
};

export default EnchantedCas;
