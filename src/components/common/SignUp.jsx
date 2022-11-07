import { Modal, Form, Input, Button } from "antd";
import { useContext } from "react";
import { PetContext } from "../../context/PetContext";

export default function SignUp({ visible, setVisible }) {
  const { setToken, setEmail, setUser } = useContext(PetContext);

  const handleSignUp = ({ email, password }) => {
    // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/users", {
    fetch("https://cat-rescue-backend.web.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // if (data.error) {
        //   alert("Error");
        //   setVisible(false);
        //   return;
        // } else {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        // setUser(data.user)
        // localStorage.setItem("user", data.user);
        setEmail(data.email);
        localStorage.setItem("email", data.email);
        setVisible(false);
        // }
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
