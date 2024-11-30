// Requisito 1 : Simulação de Investimentos
// ❖ Crie uma função que simule o rendimento de um investimento com base em um valor inicial, uma taxa mensal de rendimento e um período de meses.
// ❖ A função deve retornar o saldo final após o período especificado, com duas casas decimais.
// Função: simularInvestimento

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

  // Orçamento
  const economia = metaOrcamento - totalDespesas;
  if (economia > 0) {
    console.log(`Parabéns! Sua economia foi de R$ ${economia}`);
  } else {
    console.log(`Você excedeu o orçamento em R$ ${Math.abs(economia)}`);
  }

  // Investimento
  if (saldoInvestimento >= metaInvestimento) {
    console.log("Meta de investimento atingida!");
  } else {
    console.log("Você não atingiu a meta de investimento");
  }

  // Resumo das despesas
  console.log("=== Resumo das Despesas ===");
  for (const categoria in despesas) {
    console.log(
      `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R$ ${
        despesas[categoria]
      }`
    );
  }
}

// Requisito 5: Estrutura de Dados para Despesas
// ❖ Crie um objeto para armazenar as despesas mensais, utilizando categorias como alinhamento, transporte, aluguel e lazer.
// ❖ O objeto deve permitir fácil acesso e modificação das despesas.

const despesas = {
  condominio: 800,
  escola: 500,
  academia: 150,
  agua: 60,
  luz: 120,
  lazer: 200,
};

//Requisito 6: Entrada e Configuraçoes do Investimento

const valorInicial = 3000; // Valor inicial investido
const taxaMensal = 1.3; // Taxa mensal de rendimento em %
const meses = 12; // Duração do investimento
const metaInvestimento = 2000; // Meta para o saldo final de investimento
const metaOrcamento = 1500; // Meta de orçamento mensal

//Requisito 7: Execução do Relatório
gerarRelatorio(
  valorInicial,
  taxaMensal,
  meses,
  despesas,
  metaInvestimento,
  metaOrcamento
);
