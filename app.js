let amigos = [];

function adicionarAmigo() {
  let campo = document.querySelector('#amigo');
  let amigo = campo.value;
  let listaDeAmigos = document.getElementById('listaAmigos');

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
