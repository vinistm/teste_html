function compararListas() {
  var lista1 = document.getElementById("lista1").value;
  var lista2 = document.getElementById("lista2").value;

  var linhasLista1 = lista1.split("\n");
  var linhasLista2 = lista2.split("\n");

  var numerosLista1 = [];
  var numerosLista2 = [];

  for (var i = 0; i < linhasLista1.length; i++) {
    var valores = linhasLista1[i].split("\t");
    if (valores.length === 2) {
      var produto = valores[0].trim();
      var valor = valores[1].trim();
      numerosLista1.push({ produto: produto, valor: valor });
    }
  }

  for (var j = 0; j < linhasLista2.length; j++) {
    var valores = linhasLista2[j].split("\t");
    if (valores.length === 2) {
      var produto = valores[0].trim();
      var valor = valores[1].trim();
      numerosLista2.push({ produto: produto, valor: valor });
    }
  }

  var numerosAusentes = [];

  for (var k = 0; k < numerosLista1.length; k++) {
    var produto = numerosLista1[k].produto;
    var valor = numerosLista1[k].valor;
    var encontrado = false;

    for (var l = 0; l < numerosLista2.length; l++) {
      if (numerosLista2[l].produto === produto) {
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      numerosAusentes.push({ produto: produto, valor: valor });
    }
  }

  var numerosAusentesTexto = numerosAusentes.map(function (numero) {
    return numero.produto + "\t" + numero.valor;
  });

  document.getElementById("numerosAusentes").value =
    numerosAusentesTexto.join("\n");

  // Atualizar quantidade de itens
  document.getElementById("qtdLista1").textContent = numerosLista1.length;
  document.getElementById("qtdLista2").textContent = numerosLista2.length;
  document.getElementById("qtdNumerosAusentes").textContent =
    numerosAusentes.length;

  // Destacar números ausentes em vermelho na Lista 1
  var elementosLista1 = document.querySelectorAll("#lista1");
  for (var m = 0; m < elementosLista1.length; m++) {
    var linha = elementosLista1[m].textContent.split("\t")[0].trim();
    var encontrado = false;
    for (var n = 0; n < numerosAusentes.length; n++) {
      if (numerosAusentes[n].produto === linha) {
        encontrado = true;
        break;
      }
    }
    if (encontrado) {
      elementosLista1[m].classList.add("vermelho");
    } else {
      elementosLista1[m].classList.remove("vermelho");
    }
  }
}
