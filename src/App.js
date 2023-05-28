import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './componets/Layout/Layout';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Blogpage from './pages/Blogpage/Blogpage';
import Counter from './pages/Counter/Counter';
import Homepage from './pages/Homepage/HomePage';
import Modal from './pages/Modalpage/Modalpage';
import NotFoundpage from './pages/NotFoundpage/NotFoundpage';
import Quiz from './pages/Quiz/Quiz';
import UsersPage from './pages/UsersPage/UsersPage';


function App() {


  return (
    <div className="App">
         <Routes>
                <Route path="/" element={<Layout />}>
                    <Route  index element={<Homepage />} />
                    <Route  path='/home' element={<Homepage />} />
                    <Route path="/blog" element={<Blogpage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/modal" element={<Modal />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="*" element={<NotFoundpage />} />
                </Route>
            </Routes> 
    </div>
  );
}

export default App;
