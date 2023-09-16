import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Detalle from "./routes/Detalle";
import Destacados from "./routes/Destacados";
import Contacto from "./routes/Contacto";
import Home from "./routes/Home";


function App() {
  return (
      <div className="App">
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/destacados" element={<Destacados/>}/>
            <Route path="/detalle/:id" element={<Detalle/>}/>  
            <Route path="/contacto" element={<Contacto/>}/>  
          </Routes>


          <Footer/>
      </div>
  );
}

export default App;
