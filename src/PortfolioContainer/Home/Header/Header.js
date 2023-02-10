import React, { useState } from "react";
import { GET_SCREEN_INDEX, TOTAL_SCREENS } from "../../../utilities/commonUtils";
import { faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ScrollService from "../../../utilities/ScrollService";
import "./Header.css"

export default function Header(){
    const [selectedScreen,setSelectedScreen]=useState(0);
    const [showHeaderoptions,setShowHeaderOptions]=useState(false);

    const updateCurrentScreen=(currentScreen)=>{
        if(!currentScreen || !currentScreen.screen.screenInView)
            return;
        let screenIndex=GET_SCREEN_INDEX(currentScreen.screenInView)
        if(screenIndex<0)
            return;
    }
    let currentScreenSubscription=ScrollService.CurrentScreenBroadCaster.subscribe(updateCurrentScreen)

    const getHeaderOptions=()=>{
        return(
            TOTAL_SCREENS.map((screen,i)=>(
                <div key={screen.screen_name} 
                className={getHeaderOptionsClass(i)} 
                onClick={()=>switchScreen(i,screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            )

            )
        )
    }

    const getHeaderOptionsClass=(index)=>{
        let classes="header-option";
        if(index<TOTAL_SCREENS.length-1)
            classes += " header-option-seperator";
              
        if(selectedScreen===index)
            classes += " selected-header-option";
            
        return classes;
    }

    const switchScreen=(index,screen)=>{
        let screencomponent=document.getElementById(screen.screen_name)
        if(!screencomponent)
            return;
        screencomponent.scrollIntoView({behavior:'smooth'})
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    }

    return(
        <div className="header-container" onClick={()=>setShowHeaderOptions(!showHeaderoptions)}>
            <div className="header-parent">
                <div className="header-hamburger" onClick={()=>setShowHeaderOptions(!showHeaderoptions)}>
                    <FontAwesomeIcon className="header-hamburger-bars" icon={faBars}/>
                </div>
                <div className="header-logo">
                    <span>~GKR~</span>
                </div>
                <div className={(showHeaderoptions)?"header-options show-hamburger-options":"header-options"}>
                    {getHeaderOptions()}
                </div>
            </div> 
        </div>
    )
}

