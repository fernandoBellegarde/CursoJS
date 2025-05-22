const btnCurtir1 = document.getElementById("btnCurtir1")
const btnCurtir2 = document.getElementById('btnCurtir2')
const btnCurtir3 = document.getElementById('btnCurtir3')
const contador1 = document.getElementById('contador1')
const contador2 = document.getElementById('contador2')
const contador3 = document.getElementById('contador3')

btnCurtir1.addEventListener('click', function () {
  contador1.textContent = '1 curtida';
  btnCurtir1.textContent = 'Curtido 💖';
  btnCurtir1.disabled = true;

  const btnApagar = document.createElement('button');
  btnApagar.textContent = 'Apagar';
  btnApagar.classList.add('btn-apagar');

  // Encontra o contêiner pai do botão
  const container = btnCurtir1.parentElement;

  // Adiciona o botão de apagar ao comentário
  container.appendChild(btnApagar);

  // Evento de clique para remover o comentário
  btnApagar.addEventListener('click', function () {
    btnCurtir1.disabled = false; // Habilita o botão de curtir novamente
    btnApagar.remove(); // Remove o botão de apagar
  });
});

btnCurtir2.addEventListener('click', function () {
  contador2.textContent = '1 curtida';
  btnCurtir2.textContent = 'Curtido 💖';
  btnCurtir2.disabled = true;

  const btnApagar = document.createElement('button');
  btnApagar.textContent = 'Apagar';
  btnApagar.classList.add('btn-apagar');

  // Encontra o contêiner pai do botão
  const container = btnCurtir2.parentElement;

  // Adiciona o botão de apagar ao comentário
  container.appendChild(btnApagar);

  // Evento de clique para remover o comentário
  btnApagar.addEventListener('click', function () {
    btnCurtir2.disabled = false; // Habilita o botão de curtir novamente
    btnApagar.remove(); // Remove o botão de apagar
  });
})

btnCurtir3.addEventListener('click', function () {
  contador3.textContent = '1 curtida';
  btnCurtir3.textContent = 'Curtido 💖';
  btnCurtir3.disabled = true;

  const btnApagar = document.createElement('button');
  btnApagar.textContent = 'Apagar';
  btnApagar.classList.add('btn-apagar');

  // Encontra o contêiner pai do botão
  const container = btnCurtir3.parentElement;

  // Adiciona o botão de apagar ao comentário
  container.appendChild(btnApagar);

  // Evento de clique para remover o comentário
  btnApagar.addEventListener('click', function () {
    btnCurtir3.disabled = false; // Habilita o botão de curtir novamente
    btnApagar.remove(); // Remove o botão de apagar
  });
});