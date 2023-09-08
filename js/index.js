function calcular() {
  const produto = document.getElementById("prod").value;
  const quantidade = parseInt(document.getElementById("qtd").value);
  const valor = parseFloat(document.getElementById("valor").value);

  if (produto && !isNaN(quantidade) && !isNaN(valor)) {
      const subtotal = quantidade * valor;
      const notaFiscalList = document.getElementById("itens");  

      const listItem = document.createElement("li");
      listItem.textContent = `${produto} - Quantidade: ${quantidade} - Valor: R$ ${valor.toFixed(2)} - Subtotal: R$ ${subtotal.toFixed(2)}`;
      notaFiscalList.appendChild(listItem);

      const totalElement = document.getElementById("total");
      const totalAtual = parseFloat(totalElement.textContent || "0");
      const novoTotal = totalAtual + subtotal;
      totalElement.textContent = novoTotal.toFixed(2);

      document.getElementById("prod").value = "";
      document.getElementById("qtd").value = "";
      document.getElementById("valor").value = "";
  } else {
      alert("Por favor, preencha todos os campos corretamente.");
  }
}
