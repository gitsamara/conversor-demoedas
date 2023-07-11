function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);
  var valorEmDolar = valorEmReal / 4.8729;

  var valorConvertido = valorEmDolar.toFixed(2);

  console.log(valorConvertido);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dólar é $" + valorConvertido;
  elementoValorConvertido.innerHTML = valorConvertido;
}
