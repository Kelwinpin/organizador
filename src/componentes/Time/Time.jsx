import './Time.css'
import Colaborador from '../Colaborador'

export const Time=(props)=>{
    return(
        props.colaboradores.length > 0 && 
        <section className='time' style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corSecundaria} nome={colaborador.nome} imagem={colaborador.imagem} cargo={colaborador.cargo}/>)}
            </div>
        </section>
    )
}