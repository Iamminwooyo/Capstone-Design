import './login.css';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PasswordModal from '../../Components/Modal/passwordmodal.js';

const Login = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const goToJoin = () => {
    navigate('/join');
  };

  const handleLogin = () => {
    navigate('/todolist');
  };

  const handleFindPassword = () => {
    setIsModalOpen(true); 
  };

  const handleModalOk = (userInfo) => {
    console.log('입력된 정보:', userInfo);
    alert('비밀번호 찾기 요청이 접수되었습니다.');
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <aside>
        <section className="login_layout">
          <h1 className="login-title">Login</h1>

          <section className="login-form">
            <Input type="text" placeholder="ID" className="input-field" />
            <Input type="password" placeholder="Password" className="input-field" />
            <button type="submit" className="login-button" onClick={handleLogin}>로그인</button>
          </section>

          <section className="login-links">
            <div className="link" onClick={goToJoin}>회원가입</div>
            <div className="link" onClick={handleFindPassword}>비밀번호 찾기</div>
          </section>
        </section>

        <PasswordModal
          isOpen={isModalOpen}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
        />
    </aside>
  );
};

export default Login;
