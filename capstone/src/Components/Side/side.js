import './side.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectedMenuAtom } from '../../Recoil/Atoms/menuatom.js';
import AnalogClock from '../Analogclock/analogclock.js';
import Calendar from '../Calendar/calendar.js';
import Modal from '../Modal/modal.js';
import { IoList } from 'react-icons/io5';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IoTrashOutline } from 'react-icons/io5';
import { IoLogOutOutline } from 'react-icons/io5';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { IoArrowBackOutline } from 'react-icons/io5';

const Side = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedMenu, setSelectedMenu] = useRecoilState(selectedMenuAtom);
    const [seconds, setSeconds] = useState(currentTime.getSeconds());
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                const nextSeconds = prevSeconds + 1;

                if (nextSeconds === 60) {
                    setCurrentTime(new Date());
                    return 0; 
                }

                return nextSeconds;
            });
        }, 1000); 

        return () => clearInterval(interval);
    }, []);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    const formatTime = (date) => {
        const hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes} ${period}`;
    };

    const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const dayOfWeek = daysOfWeek[currentTime.getDay()];
    
    const goToPreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
      };
      
      const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
      };

    const navigate = useNavigate();

    const showModal = () => {
        setIsModalOpen(true);
      };
      
      const handleLogout = () => {
        setIsModalOpen(false);
        // TODO: 로그아웃 로직 구현 (예: 토큰 삭제, recoil 초기화 등)
        navigate('/'); // 로그인 페이지로 이동
      };
      
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    return (
        <aside className='side_background'>
           <section className='side_menu_background'>
            <img src="/images/pin.webp" alt="Pushpin" className="sidepin-img" />
            <section style={{ margin: '30px 30px' }}>
                <h2 className='side_title'>메뉴</h2>
                <ul style={{ listStyle: 'none', padding: 0, marginLeft: '5px' }}>
                    <li
                    onClick={() => {
                        setSelectedMenu('todolist');
                        navigate('/todolist');
                    }}
                    className={selectedMenu === 'todolist' ? 'selected' : ''}
                    >
                        <div className='side_menu_layout'>
                            <IoList className='side_menu_icon' />
                            <span>할 일 목록</span>
                        </div>
                    </li>
                    <li
                    onClick={() => {
                        setSelectedMenu('completedlist');
                        navigate('/completedlist');
                    }}
                    className={selectedMenu === 'completedlist' ? 'selected' : ''}
                    >
                    <div className='side_menu_layout'>
                        <IoCheckmarkCircleOutline className='side_menu_icon' />
                        <span>완료 목록</span>
                    </div>
                    </li>

                    <li
                    onClick={() => {
                        setSelectedMenu('deletedlist');
                        navigate('/deletedlist');
                    }}
                    className={selectedMenu === 'deletedlist' ? 'selected' : ''}
                    >
                    <div className='side_menu_layout'>
                        <IoTrashOutline className='side_menu_icon' />
                        <span>삭제 목록</span>
                    </div>
                    </li>
                </ul>
            </section>

            <section style={{ margin: '30px 30px' }}>
                <h2 className='side_title'>계정 관리</h2>
                <li style={{ listStyle: 'none', marginLeft: '5px' }} onClick={showModal}>
                    <div className='side_menu_layout'>
                        <IoLogOutOutline className='side_menu_icon' />
                        <span>로그아웃</span>
                    </div>
                </li>
            </section>
           </section> 

           <section className='side_time_background'>
                <img src="/images/pin.webp" alt="Pushpin" className="sidepin2-img" /> 
                <section className='side_clock_layout'>
                    <AnalogClock />
                    <div className='side_clock_date_layout'>
                        <p className='side_clock_time'>{formatTime(currentTime)}</p>
                        <p className='side_clock_date'>
                            {formatDate(currentTime).split('/').join(' / ')} {dayOfWeek}
                        </p>
                    </div>
                </section>

                <section>
                    <div className='side_calendar_layout'>
                        <IoArrowBackOutline onClick={goToPreviousMonth} style={{ cursor: 'pointer' }} />
                        <h2 className='side_title' style={{ userSelect: 'none' }}>
                            {formatDate(currentMonth).slice(0, 7).replace('/', ' / ')}
                        </h2>
                        <IoArrowForwardOutline onClick={goToNextMonth} style={{ cursor: 'pointer' }} />
                    </div>
                    <Calendar currentMonth={currentMonth} />
                </section>
           </section>
            <Modal
            isOpen={isModalOpen}
            onOk={handleLogout}
            onCancel={handleCancel}
            title="로그아웃 확인"
            >
            로그아웃 하시겠습니까?
            </Modal>
        </aside>
    );
};

export default Side;
