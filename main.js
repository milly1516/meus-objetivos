const botoes = document.querySelectorAll('.botao');
const abas = document.querySelectorAll('.aba-conteudo');

// Lógica de alternância das abas
botoes.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('ativo'));
    abas.forEach(a => a.classList.remove('ativo'));

    botao.classList.add('ativo');
    abas[indice].classList.add('ativo');
  });
});

// Prazos alvos para cada objetivo
const tempos = [
  new Date("2026-12-31T23:59:59"),
  new Date("2026-10-15T23:59:59"),
  new Date("2026-11-20T23:59:59"),
  new Date("2026-09-01T23:59:59")
];

function calculaTempo(tempoFinal) {
  const tempoAtual = new Date();
  const diferenca = tempoFinal - tempoAtual;

  if (diferenca <= 0) {
    return "Prazo finalizado!";
  }

  const segundos = Math.floor((diferenca / 1000) % 60);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  return `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

function atualizaCronometro() {
  for (let i = 0; i < tempos.length; i++) {
    const elemento = document.querySelector(`#tempo${i}`);
    if (elemento) {
      elemento.textContent = calculaTempo(tempos[i]);
    }
  }
}

// Inicializa e atualiza a cada segundo
atualizaCronometro();
setInterval(atualizaCronometro, 1000);