import './App.css';
import Container from './Components/Container/Container';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import Comic from './Components/Comic/Comic';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes> {/* EL COMPONENTE ROUTES MUESTRA LOS COMPONENTES SI SE NECEITAN O NO */}
          <Route path='/' element={<Container/>}/>    {/*  PATH MUESTRA LA RUTA Y ELEMENT EL COMPONENTE QUE TIENE QUE MOSTRAR EN ESA RUTA*/}
          <Route path='/comics/:personajeId' element={<Comic/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
