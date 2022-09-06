import { createContext, useEffect, useState } from "react";

export const PetContext = createContext();

export default function PetContextProvider({children}) {
  const { Provider } = PetContext;
  const [cats, setCats] = useState([]);
  const [cat, setCat] = useState({});
  const [dogs, setDogs] = useState([]);
  const [dog, setDog] = useState({});
  const value = { cats, setCats, dogs, setDogs
    ,cat, setCat, dog, setDog
  };

  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/cats")
      // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/cats")
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((error) => console.log(error));
  }, [setCats]);
  return <Provider value={value}>{children}</Provider>;
}