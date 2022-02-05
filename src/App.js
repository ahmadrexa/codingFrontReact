import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactUs from './pages/contactUs';
import Home from './pages/home';
import Works from './pages/works';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/works" element={<Works/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
