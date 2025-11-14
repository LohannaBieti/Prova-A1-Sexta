import { useEffect, useState } from "react";
import { Tarefa } from "../../../models/Tarefa";

function ListarTarefasConcluidas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])

  useEffect(() => {
    fetch("http://localhost:5000/api/tarefas/concluidas")
      .then((resposta) => {
        return resposta.json();
      })
      .then((tarefas) => {
        setTarefas(tarefas);

      });
  });

  return (
    <div className="container">
      <h1>Lista Tarefas Concluídas</h1>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Titulo</td>
            <td>Descricao</td>
            <td>Status</td>
            <td>CriadoEm</td>
            
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.tarefaId}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.status}</td>
              <td>{tarefa.criadoEm}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefasConcluidas;