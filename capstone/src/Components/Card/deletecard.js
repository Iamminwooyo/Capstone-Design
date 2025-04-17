import './card.css';
import React, { useState } from 'react';
import { TbArrowBackUp } from "react-icons/tb";
import Modal from '../Modal/modal.js';

const DeleteCard = ({ text, startTime, endTime, deletedDate }) => {
  const [isRestoreModalOpen, setIsRestoreModalOpen] = useState(false);

  const handleRestoreClick = () => {
    setIsRestoreModalOpen(true);
  };

  const handleRestoreOk = () => {
    setIsRestoreModalOpen(false);
  };

  const handleRestoreCancel = () => {
    setIsRestoreModalOpen(false);
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

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const formattedDeletedDate = deletedDate ? formatDate(deletedDate) : null;

  return (
    <aside className='todo_card'>
      <section className='card_header'>
        <p className='card_text'>{text}</p>
        <TbArrowBackUp 
          style={{fontSize:'20px', marginRight:'5px', cursor: 'pointer'}}
          onClick={handleRestoreClick}
        />
      </section>
      <hr />
      <section className='card_footer'>
        <div style={{display:'flex', gap:'10px'}}>
          <p className='card_time'> {formattedDeletedDate}</p>
          <p className='card_time'> {`${startFormatted} ~ ${endFormatted}`}</p>
        </div>
      </section>

      <Modal
        isOpen={isRestoreModalOpen}
        onOk={handleRestoreOk}
        onCancel={handleRestoreCancel}
        title="삭제 취소"
      >
        <p>해당 할 일 삭제를 취소하시겠습니까?</p>
      </Modal>

    </aside>
  );
};

export default DeleteCard;
