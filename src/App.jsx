import { Routes, Route } from 'react-router-dom';

// Importe os componentes compartilhados
import Header from './components/Header';
import Footer from './components/Footer';

// Importe os componentes das páginas
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Contato from './pages/Contato';

import './App.css';

function App() {
  return (
    <>
      {/* O Header fica aqui fora para aparecer em TODAS as páginas */}
      <Header />

      {/* O <main> é uma boa prática para o conteúdo principal */}
      <main>
        {/* O Routes é o responsável por gerenciar qual página será exibida */}
        <Routes>
          {/* Cada <Route> define uma URL (path) e o componente a ser mostrado */}
          <Route path="/" element={<Home />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/contato" element={<Contato />} />

          {/* Opcional: Uma rota "catch-all" para páginas não encontradas */}
          <Route path="*" element={<h1>Página Não Encontrada</h1>} />
        </Routes>
      </main>

      {/* O Footer também fica aqui fora para aparecer em TODAS as páginas */}
      <Footer />
    </>
  );
}

export default App;