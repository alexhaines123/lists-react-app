import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.clicked} key={props.id}>
            {props.value}
        </div>
    )
};

export default charComponent;