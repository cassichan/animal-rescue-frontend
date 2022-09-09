import { createContext, useEffect, useState } from "react";

export const PetContext = createContext();

export default function PetContextProvider({ children }) {
  const { Provider } = PetContext;
  const [cats, setCats] = useState([]);
  const [cat, setCat] = useState({});
  const [dogs, setDogs] = useState([]);
  const [dog, setDog] = useState({});
  const [strayCats, setStrayCats] = useState([]);
  const [strayDogs, setStrayDogs] = useState([]);

  const [token, setToken] = useState(
    // ""
    localStorage.getItem("token")
  );
  const [isUser, setIsUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signUpVisible, setSignUpVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);

  const value = {
    cats,
    setCats,
    dogs,
    setDogs,
    cat,
    setCat,
    dog,
    setDog,
    strayCats,
    setStrayCats,
    strayDogs,
    setStrayDogs,
    token,
    setToken,
    isUser,
    setIsUser,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
  };

  return <Provider value={value}>{children}</Provider>;
}
