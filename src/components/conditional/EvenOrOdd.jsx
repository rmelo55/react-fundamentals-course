import React from 'react'

export default props => {
    const isEven = ( props.number % 2 === 0 )
    return (
        <div>
            { 
            isEven ? 
            <span>Even (Par) </span> : 
            <span>Odd (Ímpar)</span> 
            }
        </div>
    )
}