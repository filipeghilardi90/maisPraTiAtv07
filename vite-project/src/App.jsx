import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Contador from './components/Contador.jsx';
import AlteracaoCorFundo from './components/AlteracaoCorFundo.jsx';
import ListaTarefas from './components/ListaTarefas.jsx';
import Temporizador from './components/Temporizador.jsx';
import FiltroLista from './components/FiltroLista.jsx';
import FormularioRegistro from './components/FormularioRegistro.jsx';
import RequisicaoDados from './components/RequisicaoDados.jsx';
import GaleriaImagens from './components/GaleriaImagens.jsx';
import TimerComAlerta from './components/TimerComAlerta.jsx';
import TabsNavegaveis from './components/TabsNavegaveis.jsx';
import './App.css'; // Manter se necessário

const App = () => {
  return (
    <div>
      <h1>Atividades de Codificação com React</h1>
      <nav>
        <ul>
          <li><Link to="/contador">Contador Simples</Link></li>
          <li><Link to="/alteracao-cor-fundo">Alteração de Cor de Fundo</Link></li>
          <li><Link to="/lista-tarefas">Lista de Tarefas</Link></li>
          <li><Link to="/temporizador">Temporizador</Link></li>
          <li><Link to="/filtro-lista">Filtro de Lista</Link></li>
          <li><Link to="/formulario-registro">Formulário de Registro</Link></li>
          <li><Link to="/requisicao-dados">Requisição de Dados</Link></li>
          <li><Link to="/galeria-imagens">Galeria de Imagens</Link></li>
          <li><Link to="/timer-com-alerta">Timer com Alerta</Link></li>
          <li><Link to="/tabs-navegaveis">Tabs Navegáveis</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/contador" element={<Contador />} />
        <Route path="/alteracao-cor-fundo" element={<AlteracaoCorFundo />} />
        <Route path="/lista-tarefas" element={<ListaTarefas />} />
        <Route path="/temporizador" element={<Temporizador />} />
        <Route path="/filtro-lista" element={<FiltroLista />} />
        <Route path="/formulario-registro" element={<FormularioRegistro />} />
        <Route path="/requisicao-dados" element={<RequisicaoDados />} />
        <Route path="/galeria-imagens" element={<GaleriaImagens />} />
        <Route path="/timer-com-alerta" element={<TimerComAlerta />} />
        <Route path="/tabs-navegaveis" element={<TabsNavegaveis />} />
      </Routes>
    </div>
  );
};

export default App;



// import React from 'react';
// import Contador from './components/Contador.jsx';
// import AlteracaoCorFundo from './components/AlteracaoCorFundo.jsx';
// import ListaTarefas from './components/ListaTarefas.jsx';
// import Temporizador from './components/Temporizador.jsx';
// import listfilter from './components/listfilter.jsx';
// import FormularioRegistro from './components/FormularioRegistro.jsx';
// import RequisicaoDados from './components/RequisicaoDados.jsx';
// import GaleriaImagens from './components/GaleriaImagens.jsx';
// import TimerComAlerta from './components/TimerComAlerta.jsx';
// import TabsNavegaveis from './components/TabsNavegaveis.jsx';
// import './App.css'; // Manter se necessário

// const App = () => {
//   return (
//     <div>
//       <h1>Atividades de Codificação com React</h1>
//       <Contador />
//       <AlteracaoCorFundo />
//       <ListaTarefas />
//       <Temporizador />
//       <listfilter />
//       <FormularioRegistro />
//       <RequisicaoDados />
//       <GaleriaImagens />
//       <TimerComAlerta />
//       <TabsNavegaveis />
//     </div>
//   );
// };

// export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
