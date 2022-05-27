import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Birds from './pages/Birds/Birds';
import Home from './pages/Home/Home';
import Hunters from './pages/Hunters/Hunters';

// import {} from 'framer-motion/dist/framer-motion';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer/Footer';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}/>
          <Route path="/birds" element={<Birds />}/>
          <Route path="/ocean" element={<Hunters />}/>
        </Routes>
      </AnimatePresence>
     <Footer />
    </div>
  );
}

export default App;
