class Nav{
    static attachEvent=()=>{
    
        Nav.getElementNavButton().addEventListener('click',()=>{
            Nav.getElementNav().classList.add('visible');
        });

        Nav.getElementNavItem().forEach((item)=>{
            item.addEventListener('click',()=>{
                Nav.getElementNav().classList.remove('visible');    
            });
        });
    }



    static getElementNav=()=>{
        return window.document.body.querySelector('[rel="js-navigation"]');
    }
    static getElementNavButton= ()=>{
        return window.document.body.querySelector('[rel="js-navigation_btn"]');
    }
    static getElementNavItem = ()=>{
        return Nav.getElementNav().querySelectorAll('nav.navigation-item.nav > ul.nav-item.list > li.list-item');
    }

    static hide = ()=>{
        if(!Nav.getElementNav().classList.contains('hide')){
            Nav.getElementNav().classList.add('hide');
        }
    }
    static show = ()=>{
        if(Nav.getElementNav().classList.contains('hide')){
            Nav.getElementNav().classList.remove('hide');
        }
    }

}