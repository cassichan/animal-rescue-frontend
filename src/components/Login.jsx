import { Modal, Form, Input, Button } from 'antd';

export default function Login({ setToken, setIsUser }) {
  const handleLogin = ({ email, password }) => {
    fetch('http://localhost:5001/cat-rescue-backend/us-central1/api/users/login', {
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
      })
      .catch(err => alert(err.message))
  }
  return (
    <Modal title="Login" visible closable={false} footer={null}>
      <Form onFinish={handleLogin} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Email" name="email" rules={[{
          required: true,
          message: 'Please enter a valid email'}]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{
          required: true,
          message: 'Please enter a valid email'}]}>
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType='submit'>Login</Button>
        </Form.Item>
        <p>Not a user? <Button onClick={() => setIsUser(false)} type={'link'}>Sign Up</Button></p>
      </Form>
    </Modal>
  )
}