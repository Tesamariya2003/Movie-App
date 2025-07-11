import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie';
import SearchMovie from './components/SearchMovie';
import ViewAllMovies from './components/ViewAllMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddMovie/>}/>
    <Route path="/Search" element={<SearchMovie/>}/>
    <Route path="/ViewAll" element={<ViewAllMovies/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
