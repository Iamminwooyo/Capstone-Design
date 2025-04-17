import { Modal, Input } from 'antd';
import { useState } from 'react';
import './modal.css';

const PasswordModal = ({ isOpen, onOk, onCancel }) => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [foundPassword, setFoundPassword] = useState(null);

  const handleFindPassword = () => {
    if (userId === 'testUser') {
      setFoundPassword('testPassword123');  // 예시 비밀번호
    } else {
      setFoundPassword('비밀번호를 찾을 수 없습니다.');
    }
  };

  const handleConfirm = () => {
    onOk({ userId, userName, userPhone });
  };

  const handleModalClose = () => {
    // 모달 닫을 때 상태 초기화
    setUserId('');
    setUserName('');
    setUserPhone('');
    setFoundPassword(null);
    onCancel();
  };

  return (
    <Modal
      title="비밀번호 찾기"
      open={isOpen}
      onCancel={handleModalClose}  // 모달이 닫힐 때 상태 초기화
      footer={null}
      maskClosable={false}
    >
      <div className="modal-form-group" style={{ marginTop: '20px' }}>
        <label className="modal_label">ID</label>
        <Input
          placeholder="아이디를 입력하세요"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      <div className="modal-form-group">
        <label className="modal_label">이름</label>
        <Input
          placeholder="이름을 입력하세요"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="modal-form-group">
        <label className="modal_label">전화번호</label>
        <Input
          placeholder="010-1234-5678"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
      </div>

      {/* 비밀번호 출력 */}
      {foundPassword !== null && (
        <div className="found-password">
          <p><span style={{fontWeight:'800'}}>해당 ID의 비밀번호</span> <br/> <span style={{opacity:'0.8'}}>{foundPassword}</span></p>
        </div>
      )}

      <section className="custom-modal-footer">
        <div className="ok-button" onClick={handleFindPassword} style={{ cursor: 'pointer' }}>
          찾기
        </div>
        <div className="cancel-button" onClick={handleModalClose} style={{ cursor: 'pointer' }}>
          취소
        </div>
      </section>
    </Modal>
  );
};

export default PasswordModal;
