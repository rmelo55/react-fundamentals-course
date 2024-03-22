import React, { cloneElement } from 'react'

export default props=>{
    return (
        <div>
            {cloneElement(props.children, { ...props })}
        </div>
    )
}


// We can import o cloneElement:
// import React, { cloneElement } from 'react'
// React.cloneElement(props.children)