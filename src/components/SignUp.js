import React from "react";
import { auth } from "../firebase";
import { useState } from "react";
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        
        try {
            console.log("email entered: " + email);
            console.log("password entered: " + password);
            await createUserWithEmailAndPassword(auth, email, password)
            console.log("Signup.js -> user signed up");

        } catch (error) {
            console.error(error);
        }
            
    }

    return (

        <div className="form-decorate">
            <h1>SIGN UP</h1>

            <Form
                name="signup-form"
                className="signup-form"
                initialValues={{ remember: true }}
                onFinish={handleSignUp}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!', type: 'email'}]}

                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}/>
                </Form.Item>
                
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                        Sign Up
                    </Button>

                </Form.Item>
            </Form>
        </div>
    )
}


export default SignUp