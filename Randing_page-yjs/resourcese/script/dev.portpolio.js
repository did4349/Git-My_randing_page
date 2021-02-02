class Portpolio{
    static attachEvent = ()=>{
        window.addEventListener('scroll',()=>{
            for(let i=0; i<Portpolio.getElementPortpolioItem().length;i++){
                setTimeout(()=>{
                    if(window.scrollY > 2700){
                        Portpolio.getElementPortpolioItem()[i].classList.add('visible');
                    }
                },i*300);
            }
        });
    }

    static getElementPortpolio = ()=>{
        return window.document.body.querySelector('[rel="js-portpolio"]');
    }
    static getElementPortpolioItem = ()=>{
        return Portpolio.getElementPortpolio().querySelectorAll('.grid-item');
    }
}