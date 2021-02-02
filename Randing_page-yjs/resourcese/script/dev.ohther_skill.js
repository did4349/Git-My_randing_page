class OhtherSkill{
    static attachEvent = ()=>{
        OhtherSkill.getElementOhtherBtn().addEventListener('click',()=>{
            OhtherSkill.springHeight();
            OhtherSkill.show();
        });
    }

    static getElementOhther = ()=>{
        return window.document.body.querySelector('[rel="js-ohther_skill"]');
    }
    static getElementOhtherBtn = ()=>{
        return OhtherSkill.getElementOhther().querySelector('div.ohther-skill-item.button > button.ohther-btn');
    }
    static getElementOhtherBox = ()=>{
        return OhtherSkill.getElementOhther().querySelector('div.ohther-skill-item.container');
    }
    static getElementOhtherBoxItem = ()=>{
        return OhtherSkill.getElementOhtherBox().querySelectorAll('.container-item');
    }

    static springHeight=()=>{
        if(!OhtherSkill.getElementOhtherBox().classList.contains('visible')){
            OhtherSkill.getElementOhtherBox().classList.add('visible');
        }
    }
    static show = ()=>{
        for(let i = 0; i < OhtherSkill.getElementOhtherBoxItem().length;i++){
            setTimeout(()=>{
                if(!OhtherSkill.getElementOhtherBoxItem()[i].classList.contains('visible')){
                    OhtherSkill.getElementOhtherBoxItem()[i].classList.add('visible');
                }
            },i*200);
        }
    }
    
}
