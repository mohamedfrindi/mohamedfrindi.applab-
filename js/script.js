/* ------------------ nav bar ------------------ */
// part 1 =  nav bar btn open and close 
var btnClickOpen = document.getElementById("nav-bars-btn-open"),
    btnClickClose = document.getElementById("nav-bars-btn-close"),
    navBar = document.querySelector(".nav-bar");

btnClickOpen.onclick = function () {
  
    navBar.style.left = "0";

}

btnClickClose.onclick = function () {
  
    navBar.style.left = "-100%";
};
// part 2 =  nav bar scroll 
window.onscroll = function () {

    var nav = document.querySelector(".nav");
        
            nav.classList.toggle("nav-efct" , window.scrollY > 130);
        
    
    }

/*---------------------- btn scroll top --------------- */
var btnTop = document.querySelector("#btn-scroll-top"); 

window.addEventListener('scroll' , function () {
    
btnTop.classList.toggle('active' , window.scrollY > 200);

})

btnTop.onclick = function () {
  
    window.scrollTo({
        top: 0
    })

}



