import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  const times =[
    {
      nome:'Tank',
      corPrimaria:'#E8F8FF',
      corSecundaria:'#82CFFA'
    },
    {
      nome:'Dano',
      corPrimaria:'#FDE7E8',
      corSecundaria:'#E06B69'
    },
    {
      nome:'Suporte',
      corPrimaria:'#D9F7E9',
      corSecundaria:'#57C278'
    }
  ]
  const [colaboradores, setColaboradores] = useState([])

  const adicionarColaboradores=(colaborador)=>{
    setColaboradores([...colaboradores,colaborador])
    console.log(colaboradores)
  }

  return (
    <div>
      <Banner/>
      <Formulario 
        nomeTime = {times.map(time => time.nome)}
        adicionarColaborador = {colaborador=>adicionarColaboradores(colaborador)}
      />
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.team === time.nome)}
      />)}
    </div>
  );
}

export default App;
