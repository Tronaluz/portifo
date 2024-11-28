import React from 'react';
import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';
import { GithubSecao } from './styles';

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dolores dolorem expedita non sunt ullam in, tenetur, atque tempora
      dicta quam repellat fuga commodi fugit, possimus quod delectus. Cum, consequatur porro!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Tronaluz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tronaluz&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)


export default Sobre
