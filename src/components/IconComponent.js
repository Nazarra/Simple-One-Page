import React from "react";

function IconComponent(props) {
    return(
        <>
            <div className={`Icon ${props.classname}` }>
                <div>
                <img src={props.image} alt={"Logo"} />
                </div>
                <h3>{props.ViewsNumber}</h3>
                <p>{props.description}</p>
            </div>
        </>
    )
}

export default IconComponent;