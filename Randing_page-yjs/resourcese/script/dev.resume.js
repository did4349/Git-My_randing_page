class Resume{
    static attachEvent = ()=>{
        Resume.getElementResumeBtn().addEventListener('click',()=>{
            Resume.show();
            Cover.show();
            Nav.hide();
        });
        Resume.getElementResumeClose().addEventListener('click',()=>{
            Resume.hide();
            Cover.hide();
            Nav.show();
        });
    }

    static getElementResume = ()=>{
        return window.document.body.querySelector('[rel="js-resume"]');
    }
    static getElementResumeBtn = ()=>{
        return window.document.body.querySelector('[rel="js-resume_btn"]');
    }
    static getElementResumeClose = ()=>{
        return Resume.getElementResume().querySelector('button.resume-item.close');
    }

    static show = ()=>{
        if(!Resume.getElementResume().classList.contains('visible')){
            Resume.getElementResume().classList.add('visible');
        }
    }
    static hide = ()=>{
        if(Resume.getElementResume().classList.contains('visible')){
            Resume.getElementResume().classList.remove('visible');
        }
    }
}