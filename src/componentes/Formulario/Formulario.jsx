import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'


export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [team, setTeam] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCor] = useState('')


    const Salvar = (event) =>{
        event.preventDefault()
        props.adicionarColaborador({
            nome, 
            cargo, 
            imagem, 
            team,
            id:uuidv4()
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
                    itens={props.nomeTeam}
                    valor={team}
                    aoAlterar = {valor => setTeam(valor)}
                />
                <Botao>
                    Criar card
                </Botao>

            </form>
            <form onSubmit={
                (event)=>{
                    event.preventDefault(); 
                    props.cadastrarTime({nome:nomeTime, cor:corTime})
                }}> 
                <h2>Digite os seus dados para criar o seu cargo</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite o nome do seu time'
                    valor={nomeTime}
                    aoAlterar = {valor => setNomeTime(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Cor' 
                    placeholder='Digite a sua cor'
                    valor={corTime}
                    aoAlterar = {valor => setCor(valor)}  
                />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}