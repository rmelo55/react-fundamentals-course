import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import App from './App'

const tag = <strong>Ola React!!</strong>

ReactDOM.render(
    <App />
, 
document.getElementById( 'root')
)
    
    
/*
Na linha 7 podemos declarar: 
const el = document.getElementById('root') // Pode ser criada diretamente no parâmetro

e na linha 11 podemos substituir 
document.getElementById('root') por el
*/