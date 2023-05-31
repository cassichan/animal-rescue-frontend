import { useContext } from "react";
import { Modal, Form, Input, Button } from "antd";
import { UserContext } from "../../context/UserContext";

export default function SignUp({ visible, setVisible }) {
  const { setToken, setEmail } = useContext(UserContext);

  const handleSignUp = ({ email, password }) => {
    fetch(`${process.env.REACT_APP_API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setEmail(data.email);
        localStorage.setItem("email", data.email);
        setVisible(false);
      })
      .catch((err) => alert("E-mail is already in use."));
  };
  return (
    <>
      <Modal
        onCancel={() => setVisible(false)}
        closable={true}
        visible={visible}
        title="Create Account"
        footer={null}
      >
        <Form
          onFinish={handleSignUp}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter a valid email address",
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
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
