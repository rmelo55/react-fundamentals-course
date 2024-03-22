import React from 'react'
import FamilyMember from './FamilyMember'

export default props=>{
    return (
        <div>
            <FamilyMember nome="Francisco" sobrenome={props.sobrenome}/>
            <FamilyMember nome="Edilene" {...props}/>
            <FamilyMember nome="Catrine" sobrenome="Furacão"/>
        </div>
    )
}