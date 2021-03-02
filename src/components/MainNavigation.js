import React from "react";
import ScrollLink from "./ScrollLink";

const MainNavigation = (props) =>{

    return(
        <>
            <nav className={`navigation ${props.NaviClassName}` }>
                <ul>
                    <ScrollLink linkTarget={"Description"}  LinkName={"WHY US"} hamburgerOpen={props} />
                    <ScrollLink linkTarget={"Benefits"}  LinkName={"BENEFITS"} hamburgerOpen={props}  />
                    <ScrollLink linkTarget={"Prices"}  LinkName={"PRICES"} hamburgerOpen={props} />
                    <ScrollLink linkTarget={"Contact"}  LinkName={"CONTACT"} hamburgerOpen={props}/>
                </ul>
            </nav>

        </>
    )
}

export default MainNavigation;