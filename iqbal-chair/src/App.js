import './App.css';
// import Header from './Components/Layouts/Header';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Home from './Components/Layouts/Home';
import OurTeam from './Components/Layouts/OurTeam';
import About from './Components/Layouts/About';
import Contact from './Components/Layouts/Contact';
import AllEvents from './Components/Events/AllEvents';
import FaqList from './Components/Layouts/FaqsList';
import Testimonial from './Components/Layouts/Testimonial';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/our-team' element={<OurTeam /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/all-events' element={<AllEvents /> } />
        <Route path='/testimonials' element={<Testimonial /> } />
        <Route path='/iqbal-chair/frequently-asked-question' element={<FaqList /> } />
      </Routes>
     
    </Router>
  );
}

export default App;
