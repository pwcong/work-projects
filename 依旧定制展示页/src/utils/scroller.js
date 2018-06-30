export function scrollToInLinear(container, target, duration, speed){


    if(container.scroller){
        clearInterval(container.scroller);
        container.scroller = null;
    }

    let flag = container.scrollTop < target.offsetTop - container.offsetTop ? true : false;
    let lastTop = -1;

    container.scroller = setInterval(function(){

        lastTop = container.scrollTop;

        if(flag){
            
            container.scrollTop += speed;

            if(container.scrollTop >= target.offsetTop - container.offsetTop){
                container.scrollTop = target.offsetTop - container.offsetTop;
                clearInterval(container.scroller);
                container.scroller = null;
            }

        }else{

            container.scrollTop -= speed;

            if(container.scrollTop <= target.offsetTop - container.offsetTop){
                container.scrollTop = target.offsetTop - container.offsetTop;
                clearInterval(container.scroller);
                container.scroller = null;
            }
        }

        if(container.scrollTop == lastTop){
            clearInterval(container.scroller);
            container.scroller = null;           
        }




    }, duration);


}

export function scrollToInEase(container, target, duration, speed){

    if(container.scroller){
        clearInterval(container.scroller);
        container.scroller = null;
    }

    let flag = container.scrollTop < target.offsetTop - container.offsetTop ? true : false;
    let lastTop = -1;

    container.scroller = setInterval(function(){

        lastTop = container.scrollTop;

        container.scrollTop += (target.offsetTop - container.offsetTop - container.scrollTop) * speed;

        if(flag){
            
            if(container.scrollTop >= target.offsetTop - container.offsetTop){
                container.scrollTop = target.offsetTop - container.offsetTop;
                clearInterval(container.scroller);
                container.scroller = null;
            }           

        }else{

            if(container.scrollTop <= target.offsetTop - container.offsetTop){
                container.scrollTop = target.offsetTop - container.offsetTop;
                clearInterval(container.scroller);
                container.scroller = null;
            }
        }

        if(Math.abs(target.offsetTop - container.offsetTop - container.scrollTop) < 0.1){
            container.scrollTop = target.offsetTop - container.offsetTop;
            clearInterval(container.scroller);
            container.scroller = null;
        }

        if(container.scrollTop == lastTop){
            clearInterval(container.scroller);
            container.scroller = null;           
        }

    });
}

export function scrollTo(container, pos, duration, speed){

    if(container.scroller){
        clearInterval(container.scroller);
        container.scroller = null;
    }

    let flag = container.scrollTop < pos ? true : false;
    let lastTop = -1;

    container.scroller = setInterval(function(){

        lastTop = container.scrollTop;

        container.scrollTop += (pos - container.scrollTop) * speed;

        if(flag){
            
            if(container.scrollTop >= pos){
                container.scrollTop = pos;
                clearInterval(container.scroller);
                container.scroller = null;
            }           

        }else{

            if(container.scrollTop <= pos){
                container.scrollTop = pos;
                clearInterval(container.scroller);
                container.scroller = null;
            }
        }

        if(Math.abs(pos - container.scrollTop) < 0.1){
            container.scrollTop = pos;
            clearInterval(container.scroller);
            container.scroller = null;
        }

        if(container.scrollTop == lastTop){
            clearInterval(container.scroller);
            container.scroller = null;           
        }

    });

}