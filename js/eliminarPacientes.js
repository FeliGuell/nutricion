
var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function(event){
        event.target.parentNode.classList.add("fadeOut");

        setInterval(function(){
            event.target.parentNode.remove();
        }, 400);
    })  