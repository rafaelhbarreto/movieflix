import { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import Carousel from '../components/Carousel';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setItems([
        {
          id: 1,
          image: 'https://github.com/diego-sampaio.png',
          title: 'O Silêncio dos Inocentes',
          subHeader: '1991 ‧ Thriller/Terror ‧ 2h 18m',
          description:
            'Uma jovem e talentosa agente do FBI é aconselhada pelo Dr. Hannibal Lecter, um psiquiatra brilhante e também um psicopata violento e canibal, a fim de conseguir capturar outro assassino.',
          rate: '9.4',
        },
        {
          id: 2,
          image: 'https://github.com/ricardosoaresl.png',
          title: 'O Resgate do Soldado Ryan',
          subHeader: '1998 ‧ Guerra/Drama ‧ 2h 50m',
          description:
            'Ao desembarcar na Normandia, no dia 6 de junho de 1944, o Capitão Miller recebe a missão de comandar um grupo do Segundo Batalhão para o resgate do soldado James Ryan, o caçula de quatro irmãos, dentre os quais três morreram em combate. Por ordens do chefe George C. Marshall, eles precisam procurar o soldado e garantir o seu retorno, com vida, para casa.',
          rate: '9.5',
        },
        {
          id: 3,
          image: 'https://github.com/Ficheles.png',
          title: 'The Warriors',
          subHeader: '1979 ‧ Ação/Crime ‧ 1h 34m',
          description:
            'Um bando chamado de Os Selvagens da Noite é acusado da morte do líder da assembleia de todas as gangues de rua e é perseguido por vingança. Eles têm que cruzar a cidade e atravessar zonas de gangues inimigas para conseguir voltar ao seu território.',
          rate: '9.2',
        },
        {
          id: 4,
          image: 'https://github.com/rafaelhbarreto.png',
          title: 'O Poderoso Chefão',
          subHeader: '1972 ‧ Crime/Ficção policial ‧ 2h 58m',
          description:
            'Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.',
          rate: '9.8',
        },
        {
          id: 5,
          image: 'https://github.com/diego-sampaio.png',
          title: 'Cidadão Kane',
          subHeader: '1941 ‧ Drama/Mistério ‧ 1h 59m',
          description:
            'Apontado frequentemente como um dos melhores filmes já produzidos, a obra-prima de Orson Welles conta a história do magnata da imprensa Charles Foster Kane em uma sequência de flashbacks. Um jornalista fica intrigado pela última palavra de Kane - rosebud - e tenta descobrir o seu significado entrevistando pessoas do passado do magnata.',
          rate: '9.8',
        },
        {
          id: 6,
          image: 'https://github.com/ricardosoaresl.png',
          title: 'Taxi Driver',
          subHeader: '1976 ‧ Drama/Drama ‧ 1h 54m',
          description:
            'O motorista de táxi de Nova York Travis Bickle, veterano da Guerra do Vietnã, reflete constantemente sobre a corrupção da vida ao seu redor e sente-se cada vez mais perturbado com a própria solidão e alienação. Apesar de não conseguir fazer contato emocional com ninguém e viver uma vida questionável em busca de diversão, ele se torna obcecado em ajudar uma prostituta de 12 anos que entra em seu táxi para fugir de um cafetão.',
          rate: '9.7',
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      {!loading && <Carousel items={items} />}
    </>
  );
}
