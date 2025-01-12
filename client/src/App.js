import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm'; 
import ProjectList from './components/ProjectList'; 
import TaskList from './components/TaskList'; 

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Routes>
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route
                        path="/projects"
                        element={<ProjectList />}
                    />
                    <Route
                        path="/tasks/:projectId/*"
                        element={<TaskList />}
                    />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
