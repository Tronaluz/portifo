import React from 'react';
import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import { Card, LinkBotao } from './styles';



const Projeto = () => {
  <Card>
    <Titulo>
      Projeto Lista de Tarefas
    </Titulo>
    <Paragrafo tipo='secundario'>
      Lista de tarefas feita com VueJS
    </Paragrafo>
    <LinkBotao>Vizualizar</LinkBotao>
  </Card>
}

export default Projeto;
