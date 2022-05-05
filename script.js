//Bem vindo 
alert(`Seja bem vindo ao new Sistem Pedidos!`);

//Recebendo o nome do cliente
var nome;
if(nome = prompt(`Informe seu nome:`)){
    alert(`${nome}, faça cadastro para utilizar nosso sistema!`);
}

else{
    while(nome == ""){
    alert(`Você precisa informar seu nome!`);
    if(nome = prompt(`Informe seu nome para continuar:`)){
    alert(`${nome}, faça cadastro para utilizar nosso sistema!`);
    break;
    }
    }
}

//Cadastro e métodos de nome de usuário e senhas

//Criar nome de usuário
function nomeCriar(){
    if(usuario.nome = prompt(`Crie seu nome de usuário:`)){
    }
    else{
    while(usuario.nome == ""){
    alert(`Você ainda não criou seu nome de usuário!`);
    if(usuario.nome = prompt(`Crie seu nome de usuário para continuar:`)){
    break;
    }
    }
    }
}

//Criar senha para cadastro
function criarSenha(){
    if(usuario.senha = prompt(`Crie sua senha:`)){
    alert(`Você já pode fazer login!`);
    }
    else{
    while(usuario.senha == ""){
    alert(`Você ainda não criou sua senha!`);
    if(usuario.senha = prompt(`Crie sua senha para continuar:`)){
    alert(`Você já pode fazer Login!`);
    break;
    }
    }
    }
}
var usuario = {
               nome:nomeCriar,
               senha:criarSenha
}

nomeCriar();
criarSenha();

//Login métodos do Login nome e senha
//Login Nome usuário
function loginNome(){
    loginUsuario.nomeLogin = prompt(`Nome de usuário:`);
    if(loginUsuario.nomeLogin == usuario.nome){
    }
    else{
    while(loginUsuario.nomeLogin != usuario.nome){
    alert(`Nome de usuário incorreto!`);
    loginUsuario.nomeLogin = prompt(`Digite seu nome de usuário para continuar:`);
    if(loginUsuario.loginNome == usuario.nome){
    break;
    }
    }
    }
}

//Login senha
function loginSenha(){
    loginUsuario.senhaLogin = prompt(`Senha:`)
    if(loginUsuario.senhaLogin == usuario.senha){
    alert(`Bem vindo ${nome}!`);
    }
    else{
    while(loginUsuario.loginSenha != usuario.senha){
    alert(`Senha incorreta!`);
    loginUsuario.senhaLogin = prompt(`Digite sua senha para continuar:`);
    if(loginUsuario.senhaLogin == usuario.senha){
    alert(`Bem vindo ${nome}`);
    break;
    }
    }
    }
}

//Objeto Login
var loginUsuario = {
                    nomeLogin: loginNome,
                    senhaLogin: loginSenha
}

loginNome();
loginSenha();

//Login efetuado
//Cardápio com os lanches
alert(`Cardápio Lanches:\n
                Lanche: Big Bacon\n
                Lanche: Chobo Lobo\n
                Lanche: Bacon Savero`);

//Array com os lanches e recebendo o pedido
var lanches = ["Big Bacon","Chobo Lobo","Bacon Savero"];
var pedidoLanches = prompt(`Peça seu lanche:`);

//indexOf no array 
var index_lanches = lanches.indexOf(pedidoLanches);
if(index_lanches != -1){
}

else{
    while(index_lanches == -1){
    alert(`Não temos esse lanche aqui!`);
    pedidoLanches = prompt(`Peça algum lanche do cardápio:`);
    index_lanches = lanches.indexOf(pedidoLanches);
    if(index_lanches != -1){
    break;
    }
    }
}

//Cardápio com as bebidas e Array com as bebidas e recebendo o pedido
alert(`Cardápio de Bebidas:\n
                   Bebida: Coca\n
                   Bebida: Kuat\n
                   Bebida: Morango Refri`);

var bebidas = ["Coca","Kuat","Morango Refri"];
var pedidoBebida = prompt(`Peça sua bebida:`);

//IndexOf Array bebidas
var index_bebidas = bebidas.indexOf(pedidoBebida);
if(index_bebidas != -1){
    alert(`Seu pedido foi realizado :)`);
}

else{
    while(index_bebidas == -1){
    alert(`Não temos essa bebida aqui!`);
    pedidoBebida = prompt(`Peça alguma bebida do cardápio:`);
    index_bebidas = bebidas.indexOf(pedidoBebida);
    if(index_bebidas != -1){
    alert(`Seu pedido foi realizado :)`);
    break;
    }
    }
}

//Receber a localização para a entrega do pedido
alert(`Tudo certo ${nome}, agora só precisamos saber onde entregar seu pedido :)`);

//Recebendo a cidade
var cidade;
if(cidade = prompt(`Cidade:`)){
}

else{
    while(cidade == ""){
    alert(`Você ainda não informou a cidade para a entrega do pedido!`);
    if(cidade = prompt(`Informe sua cidade para continuar:`)){
    break;
    }
    }
}

//Recebendo o bairro
var bairro;
if(bairro = prompt(`Bairro:`)){
}

else{
    while(bairro == ""){
    alert(`Você ainda não informou o bairro para a entrega!`);
    if(bairro = prompt(`Informe seu bairro para continuar:`)){
    break;
    }
    }
}

//Recebendo rua
var rua;
if(rua = prompt(`Rua:`)){
}

else{
    while(rua == ""){
    alert(`Você ainda não informou a rua para a entrega!`);
    if(rua = prompt(`Informe sua rua para continuar:`)){
    break;
    }
    }
}

//Recebendo número
var numeroCasa;
if(numeroCasa = prompt(`Número da casa:`)){
}

else{
    while(numeroCasa == ""){
    alert(`Você ainda não informou o número da sua casa!`);
    if(numeroCasa = prompt(`Informe o número de sua casa para continuar:`)){
    break;
    }
    }
}

//Informando ao sistema o pedido e também onde entregar
document.body.innerHTML = `<h1>Pedido</h1>
                           <p>O cliente ${nome} pediu um lanche: ${pedidoLanches}</p>
                           <p>E um refrigerante: ${pedidoBebida}</p>
                           <br>
                           <h2>Entrega em </h2>
                           <p>Cidade: ${cidade}</p>
                           <p>Bairro: ${bairro}</p>
                           <p>Rua: ${rua}</p>
                           <p>Número da  casa: ${numeroCasa}</p>`;
