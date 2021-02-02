class Arrow{
    static attachEvent = ()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 300){
                Arrow.move();
            }else{
                Arrow.unMove();
            }
        });
    }

    static getElementArrow = ()=>{
        return window.document.body.querySelector('[rel="js-scroll_Arrow"]');
    }

    static move = ()=>{
        if(!Arrow.getElementArrow().classList.contains('move')){
            Arrow.getElementArrow().classList.add('move');
        }
    }
    static unMove = ()=>{
        if(Arrow.getElementArrow().classList.contains('move')){
            Arrow.getElementArrow().classList.remove('move');
        }
    }
}