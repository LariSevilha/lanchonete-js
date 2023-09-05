const cadastrarButton = document.getElementById("cadastrar");
const produtoInput = document.getElementById("produto");
const quantidadeInput = document.getElementById("quantidade");
const precoInput = document.getElementById("preco");
const itensList = document.getElementById("itens");
const totalParaPagar = document.getElementById("total");

let total = 0;

cadastrarButton.addEventListener("click", () => {
  const produto = produtoInput.value;
  const quantidade = parseInt(quantidadeInput.value);
  const precoInputValue = precoInput.value.replace(',', '.'); 
  const preco = parseFloat(precoInputValue);

  if (produto && quantidade && preco) {
    const valorTotal = quantidade * preco;
    total += valorTotal;

    const item = document.createElement("li");
    item.innerText = `${produto} - ${quantidade} unidades por R$ ${preco.toFixed(
      2
    )} cada = R$ ${valorTotal.toFixed(2)}`;
    itensList.appendChild(item);

    totalParaPagar.innerText = `Total a pagar: R$ ${total.toFixed(2)}`;

    produtoInput.value = "";
    quantidadeInput.value = "";
    precoInput.value = "";
  }
});
