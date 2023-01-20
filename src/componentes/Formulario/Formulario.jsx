import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [team, setTeam] = useState('')

    const Salvar = (event) =>{
        event.preventDefault()
        props.adicionarColaborador({
            nome, 
            cargo, 
            imagem, 
            team
        })
        document.querySelectorAll("input").forEach(input => (input.value = ""));
    }   

    return (
        <section className='Formulario'>
            <form onSubmit={Salvar}>
                <h2>Digite os seus dados para criar o seu cargo</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite o seu nome'
                    valor={nome}
                    aoAlterar = {valor => setNome(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite o seu cargo'
                    valor={cargo}
                    aoAlterar = {valor => setCargo(valor)}  
                />
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Digite o endereço da sua imagem' 
                    valor={imagem}
                    aoAlterar = {valor => setImagem(valor)} 
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={props.nomeTime}
                    valor={team}
                    aoAlterar = {valor => setTeam(valor)}
                />
                <Botao>
                    Criar card
                </Botao>

            </form>
        </section>
    )
}