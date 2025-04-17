import { Modal } from 'antd';
import './modal.css';

const CustomModal = ({ isOpen, onOk, onCancel, title, children }) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      maskClosable={false} // 모달 외부 클릭 시 닫히지 않도록 설정
    >
      {children}
      <section className="custom-modal-footer">
        <div className="ok-button" onClick={onOk} style={{ cursor: 'pointer' }}>확인</div>
        <div className="cancel-button" onClick={onCancel} style={{ cursor: 'pointer' }}>취소</div>
      </section>
    </Modal>
  );
};

export default CustomModal;
