let extrato = [];
//valores

//Banco do João
let saldoDoUsuario = 400;

function debitarDinheiro(valor) {
  console.log("debitar valor:", valor);
  // caso nao queira deixar o saldo negativo
  if (valor < saldoDoUsuario) {
    saldoDoUsuario = saldoDoUsuario - valor;
    salvarTransacao(valor, "saque");
  } else {
    console.log("Saldo insuficiente");
  }
}

function consultarSaldo() {
  console.log("seu saldo é:", saldoDoUsuario);
  //melhor implementacao para tratar com texto
  //console.log(`seu saldo é: ${saldoDoUsuario}`)
  return saldoDoUsuario;
}

function creditarDinheiro(valor) {
  console.log("creditar valor:", valor);
  saldoDoUsuario = saldoDoUsuario + valor;
  salvarTransacao(valor, "deposito");
}

//Comprou pao
debitarDinheiro();

//consultar o saldo
consultarSaldo();

//Recebeu salario
//creditarValor(8000);

consultarSaldo();

//implementar um sistema de extrato
function salvarTransacao(valor, tipo) {
  const textoExtrato = `${tipo} - valor: ${valor}`;
  // tambem pode fazer assim :
  // const textoExtrato = "Tipo: "+ nome +" - Valor :"+ valor
  extrato.push(textoExtrato);
}

//exemplo platico com o return
function consultarExtrato() {
  return extrato;
}
