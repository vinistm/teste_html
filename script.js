function compararListas() {
  var lista1 = document.getElementById("lista1").value;
  var lista2 = document.getElementById("lista2").value;

  var numeros1 = lista1.split("\n").map(Number);
  var numeros2 = lista2.split("\n").map(Number);

  var numerosAusentes = [];

  for (var i = 0; i < numeros1.length; i++) {
    if (!numeros2.includes(numeros1[i])) {
      numerosAusentes.push(numeros1[i]);
    }
  }

  for (var j = 0; j < numeros2.length; j++) {
    if (
      !numeros1.includes(numeros2[j]) &&
      !numerosAusentes.includes(numeros2[j])
    ) {
      numerosAusentes.push(numeros2[j]);
    }
  }

  document.getElementById("numerosAusentes").value = numerosAusentes.join("\n");

  // Atualizar quantidade de itens
  document.getElementById("qtdLista1").textContent = numeros1.length;
  document.getElementById("qtdLista2").textContent = numeros2.length;
  document.getElementById("qtdNumerosAusentes").textContent =
    numerosAusentes.length;

  // Adicionar classes de estilo aos elementos da lista 1
  var elementosLista1 = document.querySelectorAll("#lista1");
  for (var k = 0; k < elementosLista1.length; k++) {
    var numero = elementosLista1[k].value;
    if (numerosAusentes.includes(Number(numero))) {
      elementosLista1[k].classList.add("amarelo");
      elementosLista1[k].classList.remove("verde");
    } else if (numeros2.includes(Number(numero))) {
      elementosLista1[k].classList.add("verde");
      elementosLista1[k].classList.remove("amarelo");
    } else {
      elementosLista1[k].classList.remove("verde", "amarelo");
    }
  }
}
