import { useLocation, Routes, Route } from "react-router-dom";
const location = useLocation();

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/birds" element={<Birds />}/>
        <Route path="/hunters" element={<Hunters />}/>
      </Routes>
  )
}

export default AnimatedRoutes