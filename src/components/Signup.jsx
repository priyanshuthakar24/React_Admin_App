import React from 'react'
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography, Select } from 'antd';
import { Link } from 'react-router-dom';
import singupic from '../assets/img/signup3d.webp'
import useSignup from '../hooks/useSignup';
import classes from './Login.module.css'
const { Option } = Select;
const Signup = () => {
    const { loading, error, registerUser } = useSignup();
    const handleRegister = (values) => { registerUser(values) }
    return (
        <div className={classes.main}>

            <Card className='form-container1'>
                <Flex gap='large' align='center'>
                    {/* form */}

                    <Flex vertical flex={1}>
                        <Typography.Title level={3} strong className='title'>
                            Create an account
                        </Typography.Title>
                        <Typography.Text type='secondary' strong className='slogan'>
                            Join for exclusive access!
                        </Typography.Text>
                        <Form layout='vertical' onFinish={handleRegister} autoComplete='off' initialValues={{ role: 'Employee' }}>
                            <Form.Item label="Full Name"
                                name='name'
                                rules={
                                    [
                                        {
                                            required: true,
                                            message: 'please input your full name',
                                        },
                                    ]} >
                                <Input size='large' placeholder='Enter your full name' />
                            </Form.Item>
                            <Form.Item label="Email"
                                name='email'
                                rules={
                                    [
                                        {
                                            required: true,
                                            message: 'please input full email',
                                        }, {
                                            type: 'email',
                                            message: 'The input is not valid Email!'
                                        },
                                    ]} >
                                <Input size='large' placeholder='Enter your full email' />
                            </Form.Item>
                            <Form.Item
                                label="Role"
                                name="role"
                                rules={[{ required: true, message: 'Please select a role!' }]}
                            >
                                <Select defaultValue="Student">
                                    <Option value="Employee">Employee</Option>
                                    <Option value="Manager">Manager</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Password"
                                name='password'
                                rules={
                                    [
                                        {
                                            required: true,
                                            message: 'please input your Password',
                                        }
                                    ]} >
                                <Input.Password size='large' placeholder='Enter your Password' />
                            </Form.Item>
                            <Form.Item label="Re-Password"
                                name='passwordConfirm'
                                rules={
                                    [
                                        {
                                            required: true,
                                            message: 'please input your Confirm Password',
                                        }
                                    ]} >
                                <Input.Password size='large' placeholder='Re-Enter your Password' />
                            </Form.Item>
                            {
                                error && <Alert description={error} type='error' showIcon
                                    closable
                                    className='alert' />
                            }
                            <Form.Item>
                                <Button
                                    type={`${loading ? '' : 'primary'}`}
                                    htmlType='submit' size='large' className='btn' >
                                    {loading ? <Spin /> : 'Create Account'}
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Link to='/auth/login'>
                                    <Button size='large' className='btn'>Sign In
                                    </Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </Flex>
                    {/* image  */}
                    <Flex flex={1}>
                        <img src={singupic} className='auth-img' alt='no' />
                    </Flex>
                </Flex >
            </Card >
        </div>
    )
}

export default Signup