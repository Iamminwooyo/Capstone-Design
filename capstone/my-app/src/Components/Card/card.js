import './card.css';
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Dropdown, Space, Switch } from 'antd';
import Modal from '../Modal/modal.js';
import EditModal from '../Modal/editmodal.js';

const Card = ({ text, startTime, endTime, isCompleted, onEdit }) => {
  const [isChecked, setIsChecked] = useState(isCompleted); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [pendingChecked, setPendingChecked] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('edit');

  const handleMenuClick = (e) => {
    if (e.key === 'edit') {
      setModalMode('edit');
      setIsFormModalOpen(true); 
    } else if (e.key === 'delete') {
      setIsModalOpen(true);
    }
  };

  const handleModalOk = () => {
    console.log("삭제 확인 버튼 클릭");
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    console.log("삭제 취소 버튼 클릭");
    setIsModalOpen(false);
  };

  const onSwitchChange = (checked) => {
    setPendingChecked(checked);
    setIsConfirmModalOpen(true);
  };

  const handleConfirmOk = () => {
    setIsChecked(pendingChecked);
    setIsConfirmModalOpen(false);
  };

  const handleConfirmCancel = () => {
    setIsConfirmModalOpen(false);
  };

  const formatTime = (time) => {
    const hours = time.substring(0, 2);
    const minutes = time.substring(2, 4);
    const period = parseInt(hours, 10) >= 12 ? 'PM' : 'AM';
    const formattedHours = (parseInt(hours, 10) % 12 || 12);
    const formattedMinutes = minutes.padStart(2, '0');

    return `${period} ${formattedHours}:${formattedMinutes}`;
  };

  const startFormatted = formatTime(startTime);
  const endFormatted = formatTime(endTime);

  const items = [
    { key: 'edit', label: '수정' },
    { key: 'delete', label: '삭제' },
  ];

  return (
    <aside className='todo_card'>
      <section className='card_header'>
        <p className='card_text'>{text}</p>
        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          trigger={['click']}
          placement='bottom'
        >
          <Space style={{ cursor: 'pointer', marginRight:'5px' }}>
            <IoMenu style={{ fontSize: '20px' }} />
          </Space>
        </Dropdown>
      </section>
      <hr />
      <section className='card_footer'>
        <p className='card_time'>{`${startFormatted} ~ ${endFormatted}`}</p>
        <Switch checked={isChecked} onChange={onSwitchChange} />
      </section>

      <Modal
        isOpen={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        title="할 일 삭제"
      >
        <p>해당 할 일을 삭제하시겠습니까?</p>
      </Modal>

      <Modal
        isOpen={isConfirmModalOpen}
        onOk={handleConfirmOk}
        onCancel={handleConfirmCancel}
        title="할 일 완료"
      >
        <p>해당 할 일을 완료하셨습니까?</p>
      </Modal>

      <EditModal
        isOpen={isFormModalOpen}
        onOk={onEdit}
        onCancel={() => setIsFormModalOpen(false)}
        title="할 일 수정"
        text={text}
        startTime={startTime}
        endTime={endTime}
      />
    </aside>
  );
};

export default Card;
