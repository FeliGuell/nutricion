var pacientes = document.querySelectorAll(".paciente");

for(var i=0 ; i < pacientes.length;i++){
    var paciente = pacientes[i];

    var pesoTd = paciente.querySelector(".info-peso");
    var peso = pesoTd.textContent;

    var alturaTd = paciente.querySelector(".info-altura");
    var altura = alturaTd.textContent;

    var imcTd = paciente.querySelector(".info-imc");

    alturaValida = validarAltura(altura);;
    pesoValido = validarPeso(peso);

    if(!validarAltura(altura)){
        imcTd.textContent = "Altura incorrecta";
        alturaValida = false;
        paciente.classList.add("paciente-incorrecto");
    } 

    if(!validarPeso(peso)){
        imcTd.textContent = "Peso incorrecto";
        pesoValido = false;
        paciente.classList.add("paciente-incorrecto");
        
    } 

    if((alturaValida == false) && (pesoValido == false)){
        imcTd.textContent = "Altura y peso incorrectos";
        paciente.classList.add("paciente-incorrecto");
    } 

    if(alturaValida  && pesoValido){
        imc = calculoImc(peso,altura);
        imcTd.textContent = imc;

    } 

    function calculoImc (peso, altura){
        imc = peso/(altura*altura);
        return(imc.toFixed(2));
    }


    function validarAltura(altura){
        if((altura >= 0 && altura < 3)){
            return true;
        } else {
            return false;
        }
    }

    function validarPeso(peso){
        if((peso >= 0 && peso < 400)){
            return true;
        } else {
            return false;
        }
    }
}




    
    
    

    

    
