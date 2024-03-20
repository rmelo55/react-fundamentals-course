import React from 'react'

export default function(props){
        const { min, max} = props
    return (
        <div>
            <h1>
                Número aleatório:
                <strong> { Math.floor(Math.random() * (max - min)  + min) } </strong>
                <br />
            </h1>
            <h2>
                Número mínimo: { min } <br />
                Número máximo: { max }
            </h2>
            <hr/>
        </div>
    )
}