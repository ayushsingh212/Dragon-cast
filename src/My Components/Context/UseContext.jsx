
import { createContext, useContext, useState } from "react";

const UserContext = createContext({
  name: "Anonymous",
  setName: () => {},
  input: '',
  setInput: () => {},
  Login :false,
  setLogi :()=>{},
  bgColor:'',
  setBgColor:()=>{}
});

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState();
  const [input, setInput] = useState("");
  const [Login,setLogi] =useState(false);
  const [bgColor,setBgColor] = useState('')
  return (
    <UserContext.Provider value={{ name, setName, input, setInput ,Login,setLogi,bgColor,setBgColor}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
