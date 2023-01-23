import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  const [times, setTimes] =useState([
    {
      nome:'Tank',
      cor:'#82CFFA'
    },
    {
      nome:'Dano',
      cor:'#E06B69'
    },
    {
      nome:'Suporte',
      cor:'#57C278'
    }
  ])
  const [colaboradores, setColaboradores] = useState([])

  const adicionarColaboradores=(colaborador)=>{
    setColaboradores([...colaboradores,colaborador])
    console.log(colaboradores)
  }

  function mudarCorTime(cor, nome){
    setTimes(times.map(time=>{
      if(time.nome === nome){
        time.cor = cor;
      }
      return time;
    }))  
  }

  function deletarColaborador(){
    console.log('Deletando colaborador...')
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
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.team === time.nome)}
        deletar={deletarColaborador}
        mudarCor={mudarCorTime}
      />)}
    </div>
  );
}

export default App;
