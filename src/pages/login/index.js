import React from 'react';
import Footer from '../../components/footer';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom'
import './index.scss';
import bg from '../../static/images/1.png';

const Login = () => {
    return (
        <div className='flex center login direction_column'>
            <div className='flex center shadow border grow'>
                <div className='bg_white'>
                    <img className='login-img' src={bg} alt='' />
                </div>
                <div className='bg_white flex direction_column login_form'>
                    <h1 className='font_blue bold'>登录</h1>
                    <Input placeholder='请输入账号'/>
                    <Input type='password' placeholder='请输入密码'/>
                        <Button className='login_button' type='primary'>
                            <Link to='/home'>登录</Link>
                        </Button>
                    <div className='login_addition flex between'>
                        <span className='font_blue'>免费注册</span>
                        <span>忘记密码</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;