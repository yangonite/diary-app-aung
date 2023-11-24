import React from "react";
import { auth } from "../firebase";
import { useState } from "react";
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        console.log("email entered: " + email + "\npassword entered: " + password);

        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log("Signin.js -> user signed in");



        } catch (error) {
            console.error(error)
        } 
            
    }


    return (

        <div className="form-decorate">
            <h1>SIGN IN</h1>

            <Form
                name="signin-form"
                className="signin-form"
                initialValues={{ remember: true }}
                onFinish={handleSignIn}
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
                        Sign In
                    </Button>

                </Form.Item>
            </Form>
        </div>
    )
}


export default SignIn