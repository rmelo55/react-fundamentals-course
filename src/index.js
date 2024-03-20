import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import ComParametro from './components/basics/ComParamentro'
import Primeiro from './components/basics/Primeiro'
import Fragment from './components/basics/Fragment'

const tag = <strong>Ola React!!</strong>

// const el = document.getElementById('root') // Pode ser criada diretamente no parâmetro
ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro> 

        <ComParametro 
            titulo="Situação do Aluno"
            aluno="Pedro Silva" 
            nota={8.1} />

        <ComParametro 
            titulo="Situação do Aluno"
            aluno="Aline Moreira Silva" 
            nota={7.8} />

        <Fragment />

    </div>, 
    /* el   Foi substituído pela linha abaixo */
    document.getElementById( 'root')
)