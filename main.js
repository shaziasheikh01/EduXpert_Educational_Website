//change navbar styles on scroll 

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle       /* classlist - The classList property returns the CSS classnames of an element.*/
    ('window-scroll', window.scrollY > 0)                /*toggle - toggles between hide() and show() for the selected elements. This method checks the selected elements for visibility. show() is run if an element is hidden. hide() is run if an element is visible  takes classname*/
                                                       /*window.scrolly - The scrollY property returns the pixels a document has scrolled from the upper left corner of the window.  */
})

//show /hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus";
        }
        else{
            icon.className = "uil uil-plus";
        }
    })
})

// show /hide nav menu for tablet

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display ="inline-block";
    menuBtn.style.display = "none";
})

//close nav menu

const closeNav =() =>{
    menu.style.display = "none";
    closeBtn.style.display ="none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);