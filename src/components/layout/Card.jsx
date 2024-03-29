import "./Card.css"
import React from "react";

export default (props)=>{

    const cardStyle = {
        backgroundColor: props.color || 'red',
        borderColor: props.color || 'red',
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">
                { props.title }
            </div>
            <div className="Content">
                { props.children }
            </div>
        </div>
    )
}