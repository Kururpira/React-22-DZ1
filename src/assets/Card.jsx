import React from 'react'
import './Card.css'
function Card(props) {
    return (
            <div className="card-body">
                <img src={props.url} alt={props.title}/>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
            </div>
    );
}

export default Card;