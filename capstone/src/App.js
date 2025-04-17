import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from './Page/Login/loginpage.js';
import JoinPage from './Page/Join/joinpage.js';
import TodoListPage from './Page/Todolist/todolistpage.js';
import CompletedListpage from './Page/Completelist/completelistpage.js';
import DeletedListPage from './Page/Deletelist/deletelistpage.js';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/todolist" element={<TodoListPage />} />
            <Route path="/completedlist" element={<CompletedListpage />} />
            <Route path="/deletedlist" element={<DeletedListPage />} />
          </Routes>
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;
