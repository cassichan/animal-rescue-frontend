import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const { Provider } = UserContext;
  const [token, setToken] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const value = {
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
