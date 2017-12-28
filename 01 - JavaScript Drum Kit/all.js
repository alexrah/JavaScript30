/**
 * Created by ale on 27/12/17.
 */

let playyxx;

const play = (e) =>
    {
        console.log(e);
        let el;
        if (e.type === 'click'){
            // console.log(e.target.parentNode);
            let key = e.target.parentNode;
            let audio = key.querySelector('audio');
            key.classList.add('playing');
            audio.currentTime = 0;
            audio.play();
        }else{
            if(el = document.querySelector(`div[data-key="${e.keyCode}" ]`)) {
                el.classList.add("playing");
                let audio = el.querySelector("audio");
                audio.currentTime = 0;
                audio.play();
            }
        }
};
window.addEventListener('keyup', (e)=> {
    play(e);
});

let allKeys = document.querySelectorAll('.key');
console.log(allKeys);
let allArr = Array.from(allKeys);
allArr.map(key => { key.addEventListener('click', (e) =>  play(e))}) ;


window.addEventListener('transitionend', (e)=> {
    if (e.propertyName === 'transform'){
        e.target.classList.remove('playing')

    }
});