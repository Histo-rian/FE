import React from 'react';
import './login.css';

function Login() {
  return (
    <div>
        <div className="login-container">
            <form>
                <h1>로그인</h1>
                <div className = "in">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="이메일을 입력해주세요."
                        className="personal_information"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        className="personal_information"
                    />
                </div>
                <button type="submit" className="submit-button">
                    가입하기
                </button>
            </form>
        </div>
        <div className = "Rectangle">
            <img src = "/logo.png"></img>
        </div>
    </div>
  );
}

export default Login;
