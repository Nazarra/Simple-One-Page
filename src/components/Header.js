import React,{useState} from "react";
import MainNavigation from "./MainNavigation";
import { Divide as Hamburger } from 'hamburger-react'



const Header = () => {
    const [isOpen, setOpen] = useState(false)

    function handleClick(){
      return   setOpen(!isOpen)
    }


    return (
        <>

            <header className={"Header"} >
                <a href={"/"} className={"logo"}>BestShop</a>
                {isOpen === false ? null :   <MainNavigation NaviClassName={"phone"} />}
                <MainNavigation NaviClassName={"tablet_and_deskop"} hamburgerOpen={()=>{handleClick()}}/>
                <div className={"phone hamburger_container"}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </header>
            </>

    );
};

export default Header;