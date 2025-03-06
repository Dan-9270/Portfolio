for(let i = 1; i<7 ; i++){
    let button = document.getElementById('nav'+i);
    let parent = button.parentElement;
    button.addEventListener("click",()=>{
        button.setAttribute("modified","true");
        for(let j = 1; j<7 ; j++){
            let frame = document.getElementById("blocnav"+j);
            frame.style.display="none";
            let but = document.getElementById("nav"+j);
                but.style.color="black";
                but.style.border="none"
        } 
        button.style.color="var(--main-color)";  
        button.style.borderBottom = "2px solid var(--main-color)"    
        let frame = document.getElementById("blocnav"+i);
        frame.style.display="block";
     })

}