import './Time.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

export const Time=(props)=>{
    return(
        props.colaboradores.length > 0 && 
        <section className='time' style={{backgroundColor: hexToRgba(props.cor, 0.6)}}>
            <input type="color" value={props.cor} className='input-color' onChange={evento => props.mudarCor(evento.target.value, props.nome)}/>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                <Colaborador key={colaborador.nome} 
                corDeFundo={props.cor} 
                nome={colaborador.nome} 
                imagem={colaborador.imagem} 
                cargo={colaborador.cargo} 
                deletar={props.deletarColaborador}/>)}
            </div>
        </section>
    )
}