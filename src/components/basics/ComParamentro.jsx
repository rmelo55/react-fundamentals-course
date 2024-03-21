import React from 'react'

export default function ComParamentro(props){
    const status = props.nota >= 7 ? "[ Aprovado ]" : "[ Reprovado ]"
    const notaInt = Math.ceil(props.nota)
    // const sub = props.subtitulo
    return (
        <div>
            <h1>{ props.titulo }</h1>
            <p>
                O aluno <strong> { props.aluno } </strong> 
                tirou nota { notaInt }, 
                e está <strong>{ status }</strong> 
            </p>
            <hr/>
        </div>
    )
}