import './ListaSuspensa.css';

export const ListaSuspensa = (props) =>{
    return(
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select onChange={evento=> props.aoAlterar(evento.target.value)} required={props.required} value = {props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}