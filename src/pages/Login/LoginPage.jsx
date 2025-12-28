import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from '../../assets/4.svg';

export default function LoginPage() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = () => {
        // Implement login logic here
        console.log('Login attempt:', formData);
        navigate('/home');
    };

    return (
        <div className="login-container">
            <div className="login-content-wrapper">
                <div className="login-form-section">
                    <div className="login-card">
                        <h1 className="login-title">로그인</h1>

                        <div className="form-group">
                            <label htmlFor="id">ID</label>
                            <input
                                type="text"
                                id="id"
                                placeholder="아이디를 입력하세요"
                                value={formData.id}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="비밀번호를 입력하세요"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="signup-link">
                            <span>계정이 없으신가요? </span>
                            <a href="/signup">회원가입</a>
                        </div>

                        <button className="login-button" onClick={handleSubmit}>로그인</button>
                    </div>
                </div>

                <div className="login-brand-section">
                    <div className="brand-content">
                        <img src={logo} alt="HDF Logo" className="brand-logo" />
                        <h2 className="brand-text">HDF</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
