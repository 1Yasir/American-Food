// active navbar link 
function activeLink(eve){
    let links = document.querySelectorAll(".link");
    // selct all links and remove active claas 
    links.forEach(elm=>{
        elm.classList.remove("active");
    })
    // only current link add active class 
    eve.currentTarget.classList.add("active");

};

// navBardisplay display block and none function  

function navBardisplay(){
    let navBar = document.querySelector(".navbar");
    navBar.classList.toggle("block");
   
};

// arrow btn script start

window.addEventListener("scroll" ,function(){
    let btn = this.document.querySelector(".up");

    if(this.scrollY > 100){
        btn.style.display = "inline-block";
    }else{
        btn.style.display = "none";

    }
});
// arrow btn script end
