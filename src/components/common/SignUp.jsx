import { Modal, Form, Input, Button } from 'antd';
import { useState } from 'react';

export default function SignUp({ setToken, user, setIsUser }) {
const [visible, setVisible] = useState(false)
  // const LoginButton = () => {
  //   const [loggedIn, setLoggedin] = useState(false)
  // }
  const showModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };


  const handleSignUp = ({ email, password }) => {
    fetch('http://localhost:5001/cat-rescue-backend/us-central1/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(data => {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        console.log(data.token)
      })
      window.location.reload(false)
      // window.location.assign("http://localhost:3000")
      .catch(err => alert(err.message))
  }
  return (
    <>
    <Modal visible= {visible}title="Create Account" footer={null}>
      <Form onFinish={handleSignUp} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType='submit'>Sign up</Button>
        </Form.Item>
        <p>Already a user? <Button onClick={() => setIsUser(true)} type={'link'}>Login</Button></p>
      </Form>
    </Modal>
    {user? ({user}) : <p>user not registered</p>}
    </>
  )
}