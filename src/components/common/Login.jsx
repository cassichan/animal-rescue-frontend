import { Modal, Form, Input, Button } from "antd";
import { useState } from "react";
import { Link} from "react-router-dom";

export default function Login({ setToken, setIsUser, user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = ({ email, password }) => {
    fetch(
      "http://localhost:5001/cat-rescue-backend/us-central1/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("token", data.token);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <>
    {!user ? (
       <Link to="/users/login">
       <Button 
       onClick={handleShow} 
       type="link" htmlType="button">
         Login
       </Button>
     </Link>
    ) : ( <Link to="/users/login">
    <Button 
    // onClick={}
    type="link" htmlType="button">
      Logout
    </Button>
  </Link>)
    
    }
    <Modal
      show={show}
      onHide={handleClose}
      title="Login"
      visible
      closable={false}
      footer={null}
    >
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onFinish={handleLogin}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
          <p>
            Not a user?{" "}
            <Button onClick={() => setIsUser(false)} type={"link"}>
              Sign Up
            </Button>
          </p>
        </Form>
      </Modal.Body>
    </Modal>
    </>
  );
}
