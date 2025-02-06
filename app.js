let amigos = [];
let listaDeAmigos = document.getElementById('listaAmigos');

function adicionarAmigo() {
  let campo = document.querySelector('#amigo');
  let amigo = campo.value;

  if (!amigo) {
    alert('Por favor, insira um nome.');
  } else {
    amigos.push(amigo);
    campo.value = '';
    listaDeAmigos.innerHTML = '';

    amigos.forEach(amigo => {
      listaDeAmigos.innerHTML += `
        <li>${amigo}</li>
      `;
    });
  }
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  if (!amigos.length || amigos.length < 2) {
    alert('Por favor, insira dois nomes ou mais na lista.');
  } else {
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    listaDeAmigos.innerHTML = '';
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigos[numeroSorteado]}`;
    amigos = [];
  }
}
