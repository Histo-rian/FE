import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';
import logo from '../../assets/4.svg';

export default function SignupPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear error when user types
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};

        // ID Validation: >= 4 chars, Eng/Kor/Num allowed
        const idRegex = /^[a-zA-Z0-9가-힣]+$/;
        if (!formData.id) {
            newErrors.id = '아이디를 입력해주세요.';
        } else if (formData.id.length < 4) {
            newErrors.id = '아이디는 4글자 이상이어야 합니다.';
        } else if (!idRegex.test(formData.id)) {
            newErrors.id = '아이디는 영어, 한글, 숫자만 가능합니다.';
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = '이메일을 입력해주세요.';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = '올바른 이메일 형식이 아닙니다.';
        }

        // Password Validation: >= 8 chars, must include special char
        // Special chars: !@#$%^&*(),.?":{}|<> etc.
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        if (!formData.password) {
            newErrors.password = '비밀번호를 입력해주세요.';
        } else if (formData.password.length < 8) {
            newErrors.password = '비밀번호는 8자 이상이어야 합니다.';
        } else if (!specialCharRegex.test(formData.password)) {
            newErrors.password = '비밀번호는 특수기호를 포함해야 합니다.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log('Form Submitted', formData);
            alert('회원가입이 완료되었습니다!');
            navigate('/login');
            // Proceed with API call
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-content-wrapper">
                <div className="signup-form-section">
                    <div className="signup-card">
                        <h1 className="signup-title">회원가입</h1>

                        <div className="form-group">
                            <label htmlFor="id">ID</label>
                            <input
                                type="text"
                                id="id"
                                placeholder="jungwoo07191"
                                value={formData.id}
                                onChange={handleChange}
                                className={errors.id ? 'error' : ''}
                            />
                            {errors.id && <p className="error-message">{errors.id}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="jungwoo07191@naver.com"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="*************"
                                value={formData.password}
                                onChange={handleChange}
                                className={errors.password ? 'error' : ''}
                            />
                            {errors.password && <p className="error-message">{errors.password}</p>}
                        </div>

                        <div className="login-link">
                            <span>계정을 가지고 계신가요? </span>
                            <a href="/login">로그인</a>
                        </div>

                        <button className="signup-button" onClick={handleSubmit}>회원가입</button>
                    </div>
                </div>

                <div className="signup-brand-section">
                    <div className="brand-content">
                        <img src={logo} alt="HDF Logo" className="brand-logo" />
                        <h2 className="brand-text">HDF</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
