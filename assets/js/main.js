// ============================== Formulario
const form = document.querySelector("[data-form]");

// ============================== Função principal
function handleSubmit(event) {
  event.preventDefault();

  // ============================== Capturando elemento
  const elementInputPeso = document.querySelector("[data-input-peso]");
  const elementInputAltura = document.querySelector("[data-input-altura]");

  // ============================== Capturando valor e convertendo para numero

  const peso = Number(elementInputPeso.value);
  const altura = Number.parseFloat(elementInputAltura.value);

  elementInputPeso.value = "";
  elementInputAltura.value = "";

  const valorIMC = getImc(peso, altura);
  const nivelIMC = getNivelImc(valorIMC);

  if (!peso) {
    setResult("Peso Invalido", false);
    return;
  }

  if (!altura) {
    setResult("Altura Invalida", false);
    return;
  }

  if (valorIMC > 34.9) {
    const mensagem = `Seu IMC é de ${valorIMC} ${nivelIMC}`;
    setResult(mensagem, true);
    red();
  } else if (valorIMC > 29.9) {
    const mensagem = `Seu IMC é de ${valorIMC} ${nivelIMC}`;
    setResult(mensagem, true);
    orange();
  } else if (valorIMC > 24.9) {
    const mensagem = `Seu IMC é de ${valorIMC} ${nivelIMC}`;
    setResult(mensagem, true);
    yellow();
  } else if (valorIMC > 18.5) {
    const mensagem = `Seu IMC é de ${valorIMC} ${nivelIMC}`;
    setResult(mensagem, true);
    green();
  } else {
    const mensagem = `Seu IMC é de ${valorIMC} ${nivelIMC}`;
    setResult(mensagem, true);
    blue();
  }
}
// ============================== Enviando formulario
form.addEventListener("submit", handleSubmit);

// ============================== Nivel
function getNivelImc(imc) {
  const nivel = [
    "Desnutrição",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade",
    "Obesidade Mórbida",
  ];

  // ============================== Condição

  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 15.5) return nivel[0];
}

// ============================== Calculo do IMC
function getImc(peso, altura) {
  return (peso / Math.pow(altura, 2)).toFixed(2);
}

// ============================== Img
const elementResultado = document.querySelector("[data-resultado]");
const elementImg = document.querySelector("[data-img]");

function red() {
  elementImg.setAttribute("src", "assets/img/red.png");
  elementResultado.classList.add("red");

  elementResultado.classList.remove("green");
  elementResultado.classList.remove("yellow");
  elementResultado.classList.remove("orange");
  elementResultado.classList.remove("blue");
}
function green() {
  elementImg.setAttribute("src", "assets/img/green.png");
  elementResultado.classList.add("green");

  elementResultado.classList.remove("red");
  elementResultado.classList.remove("yellow");
  elementResultado.classList.remove("orange");
  elementResultado.classList.remove("blue");
}
function yellow() {
  elementImg.setAttribute("src", "assets/img/yellow.png");
  elementResultado.classList.add("yellow");

  elementResultado.classList.remove("red");
  elementResultado.classList.remove("green");
  elementResultado.classList.remove("orange");
  elementResultado.classList.remove("blue");
}
function orange() {
  elementImg.setAttribute("src", "assets/img/orange.png");
  elementResultado.classList.add("orange");

  elementResultado.classList.remove("red");
  elementResultado.classList.remove("green");
  elementResultado.classList.remove("yellow");
  elementResultado.classList.remove("blue");
}
function blue() {
  elementImg.setAttribute("src", "assets/img/blue.png");
  elementResultado.classList.add("blue");

  elementResultado.classList.remove("red");
  elementResultado.classList.remove("green");
  elementResultado.classList.remove("yellow");
  elementResultado.classList.remove("orange");
}

// ============================== Remover efeito
function effect() {
  const elementImg = document.querySelector("[data-text]");
  elementImg.style.display = "none";
}

// ============================== Resultado textarea
function setResult(msg, isValid) {
  elementResultado.innerHTML = msg;
  effect();

  if (!isValid) {
    elementResultado.classList.add("erro");
    elementResultado.classList.add("erro");
  } else {
    elementResultado.classList.remove("erro");
    elementResultado.classList.remove("erro");
  }
}
