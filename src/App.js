import 'react-alice-carousel/lib/alice-carousel.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.scss"
import "./Byron.css"
import Byron from './Byron.js';
import Ozymandias from './Ozymandias';

export default function App() {
  
  return (
<BrowserRouter>

    <Routes>
      <Route path='/OzymandiasCycle' element={<Ozymandias />} />
      <Route path='/OzymandiasCycle/Byron' element={<Byron/>} />

    </Routes>
    </BrowserRouter>
  );
}
