export default class Animations{
    static animations=new Animations();

    fadeInscreen=(screen_name)=>{
        let screen=document.getElementById(screen_name)
        if(!screen || !screen_name)
            return;
        screen.style.opacity="5";
        screen.style.transform="translateY(1px)"
    }
    
}