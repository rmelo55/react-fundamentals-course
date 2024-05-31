import React from 'react'
import Card from './components/layout/Card'
import ComParametro from './components/basics/ComParamentro'
import Primeiro from './components/basics/Primeiro'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import './App.css'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import ListStudents from './components/repetition/ListSudents'
import ProductTable from './components/repetition/ProductTable'
import EvenOrOdd from './components/conditional/EvenOrOdd'

export default function App(){
    return (
        <div className="App">

            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card title='#08 - Repeat Conditional'>
                    <EvenOrOdd number={22}></EvenOrOdd>
                </Card>

                <Card title='#07 - Repeat Challenger'>
                    <ProductTable></ProductTable>
                </Card>

                <Card title='#06 - Repetetion' color='#BFD641'>
                    <ListStudents></ListStudents>
                </Card>
                    
                <Card title='#05 - Component with Children' color="#028392">
                    <Family sobrenome="Brandão">
                        <FamilyMember name="Francisco"/>
                        <FamilyMember name="Pedro"/>
                        <FamilyMember name="Peterson"/>
                    </Family>
                </Card>

                <Card title='#04 - Desafio Aleatório' color='#008000'>
                    <Random min= {10} max={300} />
                </Card>
            
                <Card title='#03 - Fragment' color='#800080'>
                    <Fragment />
                </Card>

                <Card title='#02.2 - Student Status' color='#808000'>
                    <ComParametro 
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva" 
                        nota={8.1} />
                </Card>

                <Card title='#02.1 - Student Status' color='#808000'>
                    <ComParametro 
                        titulo="Situação do Aluno"
                        aluno="Aline Moreira Silva" 
                        nota={7.8} />
                </Card>

                <Card title='#01 - First Componet' color='#A52A2A'>
                    <Primeiro></Primeiro> 
                </Card>
            </div>

        </div>
    )
}