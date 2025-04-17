import './modal.css';
import React, { useState, useEffect } from 'react';
import { Modal, Select, Input, Radio } from 'antd';

const { Option } = Select;

const EditModal = ({ isOpen, onOk, onCancel, title, text, startTime, endTime }) => {
  const parseTime = (time) => {
    const hours24 = parseInt(time.substring(0, 2), 10);
    const minutes = time.substring(2, 4);
    const meridiem = hours24 >= 12 ? 'PM' : 'AM';
    const hour12 = (hours24 % 12 || 12).toString();
    return { meridiem, hour: hour12, minute: minutes };
  };

  const to24HourFormat = (meridiem, hour, minute) => {
    let h = parseInt(hour, 10);
    if (meridiem === 'PM' && h !== 12) h += 12;
    if (meridiem === 'AM' && h === 12) h = 0;
    return `${String(h).padStart(2, '0')}${minute}`;
  };

  const [newText, setNewText] = useState('');
  const [startMeridiem, setStartMeridiem] = useState('AM');
  const [startHour, setStartHour] = useState('12');
  const [startMinute, setStartMinute] = useState('00');
  const [endMeridiem, setEndMeridiem] = useState('AM');
  const [endHour, setEndHour] = useState('12');
  const [endMinute, setEndMinute] = useState('00');

  useEffect(() => {
    if (isOpen) {
      const startParsed = parseTime(startTime);
      const endParsed = parseTime(endTime);

      setNewText(text);
      setStartMeridiem(startParsed.meridiem);
      setStartHour(startParsed.hour);
      setStartMinute(startParsed.minute);
      setEndMeridiem(endParsed.meridiem);
      setEndHour(endParsed.hour);
      setEndMinute(endParsed.minute);
    }
  }, [isOpen, text, startTime, endTime]);

  const handleConfirm = () => {
    if (newText.trim() === '') return;

    const startFormatted = to24HourFormat(startMeridiem, startHour, startMinute);
    const endFormatted = to24HourFormat(endMeridiem, endHour, endMinute);

    onOk({
      text: newText,
      startTime: startFormatted,
      endTime: endFormatted,
    });

    setNewText('');
  };

  const hourOptions = Array.from({ length: 12 }, (_, i) => (
    <Option key={i + 1} value={(i + 1).toString()}>{i + 1}</Option>
  ));

  const minuteOptions = Array.from({ length: 60 }, (_, i) => (
    <Option key={i} value={i.toString().padStart(2, '0')}>{i.toString().padStart(2, '0')}</Option>
  ));

  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      maskClosable={false}
    >
      <div className="modal-form-group">
        <label className='modal_label' style={{marginTop:'20px'}}>할 일 내용</label>
        <Input value={newText} onChange={(e) => setNewText(e.target.value)} />
      </div>

      <div className="modal-form-group">
        <label className='modal_label'>시작 시간</label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Radio.Group
            value={startMeridiem}
            onChange={(e) => setStartMeridiem(e.target.value)}
            optionType="button"
            buttonStyle="solid"
            style={{ marginRight: 8, display: 'flex' }}
          >
            <Radio.Button value="AM" style={{ fontSize: '12px', padding: '0 10px' }}>AM</Radio.Button>
            <Radio.Button value="PM" style={{ fontSize: '12px', padding: '0 10px' }}>PM</Radio.Button>
          </Radio.Group>
          <Select value={startHour} onChange={setStartHour} style={{ width: 80 }}>
            {hourOptions}
          </Select>
          <Select value={startMinute} onChange={setStartMinute} style={{ width: 80 }}>
            {minuteOptions}
          </Select>
        </div>
      </div>

      <div className="modal-form-group">
        <label className='modal_label'>종료 시간</label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Radio.Group
            value={endMeridiem}
            onChange={(e) => setEndMeridiem(e.target.value)}
            optionType="button"
            buttonStyle="solid"
            style={{ marginRight: 8, display: 'flex' }}
          >
            <Radio.Button value="AM" style={{ fontSize: '12px', padding: '0 10px' }}>AM</Radio.Button>
            <Radio.Button value="PM" style={{ fontSize: '12px', padding: '0 10px' }}>PM</Radio.Button>
          </Radio.Group>
          <Select value={endHour} onChange={setEndHour} style={{ width: 80 }}>
            {hourOptions}
          </Select>
          <Select value={endMinute} onChange={setEndMinute} style={{ width: 80 }}>
            {minuteOptions}
          </Select>
        </div>
      </div>

      <section className="custom-modal-footer">
        <div
          className="ok-button"
          onClick={handleConfirm}
          style={{ cursor: 'pointer', display: 'inline-block' }}
        >
          확인
        </div>
        <div
          className="cancel-button"
          onClick={onCancel}
          style={{ cursor: 'pointer', display: 'inline-block' }}
        >
          취소
        </div>
      </section>
    </Modal>
  );
};

export default EditModal;
