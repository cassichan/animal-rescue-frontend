import { createContext, useState } from "react";

export const PetContext = createContext();

export default function PetContextProvider({children}) {
  const { Provider } = PetContext;
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const value = { cats, setCats, dogs, setDogs };
  return <Provider value={value}>{children}</Provider>;
}
