// Botao aplicar desconto
const btnDesconto = document.getElementById("btnDesconto");
const setaCima = document.getElementById("setaCima");
const setaBaixo = document.getElementById("setaBaixo");

btnDesconto.addEventListener("click", function () {
  const boxDescount = document.getElementById("boxDescount");
  if (boxDescount.style.display === "none" || boxDescount.style.display === "") {
    boxDescount.style.display = "block";
    setaCima.style.display = "block";
    setaBaixo.style.display = "none";
  } else {
    boxDescount.style.display = "none";
    setaCima.style.display = "none";
    setaBaixo.style.display = "block";
  }
});

// Cupons de desconto
const discountCupons = {
  DESCONTO10: 0.1,
  DESCONTO20: 0.2,
  DESCONTO50: 0.5,
};

function applyDescount() {
  const descountCode = document.getElementById("descontoText").value.trim().toUpperCase();
  const mensagemDeDesconto = document.getElementById("paragrafoDesconto");
  const paragrafoTotalDesconto = document.getElementById("precoDescontoTotal");

  if (discountCupons[descountCode]) {
    const discount = discountCupons[descountCode];
    const originalPrice = 1200;
    const discountPrice = originalPrice * (1 - discount);

    paragrafoTotalDesconto.innerHTML = `Preço Total: ${discountPrice.toFixed(2)}`;
    mensagemDeDesconto.style.color = "green"
    mensagemDeDesconto.innerHTML = `Desconto de <b>${descountCode}</b> foi aplicado`;

    localStorage.setItem("Descount", descountCode);
    document.getElementById("descontoText").value = "";
  } else {
    mensagemDeDesconto.style.color = "red"
    mensagemDeDesconto.innerText = "Cupom Inválido"
  }
}
