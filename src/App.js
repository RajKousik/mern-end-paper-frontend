// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateMovieComponent from './components/CreateMovieComponent/CreateMovieComponent';
import MovieDisplayComponent from './components/MovieDisplayComponent/MovieDisplayComponent';


function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <div className='inner'>
          <Router>
            <Routes>
              <Route exact path = '/admin/new' element={<CreateMovieComponent/>} />
              <Route exact path = '/movie' element={<MovieDisplayComponent/>} />
            </Routes>  
          </Router>  
        </div>
      </div>
    </div>
  );
}

export default App;
