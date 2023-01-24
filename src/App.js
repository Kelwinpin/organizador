import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  const [times, setTimes] =useState([
    { 
      id:uuidv4(),
      nome:'Tank',
      cor:'#82CFFA'
    },
    {
      id:uuidv4(),
      nome:'Dano',
      cor:'#E06B69'
    },
    {
      id:uuidv4(),
      nome:'Suporte',
      cor:'#57C278'
    }])
  const [colaboradores, setColaboradores] = useState([])

  const adicionarColaboradores=(colaborador)=>{
    setColaboradores([...colaboradores,colaborador])
    console.log(colaboradores)
  }

  function mudarCorTime(cor, id){
    setTimes(times.map(time=>{
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }))  
  }

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
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
        id={time.id}
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
