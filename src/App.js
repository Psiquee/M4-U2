import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';


import ContactoPage from './pages/ContactoPage';
import GaleriaPage from './pages/GaleriaPage';
import HomePage from './pages/HomePage';
import NovedadesPage from './pages/NovedadesPage';
import HistoriaPage from './pages/HistoriaPage';
import VideosPage from './pages/VideosPage';

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Nav />
        <Routes>
          
          <Route path='/' element={<HomePage/>} />
          <Route path='historia' element={<HistoriaPage/>} />
          <Route path='videos' element={VideosPage}></Route>
          <Route path='galeria' element={GaleriaPage} ></Route>
          <Route path='novedades' element={<NovedadesPage/>} />
          <Route path='contacto' element={<ContactoPage/>} />
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
