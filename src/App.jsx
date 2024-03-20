import React from 'react'
import ComParametro from './components/basics/ComParamentro'
import Primeiro from './components/basics/Primeiro'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'

export default function App(){
    return (
        <div id="app">

            <Random min= {10} max={300} />
        
            <Fragment />

            <ComParametro 
                titulo="Situação do Aluno"
                aluno="Pedro Silva" 
                nota={8.1} />

            <ComParametro 
                titulo="Situação do Aluno"
                aluno="Aline Moreira Silva" 
                nota={7.8} />

            <Primeiro></Primeiro> 

    </div>
    )
}