let isModelOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
  
    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
  }

function toggleContrast(){
    contrastToggle = !contrastToggle;  
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

async function contact(event){
    try{
        event.preventDefault();
        const loading = document.querySelector('.model__overlay--loading');
        const success = document.querySelector('.model__overlay--success');
        loading.classList += " model__overlay--visible";
        await emailjs.sendForm(
            'service_0eg7exa',
            'template_lfptebx',
            event.target,
            'nK5P70V6rSFVCr5WF'  
        )
        loading.classList.remove("model__overlay--visible");
        success.classList += " model__overlay--visible";
    }
    catch(error) {
        loading.classList.remove("model__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on vuvuhoang99@email.com"
        );
    }
}

function toggleModel(){
    if(isModelOpen){
        isModelOpen = false;
        return document.body.classList.remove("model--open")
    }
    isModelOpen = true;
    document.body.classList += " model--open"
    
}