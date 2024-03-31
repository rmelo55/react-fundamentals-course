import React from 'react'
import students from '../../data/students'

export default props => {
    {/*
    const li1 = (
        <li>
            {students[0].id}) {students[0].name} =&gt; {students[0].nota}
        </li>
    )
    */}
    const studentsLi = students.map((student)=>{
        return (
            <li key={students.id} style={{textAlign: 'left'}}>
                {student.id}) {student.name} {'==>'} {student.nota}
            </li>
        )
    })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {studentsLi}
            </ul>
        </div>
    )
}