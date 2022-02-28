const colors = ['red', 'orange', 'blue', 'green'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    const randomNumbers = getRandomNumbers();
    document.body.style.backgroundColor = colors[randomNumbers];
    color.textContent = colors[randomNumbers];

});

function getRandomNumbers(){
    return Math.floor(Math.random()*colors.length);
}

function copyPaste(){
    const copyText = document.getElementById("cpybtn").textContent;
    var clip = navigator.clipboard.writeText(copyText);
    windows.alert("value copied : " + copyPaste);
}
