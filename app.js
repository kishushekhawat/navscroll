let navbar = document.querySelector('#navbar');
let navend= document.querySelector('#navend');







window.addEventListener('scroll',()=>{
  
    if(window.scrollY > 500){
        navbar.classList.add('show')
     
     }
    else{
        navbar.classList.remove('show')
     }
     hideDiv();
  
})

function hideDiv() {
    navend.classList.add('hidden');
    
    setTimeout(() => {
        navend.classList.remove('hidden');
    }, 4000);

}
