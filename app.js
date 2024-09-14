let navbar = document.querySelector('#navbar');






window.addEventListener('scroll',()=>{
    if(window.scrollY > 1500){
        navbar.classList.remove('show')
     }
    else{
        navbar.classList.add('show')
     }
})

