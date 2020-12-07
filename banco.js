var cliente ={
    rg: '00.000.000-0',
    cpf: '000.000.000-00',
    email: 'algum@email.br.com',
    telefone: '(00) 0000-0000',
    nome: 'Seu cleiton',
}
console.log('RG = ', cliente.rg);

var saldo = 500;
/*
function deposito(valorDeposito){
    saldo += valorDeposito;
    console.log('saldo atual =', saldo);
}
deposito(500)
*/
function saque(valorSaque, chequeEspecial){
    if(valorSaque < saldo){
        console.log('voce sacou o valor = ', valorSaque);
    }
    else if( valorSaque < saldo + chequeEspecial){
        console.log('voce sacou o valor = ', valorSaque, 'o limete do seu cheque especial e = ', (chequeEspecial + saldo)- valorSaque);
    } else {
        saldo -= valorSaque;
        console.log('saldo restante =', saldo);
    }
}
saque(900, 500);