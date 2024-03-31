import React, { cloneElement } from 'react'

export default props=>{
    return (
        <div>
           {
                props.children.map((child, i)=>{
                    return cloneElement(child, {...props, key: i})
                })
           }
      </div>
    )
}


// We can import o cloneElement:
// import React, { cloneElement } from 'react'
// e na linha 6 seria
// React.cloneElement(props.children)
// ou pode ser:
// {cloneElement(props.children, props)} 