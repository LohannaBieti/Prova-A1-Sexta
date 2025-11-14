import { useEffect, useState } from "react";
import { Tarefa } from "../../../models/Tarefa";
import { Link } from "react-router-dom";

function ListarTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])

  useEffect(() => {
    fetch("http://localhost:5000/api/tarefas/listar")
      .then((resposta) => {
        return resposta.json();
      })
      .then((tarefas) => {
        setTarefas(tarefas);
      });
  });


  function alterarTarefa(id : string){
    fetch(`http://localhost:5000/api/tarefas/alterar/${id}`, {
    method: "PUT",
    })
      .then((resposta) => {
        return resposta.json();
      })
      .then((tarefa) => {
        console.log(tarefa);
      });
  }
  return (
    <div className="container">
      <h1>Lista Todas as Tarefas</h1>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Titulo</td>
            <td>Descricao</td>
            <td>Status</td>
            <td>CriadoEm</td>
            <td>categoria</td>
            <td>Alterar Status</td>
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
             
              <td>
                <button onClick={() => alterarTarefa(tarefa.tarefaId!)}>
                  Alterar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefas;