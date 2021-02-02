class Graph{
    static attachEvent = ()=>{
       window.addEventListener('scroll',()=>{
           if(window.scrollY >= 1700){
               Graph.show();
           }else {
               Graph.hide();
           }
        //요소가 상단 top에 떨어져있는시점??
        // if(window.document.getElementById('js-skill').getBoundingClientRect().y < 0){
        //     Graph.show();
        // }else {
        //     Graph.hide();
        // }
       });
    }

    static getElementGraph = ()=>{
        return window.document.body.querySelector('[rel="js-graph"]');
    }
    static getElementGraphItem = ()=>{
        return Graph.getElementGraph().querySelectorAll('.graph-main > .graph-main-item.full');
    }

    static show = ()=>{
        Graph.getElementGraphItem().forEach((item)=>{
            if(!item.classList.contains('visible')){
                item.classList.add('visible');
            }
        });
    }
    static hide = ()=>{
        Graph.getElementGraphItem().forEach((item)=>{
            if(item.classList.contains('visible')){
                item.classList.remove('visible');
            }
        });
    }
}