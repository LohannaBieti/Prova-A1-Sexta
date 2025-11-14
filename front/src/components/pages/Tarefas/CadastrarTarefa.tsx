import { useEffect, useState } from "react";
import axios from "axios";
import { Tarefa } from "../../../models/Tarefa";

function CadastrarTarefa() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoriaId, setCategoriaId] = useState("39be53a2-fc09-4b6a-bafa-18a6a23c8f6e");

  useEffect(() => {
    fetch("http://localhost:5000/api/categoria/listar")
      .then((resposta) => {
        return resposta.json();
      });
  });

  function enviarTarefa(e: any) {
    e.preventDefault();

    const tarefa: Tarefa = {
        status : "Não iniciada",
        titulo : titulo,
        descricao : descricao,
    };

    fetch("http://localhost:5000/api/tarefas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    })
      .then((resposta) => {
        return resposta.json();
      })
      .then((produto) => {
        console.log("Tarefa cadastrado", tarefa);
      });
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={enviarTarefa}>
        <div>
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            id="Titulo"
            name="Titulo"
            required
            onChange={(e: any) => setTitulo(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            onChange={(e: any) => setDescricao(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar Tarefa</button>
      </form>
    </div>
  );
}

export default CadastrarTarefa;