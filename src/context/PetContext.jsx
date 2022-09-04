import { createContext, useState } from "react";

export const PetContext = createContext();

export default function PetContextProvider({children}) {
  const { Provider } = PetContext;
  const [cats, setCats] = useState([]);
  // const [cat, setCat] = useState({});
  const [dogs, setDogs] = useState([]);
  // const [dog, setDog] = useState({});
  const value = { cats, setCats, dogs, setDogs
    // ,cat, setCat, dog, setDog
  };
  return <Provider value={value}>{children}</Provider>;
}
