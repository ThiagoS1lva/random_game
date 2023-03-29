import React, { useState, useEffect } from 'react';

function App() {
  const [jogos, setJogos] = useState([]);

  function adicionarJogo() {
    const jogo = prompt("Digite o nome do jogo que deseja adicionar:");
    if (jogo) {
      setJogos([...jogos, jogo]);
    }
  }

  function removerJogo() {
    const jogo = prompt("Digite o nome do jogo que deseja remover:");
    if (jogos.includes(jogo)) {
      setJogos(jogos.filter((item) => item !== jogo));
    }
  }

  function rodarJogo() {
    if (jogos.length < 1) {
      alert("Não há jogos para mostrar!");
    } else {
      alert("tantantantannn...");
      const jogoEscolhido = jogos[Math.floor(Math.random() * jogos.length)];
      alert(`O jogo escolhido foi ${jogoEscolhido}`);
    }
  }


  return (
    <div>
      <h1>Minha Lista de Jogos</h1>
      <button onClick={adicionarJogo}>Adicionar Jogo</button>
      <button onClick={removerJogo}>Remover Jogo</button>
      <button onClick={rodarJogo}>Rodar</button>
      <ul>
        {jogos.map((jogo) => (
          <li key={jogo}>{jogo}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;