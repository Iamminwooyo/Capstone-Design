import './todolist.css';
import Searchbar from '../../Components/Search/search.js';
import Card from '../../Components/Card/card.js';
import listData from '../../Data/List/listdata.js';
import { FaPlus } from "react-icons/fa";
import FormModal from '../../Components/Modal/formmodal.js';
import { useState } from 'react';
import { useRecoilValue } from 'recoil'; 
import { selectedDateState } from '../../Recoil/Atoms/dateatom.js'; 

const ITEMS_PER_PAGE = 3;

const Todolist = () => {
  const [tasks, setTasks] = useState(listData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (newTask) => {
    const nextId = tasks.length + 1;
    const newItem = {
      id: nextId,
      ...newTask,
      image: '/images/default.png',
    };
    setTasks([...tasks, newItem]);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const selectedDate = useRecoilValue(selectedDateState); 

  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
  const day = String(selectedDate.getDate()).padStart(2, '0');
  
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = dayNames[selectedDate.getDay()];

  const formattedDate = `${year} / ${month} / ${day} (${dayName})`;
  const filterDate = `${year}/${month}/${day}`;

  const filteredTasks = tasks.filter(task =>
    task.date.startsWith(filterDate) &&
    !task.isCompleted &&
    !task.isDeleted &&
    (task.text || '').toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTasks = filteredTasks.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <aside>
      <section className='searchpin_layout'>
        <img src="/images/pin.webp" alt="Pushpin" className="searchpin-img" /> 
        <Searchbar onChange={(text) => { setSearchText(text); setCurrentPage(1); }} />
      </section>
      <section className="main_background">
        <img src="/images/pin.webp" alt="Pushpin" className="mainpin-img" /> 
        <section className="todo_section">
          <div className='todo_img'>
            <h2 style={{color:'#ffffff', fontSize:'40px'}}>{formattedDate}</h2>
          </div>

          <div className="todo_container">
            <div className="task_group">
              <div className='todo_header'>
                <h2>To Do List</h2>
                <div className='todo_plus_button' onClick={showModal}>
                  <FaPlus/>
                </div>
              </div>
              <div className="todo_list">
                {paginatedTasks.length === 0 ? (
                  <p>해당 날짜에 추가된 목록이 없습니다.</p>
                ) : (
                  paginatedTasks.map(task => (
                    <Card key={task.id} {...task} />
                  ))
                )}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                    &lt;
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => goToPage(i + 1)}
                      className={currentPage === i + 1 ? 'active' : ''}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    &gt;
                  </button>
                </div>
              )}
            </div>
          </div>

          <FormModal
            isOpen={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            title="할 일 추가"
          />
        </section>
      </section>
    </aside>
  );
};

export default Todolist;
