import './Colaborador.css'
import {AiFillCloseCircle} from 'react-icons/ai'

export const Colaborador = ({id, nome, imagem, cargo, corDeFundo, deletar})=>{
    return(
        <div className='colaborador'>
            <AiFillCloseCircle className='deletar' onClick={()=>deletar(id)} size={25}/>
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}