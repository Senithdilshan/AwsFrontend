import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Space, } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReqestLogin } from '../../Redux/Ducks/User';
//----------------------------------Log In-----------------------------------------------------------
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [log, setLog] = useState('Log In');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLog = useSelector((state) => ({...state.user.posts})); 

const renderUserview=()=>{
  navigate('/viewUsers');
}
const renderfaild=()=>{
  navigate('/');
}
  //--------------------------------Handle Submit-------------------------------------------------------------
  const HandleSubmit = async() => {
    const data = {
      email: email, 
      password: password,
    }
    dispatch(ReqestLogin(data,renderUserview,renderfaild));
    setLog("Logging..")
  }
  //---------------------------------------------------------------------------------------------
  return (
    <div>
      <div className="Auth-form-container">
        <div className="Auth-form" >
          <div className="Auth-form-content">
            <h2 className="Auth-form-title1">User Manage System</h2>
            <h3 className="Auth-form-title">{log}</h3>
            <div className="form-group mt-3">
              <Form wrapperCol={{ span: 40 }}>
                <Form.Item name="email" label='Email'
                  rules={[
                    { required: true, message: "Please Enter Your Email" },
                    { type: "email", message: "Email is not a valid one" }
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Enter Your Email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Item>
                <Form.Item name="password" label='Password'
                  rules={[
                    { required: true, message: "Password is required" },
                    { min: 6, message: "Password must be at least 6 characters long" },
                    { max: 20, message: "Password must be at most 20 characters long" },
                  ]}
                  hasFeedback
                >
                  <Input.Password placeholder="Enter a Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Item>

                <Space>
                  <Button type="primary" htmlType='submit'
                    onClick={() => {
                      HandleSubmit()
                    }}>Sign In</Button>
                  <Button type="primary" danger htmlType='reset'>Reset</Button>
                  <Link to={'/resetPassword'}>
                    <Button type="primary">Forgot Password</Button>
                  </Link>
                </Space>
              </Form>
              <br />
              <p>Don't have Account?
                <Link to={'/signIn'}>
                  <Button type="link">Sign Up</Button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
