import React from 'react'
import Card from './components/layout/Card'
import ComParametro from './components/basics/ComParamentro'
import Primeiro from './components/basics/Primeiro'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'

export default function App(){
    return (
        <div id="app">

            <h1>Fundamentos React</h1>

            <Card title='#04 - Desafio Aleatório'>
                <Random min= {10} max={300} />
            </Card>
        
            <Card title='#03 - Fragment'>
                <Fragment />
            </Card>

            <Card title='#02.2 - Student Status'>
                <ComParametro 
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva" 
                    nota={8.1} />
            </Card>

            <Card title='#02.1 - Student Status'>
                <ComParametro 
                    titulo="Situação do Aluno"
                    aluno="Aline Moreira Silva" 
                    nota={7.8} />
            </Card>

            <Card title='#01 - First Componet'>
                <Primeiro></Primeiro> 
            </Card>

    </div>
    )
}