 function allowDrop(ev) {
          ev.preventDefault();
        }
        
        function drag(ev) {
          ev.dataTransfer.setData("text", ev.target.id);
        }
        
        function drop(ev) {
          ev.preventDefault();
          var data = ev.dataTransfer.getData("text");
          ev.target.appendChild(document.getElementById(data));
        }

function rand(min, max) {
    min -Math.ceil(min);
    max = math.floor(max);
    return Math.floor(math.random() * (max - min + 1))+ min;
}

function aleatorio(){
    var num = rand(1,10);
    alert(num);
}

