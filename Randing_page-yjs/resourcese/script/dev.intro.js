const SHOWING_CLASS = "showing";
const firstIntro = window.document.body.querySelector('div.intro-item:first-child');

function slide(){
    const currentSlide = window.document.body.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(SHOWING_CLASS);
        }else{
            firstIntro.classList.add(SHOWING_CLASS);
        }
    }else{
        firstIntro.classList.add(SHOWING_CLASS);
    }
}
slide();
