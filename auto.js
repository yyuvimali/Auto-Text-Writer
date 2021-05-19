var text = 'Project 3 Auto text writer press button';
const auto = document.getElementById('auto');
var i,j=0;

document.getElementById('btn').addEventListener('click',() => {
    clearInterval(i);
    auto.innerText = '';
    if(j===0) {
        text = 'press the button to change the text again';
        j = 1; 
    }
    else {  
        text = 'Project 3 Auto text writer press button';
        j=0;  
    }
    index = 0;
    get();
});

let index = 0;
function recall() {
    auto.innerText = text.slice(0,index);
    index++;

    if(index > text.length) { index = 0; }
}

function get () {
 i = setInterval(recall,100);
}
get();