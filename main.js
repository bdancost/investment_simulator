// Requisito 1 : Simulação de Investimentos
// ❖ Crie uma função que simule o rendimento de um investimento com base em um valor inicial, uma taxa mensal de rendimento e um período de meses.
// ❖ A função deve retornar o saldo final após o período especificado, com duas casas decimais.
// Função: simularInvestimento

const valorInicial = 1000; // Valor inicial investido
const taxaMensal = 1.5; // Taxa mensal de rendimento em %
const meses = 12; // Duração do investimento
const metaInvestimento = 1500; // Meta para o saldo final de investimento
const metaOrcamento = 2000; // Meta de orçamento mensal

function simularInvestimento(valorInicial, taxaMensal, meses) {
  let saldoFinal = valorInicial;

  for (let index = 1; index <= meses; index++) {
    saldoFinal += saldoFinal * (taxaMensal / 100); //Rendimento composto
  }

  return saldoFinal.toFixed(2);
}

//console.log(simularInvestimento(valorInicial, taxaMensal, meses)); // 1195.62

// Requisito 2 : Gerenciamento de Despesas
// ❖ Crie uma função que receba um objeto representando as despesas mensais em diferentes categorias.
// ❖ A função deve calcular e retornar o total de despesas.
// Função: gerenciarDespesas

const despesas = {
  alimentacao: 500,
  transporte: 150,
  aluguel: 1200,
  lazer: 200,
};

function gerenciarDespesas(despesas) {
  let totalDespesas = 0;

  for (let categoria in despesas) {
    totalDespesas += despesas[categoria]; // Soma as despesas de cada categoria
  }
  return totalDespesas;
}

//console.log(gerenciarDespesas(despesas)); //2050

// Requisito 3 : Obtenção do Mês Atual
// ❖ Crie uma função que retorne o nome do mês atual em formato string
// ❖ A função deve utilizar um array de nomes dos meses para identificar o mês atual.
// Função: obterMesAtual

function obterMesAtual() {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const dataAtual = new Date(); // Criar uma instância e podemos utilizar os métodos desse objeto
  return meses[dataAtual.getMonth()]; // Retorna o mês atual do indice retornando a string correta
}

// console.log(obterMesAtual()); // Novembro

// Requisito 4: Geração de Relatório Financeiro
// ❖ Crie uma função que gera um relatório financeiro com base no investimento inicial, taxa de rendimento, duração de investimento, despesas mensais, meta de investimento e meta de orçamento
// ❖ O Relatório deve incluir:
//   ◻︎ O mês atual.
//   ◻︎ O saldo final do investimento.
//   ◻︎ O total de despesas.
//   ◻︎ Uma mensagem de economia ou excedente em relação ao orçamento.
//   ◻︎ Uma verificação se a a meta de investimento foi atingida.
//   ◻︎ Um resumo das despesas por categoria.
// Função: gerarRelatorio

function gerarRelatorio(
  investimentoInicial,
  taxa,
  meses,
  despesas,
  metaInvestimento,
  orcamento
) {
  const saldoInvestimento = simularInvestimento(
    investimentoInicial,
    taxa,
    meses
  );
  const totalDespesas = gerenciarDespesas(despesas);
  const mesAtual = obterMesAtual();
  console.log("=== Relatório Financeiro ===");
  console.log(`Mês: ${mesAtual}`);
  console.log(`Saldo final de investimento: R$ ${saldoInvestimento}`);
  console.log(`Total de despesas: R$ ${totalDespesas}`);
}

console.log(gerarRelatorio(valorInicial, taxaMensal, meses, despesas));
