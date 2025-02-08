const calcular = document.getElementById('calcular');

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;  
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (!nome || altura <= 0 || peso <= 0) {
        resultado.textContent = 'Preencha todos os campos corretamente!';
        return;
    }

    const imc  = calcularValorIMC(peso, altura);
    const classificacao = classificarIMC(imc);

    resultado.textContent = `${nome} seu IMC é ${imc} e você está ${classificacao}`;

}

function calcularValorIMC(peso, altura) {
    return (peso / Math.pow(altura, 2)).toFixed(1);
}

function classificarIMC(imc) {
    if (imc < 18.5) return 'abaixo do peso.';
    if (imc < 25) return 'com peso ideal. Parabéns!!';
    if (imc < 30) return 'levemente acima do peso.';
    if (imc < 35) return 'com obesidade grau I.';
    if (imc < 40) return 'com obesidade grau II.';
    return 'com obesidade grau III. Cuidado!!';
}

calcular.addEventListener('click', calcularIMC);

    // if (nome != '' && altura != '' && peso != '') {
        
    //     const valorIMC = (peso / Math.pow(altura, 2)).toFixed(1);

    //     let classficacao = '';

    //     if (valorIMC < 18.5) {
    //         classficacao = 'abaixo do peso.'
    //     } else if (valorIMC >= 18.5 && valorIMC < 25) {
    //         classficacao = 'com peso ideal. Parabéns!!'
    //     } else if (valorIMC >= 25 && valorIMC < 30) {
    //         classficacao = 'levemente acima do peso.'
    //     } else if (valorIMC >= 30 && valorIMC < 35) {
    //         classficacao = 'com obesidade grau I.'
    //     } else if (valorIMC >= 35 && valorIMC < 40) {
    //         classficacao = 'com obesidade grau II.'
    //     } else if (valorIMC >= 40) {
    //         classficacao = 'com obesidade grau III. Cuidado!!'
    //     }

    //     resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classficacao}`;

    // } else {
    //     resultado.textContent = 'Preencha todos os campos!';
    // }
    


