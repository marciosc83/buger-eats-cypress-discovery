var avengers = ['VING1', 'VING2', 'VING3', 'VING4'];
function listaVingadores() {
    var ul = document.getElementById('avengers');
    ul.innerHTML = '';
    avengers.forEach(function (avenger) {
        var li = document.createElement('li');
        var text = document.createTextNode(avenger);
        li.appendChild(text);
        ul.appendChild(li);
        console.log(avenger);
    })
}