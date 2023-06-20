function atualizarLista1() {
  var lista1 = document.getElementById("lista1").value;
  var numerosLista1 = lista1.split("\n").map(Number);

  // Atualizar quantidade de itens
  document.getElementById("qtdLista1").textContent = numerosLista1.length;

  // Remover destaque vermelho dos números existentes
  var elementosLista1 = document.querySelectorAll("#lista1");
  for (var i = 0; i < elementosLista1.length; i++) {
    elementosLista1[i].classList.remove("vermelho");
  }
}

function compararListas() {
  var lista1 = document.getElementById("lista1").value;
  var lista2 = document.getElementById("lista2").value;

  var numerosLista1 = lista1.split("\n").map(Number);
  var numerosLista2 = lista2.split("\n").map(Number);

  var numerosAusentes = [];

  for (var i = 0; i < numerosLista1.length; i++) {
    if (!numerosLista2.includes(numerosLista1[i])) {
      numerosAusentes.push(numerosLista1[i]);
    }
  }

  for (var j = 0; j < numerosLista2.length; j++) {
    if (
      !numerosLista1.includes(numerosLista2[j]) &&
      !numerosAusentes.includes(numerosLista2[j])
    ) {
      numerosAusentes.push(numerosLista2[j]);
    }
  }

  document.getElementById("numerosAusentes").value = numerosAusentes.join("\n");

  // Atualizar quantidade de itens
  document.getElementById("qtdLista2").textContent = numerosLista2.length;
  document.getElementById("qtdNumerosAusentes").textContent =
    numerosAusentes.length;

  // Destacar números ausentes em vermelho na Lista 1
  var elementosLista1 = document.querySelectorAll("#lista1");
  for (var k = 0; k < elementosLista1.length; k++) {
    var numero = elementosLista1[k].textContent;
    if (numerosAusentes.includes(Number(numero))) {
      elementosLista1[k].classList.add("vermelho");
    } else {
      elementosLista1[k].classList.remove("vermelho");
    }
  }
}
