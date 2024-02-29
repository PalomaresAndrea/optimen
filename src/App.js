import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Profile  from './components/Profile';
import NotFound  from './components/NotFound'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
