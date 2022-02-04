import React from 'react'
import { Row, Col, Form } from 'antd'
import './style.css'
import { Input, Button } from '../../../shared'

const SignInComponent = ({ email, password, handleChange, onSubmit, onFinish, onFinishFailed }) => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className='center'
        >
            <Row gutter={[16, 16]} justify='end'>
                <Col span={24}>
                    <h2>Sign In</h2>
                </Col>
                <Col span={24} className='spacing'>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}
                    >
                        <Input placeholder={'Enter your email'} value={email} style={{ width: '40%' }} onChange={() => handleChange()} />
                    </Form.Item>
                </Col>

                <Col span={24} className='spacing'>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password' }]}
                    >
                        <Input placeholder={'Enter your password'} value={password} style={{ width: '40%' }} onChange={() => handleChange()} />
                    </Form.Item>
                </Col>

                <Col span={24} className='spacing'>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button htmlType="submit" label="Submit" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <h4>New member? Sign up now</h4>
                </Col>
            </Row>
        </Form>
    )
}


export default SignInComponent