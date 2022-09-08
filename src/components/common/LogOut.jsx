import { Modal, Form, Input, Button } from "antd";
export default function Logout({
  setToken,
  setIsUser,
  user,
  isLoggedIn,
  setIsLoggedIn,
  visible,
  setVisible,
}) {
  const handleLogout = (token) => {
    localStorage.clear();
  };
  return <>{/* <Button onClick = {()=> {handleLogout}}></Button> */}</>;
}
