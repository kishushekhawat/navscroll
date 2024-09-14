let navbar = document.querySelector('#navbar');






window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    if(window.scrollY > 500){
        navbar.classList.add('show')
     }
    else{
        navbar.classList.remove('show')
     }
})

