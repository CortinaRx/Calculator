function sumar() {
    const forma = document.querySelector('#forma');
    
    let operandoA = forma.operandoA;
    let operandoB = forma.operandoB;
    let total = parseInt(operandoA.value) + parseInt(operandoB.value);
    let getresultado = document.querySelector('#resultado');
    getresultado.innerHTML = `El resultado va a ser ${total}`;
    
    if(isNaN(total)){
        getresultado.innerHTML = `Debe introducir numeros`;
    };
    
};

function restar() {
    const forma = document.querySelector('#forma');

    let operandoA = forma.operandoA;
    let operandoB = forma.operandoB;
    let total = parseInt(operandoA.value) - parseInt(operandoB.value);
    let getresultado = document.querySelector('#resultado');
    getresultado.innerHTML = `El resultado va a ser ${total}`;
    
    if(isNaN(total)){
        getresultado.innerHTML = `Debe introducir numeros`;
    }
};

function multiplicar() {
    const forma = document.querySelector('#forma');
    let operandoA = forma.operandoA;
    let operandoB = forma.operandoB;
    let total = parseInt(operandoA.value) * parseInt(operandoB.value);
    let getresultado = document.querySelector('#resultado');
    getresultado.innerHTML = `El resultado va a ser ${total}`;
    
    if(isNaN(total)){
        getresultado.innerHTML = `Debe introducir numeros`;
    }

}

function dividir(){
    const forma = document.querySelector('#forma');
    let operandoA = forma.operandoA;
    let operandoB = forma.operandoB;
    let total = parseInt(operandoA.value) / parseInt(operandoB.value);
    let getresultado = document.querySelector('#resultado');
    getresultado.innerHTML = `El resultado va a ser ${total}`;
    
    if(isNaN(total)){
        getresultado.innerHTML = `Debe introducir numeros`;
    }


}
