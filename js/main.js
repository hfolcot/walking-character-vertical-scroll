let scroller = new LocomotiveScroll({
    el: document.querySelector('.scroll-container'),
    direction: 'vertical',
    smooth: true,
    getDirection: true,
    scrollFromAnywhere: true,
    smartphone: {
        direction: 'vertical',
        smooth: true,
        getDirection: true,
        scrollFromAnywhere: true,
    },
    tablet: {
        direction: 'vertical',
        smooth: true,
        getDirection: true,
        scrollFromAnywhere: true,
    }

});


let scrolling = false;
const character = document.getElementById('char');
const road = document.querySelector('.markings');

scroller.on('scroll', (e) => {
    console.log(e.scroll);
    if (e.scroll.y > 0.5 && e.delta.y < e.limit.y) {
        window.clearTimeout(scrolling);
        character.classList.remove('idle');
        road.classList.add('moving');
        if (e.direction == 'up') {
            character.classList.add('walkback');
            road.classList.add('back');
        } else {
            character.classList.add('walk');
            character.classList.remove('walkback');
            road.classList.remove('back');
        }
        scrolling = window.setTimeout(() => {
            character.classList.add('idle');
            character.classList.remove('walk');
            character.classList.remove('walkback');
            road.classList.remove('moving');
        }, 250)
    }
})