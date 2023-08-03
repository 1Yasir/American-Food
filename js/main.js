// active navbar link 
function activeLink(eve){
    let links = document.querySelectorAll(".link");
    // selct all links and remove active claas 
    links.forEach(elm=>{
        elm.classList.remove("active");
    })
    // only current link add active class 
    eve.currentTarget.classList.add("active");

}

// navBardisplay display block and none function  

function navBardisplay(){
    let navBar = document.querySelector(".navbar");
    navBar.classList.toggle("block");
   
}