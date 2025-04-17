import { Modal, Input, Select, Radio } from 'antd';
import { useState } from 'react';
import './modal.css';

const { Option } = Select;

const { TextArea } = Input;

const hours = Array.from({ length: 12 }, (_, i) => String(i + 1));
const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));

const FormModal = ({ isOpen, onOk, onCancel, title }) => {
  const [newText, setNewText] = useState('');

  const [startMeridiem, setStartMeridiem] = useState('AM');
  const [startHour, setStartHour] = useState(undefined);
  const [startMinute, setStartMinute] = useState(undefined);

  const [endMeridiem, setEndMeridiem] = useState('AM');
  const [endHour, setEndHour] = useState(undefined);
  const [endMinute, setEndMinute] = useState(undefined);

  const handleConfirm = () => {
    if (newText.trim() === '') return;

    const startTime = `${startMeridiem} ${startHour}:${startMinute}`;
    const endTime = `${endMeridiem} ${endHour}:${endMinute}`;

    onOk({
      text: newText,
      startTime,
      endTime,
    });

    setNewText('');
    setStartMeridiem('AM');
    setStartHour(undefined);
    setStartMinute(undefined);
    setEndMeridiem('AM');
    setEndHour(undefined);
    setEndMinute(undefined);
  };

  const handleCancel = () => {
    setNewText('');
    setStartMeridiem('AM');
    setStartHour(undefined);
    setStartMinute(undefined);
    setEndMeridiem('AM');
    setEndHour(undefined);
    setEndMinute(undefined);
    onCancel();
  };

  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
      maskClosable={false}
    >
      <div className="modal-form-group">
        <label className='modal_label' style={{marginTop:'20px'}}>할 일</label>
        <TextArea
          placeholder="내용"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          showCount
          maxLength={50}
          style={{ height: 70, resize: 'none' }}
        />
      </div>

      <div className="modal-form-group">
        <label className='modal_label'>시작 시간</label>
        <div className="time-select-row">
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
            <Select
            value={startHour}
            onChange={setStartHour}
            style={{ width: 80, marginRight: 8 }}
            placeholder="시"
            >
            {hours.map(h => <Option key={h} value={h}>{h}</Option>)}
            </Select>
            <Select
            value={startMinute}
            onChange={setStartMinute}
            style={{ width: 80 }}
            placeholder="분"
            >
            {minutes.map(m => <Option key={m} value={m}>{m}</Option>)}
            </Select>
        </div>
      </div>

      <div className="modal-form-group">
        <label className='modal_label'>종료 시간</label>
        <div className="time-select-row">
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
            <Select
            value={endHour}
            onChange={setEndHour}
            style={{ width: 80, marginRight: 8 }}
            placeholder="시"
            >
            {hours.map(h => <Option key={h} value={h}>{h}</Option>)}
            </Select>
            <Select
            value={endMinute}
            onChange={setEndMinute}
            style={{ width: 80 }}
            placeholder="분"
            >
            {minutes.map(m => <Option key={m} value={m}>{m}</Option>)}
            </Select>
        </div>
      </div>

      <section className="custom-modal-footer">
        <div className="ok-button" onClick={handleConfirm} style={{ cursor: 'pointer' }}>확인</div>
        <div className="cancel-button" onClick={handleCancel} style={{ cursor: 'pointer' }}>취소</div>
      </section>
    </Modal>
  );
};

export default FormModal;
