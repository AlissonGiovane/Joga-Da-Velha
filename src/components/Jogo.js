import React, { useState } from "react";
import { calculaVencedor } from "../Auxilio";
import Bordas from "./Bordas";

const Jogo = () => {
  const [historico, setHistorico] = useState([Array(9).fill(null)]);
  const [mudaOpass, setmudaOpass] = useState(0);
  const [xEhProximo, setxEhProximo] = useState(true);
  const vencedor = calculaVencedor(historico[mudaOpass]);
  const xO = xEhProximo ? "X" : "O";

  const Cliques = (i) => {
    const historicoDePontos = historico.slice(0, mudaOpass + 1);
    const atual = historicoDePontos[mudaOpass];
    const quadrados = [...atual];
    // retorno se está ocupado ou ganhou
    if (vencedor || quadrados[i]) return;
    // selecionar quadrados
    quadrados[i] = xO;
    setHistorico([...historicoDePontos, quadrados]);
    setmudaOpass(historicoDePontos.length);
    setxEhProximo(!xEhProximo);
  };

  const VoltarPassos = (passo) => {
    setmudaOpass(passo);
    setxEhProximo(passo % 2 === 0);
  };

  const movimentos = () =>
  historico.map((_passo, movimento) => {
      const direcao = movimento ? `Vá para Movimento #${movimento}` : "Vá para o começo";
      return (
        <li key={movimento}>
          <button onClick={() => VoltarPassos(movimento)}>{direcao}</button>
        </li>
      );
    });

  return (
    <>
      <h1>Jogo da Velha</h1>
      <Bordas quadrados={historico[mudaOpass]} onClick={Cliques} />
      <div className="info-wrapper">
        <div>
          <h3>Histórico</h3>
          {movimentos()}
        </div>
        <h3>{vencedor ? "vencedor: " + vencedor : "Próximo a jogar: " + xO}</h3>
      </div>
    </>
  );
};

export default Jogo;
