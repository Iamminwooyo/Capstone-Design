import './deletelist.css';
import DeleteCard from '../../Components/Card/deletecard.js';
import listData from '../../Data/List/listdata.js';
import { useState } from 'react';
import Searchbar from '../../Components/Search/search.js';

const ITEMS_PER_PAGE = 5;

const Deletelist = () => {
  const [tasks] = useState(listData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  const filteredTasks = tasks.filter(task => task.isDeleted && (task.text || '').toLowerCase().includes(searchText.toLowerCase()) );

  const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTasks = filteredTasks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <aside>
      <section>
        <Searchbar onChange={(text) => { setSearchText(text); setCurrentPage(1); }} />
      </section>
      <section className="delete_main_background">
          <div className="todo_container">
            <div className="task_group">
              <div className='todo_header'>
                <h2>Delete List</h2>
              </div>

              <div className="Delete_list" >
                {currentTasks.length === 0 ? (
                  <p>삭제된 목록이 없습니다.</p>
                ) : (
                  currentTasks.map(task => (
                    <DeleteCard key={task.id} {...task} />
                  ))
                )}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    &lt;
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      className={currentPage === index + 1 ? 'active' : ''}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    &gt;
                  </button>
                </div>
              )}
            </div>
          </div>
      </section>
    </aside>
    
  );
};

export default Deletelist;
