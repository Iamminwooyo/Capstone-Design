import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './join.css';

const JoinPage = () => {
  const [userId, setUserId] = useState('');
  const [isIdChecked, setIsIdChecked] = useState(null); // null, true, false
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigate = useNavigate();

  const checkDuplicateId = () => {
    // 여기선 예시로 "testuser"가 중복된 ID라고 가정
    if (userId === 'testuser') {
      setIsIdChecked(false); // 중복된 ID
    } else {
      setIsIdChecked(true);  // 사용 가능
    }
  };

  const handleJoin = () => {
    if (!isIdChecked) {
      alert('ID 중복 확인이 필요합니다.');
      return;
    }
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    alert('회원가입이 완료되었습니다.');
    navigate('/login');
  };

  return (
    <aside className="join_layout">
      <h1 className="join-title">Join</h1>

      <section className="join-form">
        {/* ID 입력 + 중복확인 */}
        <div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '5px' }}>
            <Input
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
                setIsIdChecked(null); // ID 수정 시 초기화
              }}
              type="text"
              placeholder="ID"
              className="input-field"
              style={{ flex: 1 }}
            />
            <div
              className="check-button"
              onClick={checkDuplicateId}
              style={{ width: '100px', textAlign: 'center', lineHeight: '32px', fontSize: '13px' }}
            >
              중복 확인
            </div>
          </div>
          <div style={{ height: '16px', marginTop: '2px', marginLeft: '5px', fontSize: '12px' }}>
            {isIdChecked === false && <span style={{ color: 'red' }}>중복된 ID입니다.</span>}
            {isIdChecked === true && <span style={{ color: '#1890ff' }}>사용 가능한 ID입니다.</span>}
            {isIdChecked === null && userId && <span style={{ color: 'red' }}>중복 확인이 필요합니다.</span>}
          </div>
        </div>

        {/* 비밀번호 */}
        <div style={{ marginTop: '-10px' }}>
          <Input
            type="password"
            placeholder="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 비밀번호 확인 */}
        <div style={{ marginTop: '-2px' }}>
          <Input
            type="password"
            placeholder="password confirm"
            className="input-field"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <div style={{ height: '16px', marginTop: '2px', marginLeft: '5px', fontSize: '12px' }}>
            {passwordConfirm && password !== passwordConfirm && (
              <span style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</span>
            )}
            {passwordConfirm && password === passwordConfirm && (
              <span style={{ color: '#1890ff' }}>비밀번호가 일치합니다.</span>
            )}
          </div>
        </div>

        {/* 이름 */}
        <div style={{ marginTop: '-10px' }}>
          <Input type="text" placeholder="name" className="input-field" />
        </div>

        {/* 버튼 */}
        <button type="submit" className="join-button" onClick={handleJoin}>
          회원가입
        </button>
      </section>
    </aside>
  );
};

export default JoinPage;
