import React from 'react';
import Titulo from '../../components/Titulo';
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';

import { Descricao, BotaoTema, SidebarContainer } from './styles';

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Lucas Oliveira</Titulo>
      <Paragrafo tipo="secundario" font-size={16}>Tronaluz</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Front-End Engineer
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
