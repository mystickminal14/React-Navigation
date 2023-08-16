import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Services from "./Services.jsx";
import Error from "./Error";
import User from "./User";
import Globalnav from "./Globalnav";
function App() {
  return (
    <>
      
      <Routes>
        <Route  path="/" element={<Globalnav />}>
          <Route index  element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/User/:name/:glibe" element={<User/>}/>
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
