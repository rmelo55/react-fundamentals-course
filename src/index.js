import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

const tag = <strong>Ola React!!</strong>

// const el = document.getElementById('root') // Pode ser criada diretamente no parâmetro
ReactDOM.render(
    <div>
        { tag }
    </div>, 
    // el  // Foi substituído pela linha abaixo
    document.getElementById( 'root')
)