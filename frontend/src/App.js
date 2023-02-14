import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navigation from './components/shared/Navigation/Navigation'

import './index.css';


function App() {
  return <BrowserRouter>

    <Navigation />
  
    <Routes>
      <Route path = '/' element={<Home />} />
    </Routes>
  
  
  </BrowserRouter>
}

export default App;
