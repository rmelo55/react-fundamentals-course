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
            <p>
                Número mínimo: { min } <br />
                Número máximo: { max }
            </p>
        </div>
    )
}