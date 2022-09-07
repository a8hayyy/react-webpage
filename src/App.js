import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js'
import Home from './pages/Home'
import News from './pages/News';
import Movies from './pages/Movies';
import SignUp from './pages/SignUp';

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} exact/>
                    <Route path='/news' element={<News />} />
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/sign-up' element={<SignUp />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;