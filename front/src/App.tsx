import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import ListarTarefas from "./components/pages/Tarefas/ListarTarefas";
import ListarTarefasConcluidas from "./components/pages/Tarefas/ListarTarefasConcluidas";
import ListarTarefasNaoConcluidas from "./components/pages/Tarefas/ListarTarefasNaoConcluidas";
import CadastrarTarefa from "./components/pages/Tarefas/CadastrarTarefa";

//1 - Um componente SEMPRE deve começar com a primeira letra
//maiuscula
//2 - Todo componente DEVE ser uma função do JS
//3 - Todo deve retornar apenas UM elemento HTML
function App() {
  return (
<div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="pages/tarefa/listar">Listar Tarefas</Link>
            </li>
            <li>
              <Link to="pages/tarefa/concluidas">Listar Tarefas Concluidas</Link>
            </li>
            <li>
              <Link to="pages/tarefa/naoconcluidas">Listar Tarefas Não Concluidas</Link>
            </li>
            <li>
              <Link to="pages/tarefa/cadastrar">Cadastrar Tarefas</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="pages/tarefa/listar" element={<ListarTarefas />} />
          <Route path="pages/tarefa/concluidas" element={<ListarTarefasConcluidas />} />
          <Route path="pages/tarefa/naoconcluidas" element={<ListarTarefasNaoConcluidas />} />
          <Route path="pages/tarefa/cadastrar" element={<CadastrarTarefa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado
export default App;