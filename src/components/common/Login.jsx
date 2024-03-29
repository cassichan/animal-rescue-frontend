import { useContext } from "react";
import { Modal, Form, Input, Button } from "antd";
import { UserContext } from "../../context/UserContext";

export default function Login({ visible, setVisible }) {
  const { setToken, setEmail, setIsLoggedIn } = useContext(UserContext);

  const handleLogin = ({ email, password }) => {
    fetch(
      `${process.env.REACT_APP_API}/users/login`,
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
        setEmail(data.email);
        localStorage.setItem("email", data.email);
        setVisible(false);
        setIsLoggedIn(true);
      })
      .catch((err) => alert("Invalid email or password"));
  };
  return (
    <>
      <Modal
        onCancel={() => setVisible(false)}
        closable={true}
        visible={visible}
        title="Login"
        footer={null}
      >
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
                message: "Please enter a valid password",
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
        </Form>
      </Modal>
    </>
  );
}
