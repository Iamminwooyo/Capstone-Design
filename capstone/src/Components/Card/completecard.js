import './card.css';
import React, { useState } from 'react';
import { Switch } from 'antd';
import Modal from '../Modal/modal.js';
import { MdOutlineDelete } from "react-icons/md";

const CompleteCard = ({ text, startTime, endTime, isCompleted, completedDate }) => {
  const [isChecked, setIsChecked] = useState(isCompleted); 
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [pendingChecked, setPendingChecked] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
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


  return (
    <aside className='todo_card'>
      <section className='card_header'>
        <p className='card_text'>{text}</p>
        <MdOutlineDelete 
          style={{fontSize:'20px', marginRight:'5px', cursor: 'pointer'}}
          onClick={handleDeleteClick}
        />
      </section>
      <hr />
      <section className='card_footer'>
        <div style={{display:'flex', gap:'10px'}}>
            <p className='card_time'>{completedDate ? `${completedDate}` : null}</p>
            <p className='card_time'>{`${startFormatted} ~ ${endFormatted}`}</p>
        </div>
        <Switch checked={isChecked} onChange={onSwitchChange} />
      </section>

      <Modal
        isOpen={isDeleteModalOpen}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        title="할 일 삭제"
      >
        <p>해당 할 일을 삭제하시겠습니까?</p>
      </Modal>
      
      <Modal
        isOpen={isConfirmModalOpen}
        onOk={handleConfirmOk}
        onCancel={handleConfirmCancel}
        title="완료 취소"
      >
        <p>해당 할 일 완료를 취소하시겠습니까?</p>
      </Modal>
    </aside>
  );
};

export default CompleteCard;
