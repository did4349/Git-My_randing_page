class Cover{
    static attachEvent = ()=>{
        Cover.getElementCover().addEventListener('click',()=>{
            Cover.hide();
            Resume.hide();
            Nav.show();
        });
    }

    static getElementCover = ()=>{
        return window.document.body.querySelector('[rel="js-black_view"]');
    }

    static show=()=>{
        if(!Cover.getElementCover().classList.contains('visible')){
            Cover.getElementCover().classList.add('visible');
        }
    }
    static hide=()=>{
        if(Cover.getElementCover().classList.contains('visible')){
            Cover.getElementCover().classList.remove('visible');
        }
    }
}