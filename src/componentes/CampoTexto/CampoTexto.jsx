import './CampoTexto.css'

export const CampoTexto = (props)=>{

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitar = (event)=>{
        props.aoAlterar(event.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input valor={props.valor} onChange={aoDigitar} placeholder={placeholderModificada} required={props.obrigatorio}/>
        </div>
    )
}
