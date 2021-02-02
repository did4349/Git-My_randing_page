class Fnq{
    static attachEvent = ()=>{
        for(let i=0;i < Fnq.getElementFnqButton().length;i++){
            let item = Fnq.getElementFnqButton()[i];
            item.addEventListener('click',()=>{
                if(!item.classList.contains('visible')){
                    item.classList.add('visible');
                }else{
                    item.classList.remove('visible');
                }
            })
        }
    }

    static getElementFnq = ()=>{
        return window.document.body.querySelector('[rel="js-fnq"]');
    }
    static getElementFnqButton = ()=>{
        return Fnq.getElementFnq().querySelectorAll('button.fnq-btn');
    }
}