    var clientes = [];
    var cliente = {}
function cadastrarCliente(cliente){
    clientes.push(cliente);
}  
function preencherCliente(){
    cliente.nome = prompt ("digite seu nome");
    cliente.cpf = prompt ("digite seu cpf");
    cliente.rg = prompt ("digite seu rg");
    cliente.email = prompt ("digite seu email");
}
preencherCliente()
cadastrarCliente(cliente);
console.log(clientes)

clientes.push(cliente);
    for(var contador = 0; contador < clientes.length; contador++) {
        var clientesDaLista = clientes[contador]
        console.log("\nNome: ", clientesDaLista.nome, "\nCPF: ", clientesDaLista.cpf, "\nEmail:", clientesDaLista.email, "\nRG: ", clientesDaLista.rg);
}