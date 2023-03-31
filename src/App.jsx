import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Spinner from 'react-bootstrap/Spinner';


function App() {
  const [jogos, setJogos] = useState(() => {
    const jogosLocalStorage = localStorage.getItem('jogos');
    return jogosLocalStorage ? JSON.parse(jogosLocalStorage) : [];
  });
  const [novoJogo, setNovoJogo] = useState("");
  const [apagaJogo, setRemoveJogo] = useState("");
  const [jogoSorteado, setJogoSorteado] = useState(null);
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [mostrarSpinner, setMostrarSpinner] = useState(false);

  useEffect(() => {
    localStorage.setItem('jogos', JSON.stringify(jogos));
  }, [jogos]);

  function adicionarJogo() {
    if (novoJogo) {
      setJogos([...jogos, novoJogo]);
      setNovoJogo("");
    }
  }

  function removerJogo() {
    if (jogos.includes(apagaJogo)) {
      setJogos(jogos.filter((item) => item !== apagaJogo));
    }
  }

  function sortearJogo() {
    if (jogos.length < 1) {
      alert("Não há jogos para mostrar!");
    } else {
      const jogoEscolhido = jogos[Math.floor(Math.random() * jogos.length)];
      setMostrarMensagem(false);
      setJogoSorteado(jogoEscolhido);
      setMostrarSpinner(true);
      setTimeout(() => {
        setMostrarMensagem(true);
        setMostrarSpinner(false);
      }, 2000);
    }
  }

  return (
    <>
      <div className={styles.topTittle}>
        <h1>SORTEADOR DE JOGOS</h1>
      </div>
      <Container>
        <Row>
          <Col lg={3} xs={7}>
            <Form.Control
              type="text"
              placeholder="Digite o nome do jogo"
              value={novoJogo}
              onChange={(e) => setNovoJogo(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="primary" onClick={adicionarJogo}>
              Adicionar Jogo
            </Button>
          </Col>
          <Col lg={3} xs={7}>
            <Form.Control
              type="text"
              placeholder="Digite o nome do jogo"
              value={apagaJogo}
              onChange={(e) => setRemoveJogo(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="danger" onClick={removerJogo}>
              Remover Jogo
            </Button>
          </Col>
          <Col>
            <Button variant="success" onClick={sortearJogo}>
              Sortear
            </Button>
          </Col>
        </Row>
        <h3 className={styles.title}>Lista dos Jogos</h3>
        <ul className={styles.lista}>
          {jogos.map((jogo) => (
            <li key={jogo}>{jogo}</li>
          ))}
        </ul>

        {mostrarSpinner && (
          <div className={styles.Centralizar}>
            <Spinner animation="grow" />
          </div>
        )}
        {mostrarMensagem && (
          <div className={styles.Centralizar}>
            <p>
              O jogo sorteado foi: <b>{jogoSorteado}</b>
            </p>
          </div>
        )}
      </Container>
    </>
  );
}


export default App;