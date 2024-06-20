let colours = document.querySelectorAll('.colour');

colours.forEach(colour => {
    let hex = colour.innerHTML;
    colour.style.backgroundColor = hex;
    colour.style.color = hex;
});

function padZero(str, len) {
len = len || 2;
var zeros = new Array(len).join('0');
return (zeros + str).slice(-len);
}