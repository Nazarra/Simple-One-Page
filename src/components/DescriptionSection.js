import React from "react";
import IconComponent from "./IconComponent";
import First_Icon from "../assets/Person.svg";
import Second_Icon from "../assets/Eye.svg";
import Third_Icon from "../assets/Catalog.svg";


const DescriptionSection = () =>{
    return (
        <>
        <section className={"description"} name={'Description'}    >
            <div className={"store_advertising"}>
                <h1>Sell More!</h1>
                <p>Open shop on our platform and increase your sales</p>
                <a href={"/"} className={"description_button"}>Open your shop</a>
            </div>
            <div className={"description_icon"}>
                <h2>The most popular sales platform in country</h2>
                <div className={'icon_container'}>
                <IconComponent classname={"first"} image={First_Icon}
                               ViewsNumber={"100000+"} description={"daily entries"}
                               />
                <IconComponent classname={"second"} image={Second_Icon}
                               ViewsNumber={"2000000+"} description={"seen products every day"}
                                />
                <IconComponent classname={"third"} image={Third_Icon}
                               ViewsNumber={"10000+"} description={"added posts daily"}
                                />
                </div>

            </div>
        </section>

        </>
    )


}

export default DescriptionSection;