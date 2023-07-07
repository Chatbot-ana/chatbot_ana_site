document.body.style.zoom = "80%";

document.addEventListener('DOMContentLoaded', function() {
  var botao = document.getElementsByClassName('botao')[0];
  var add = document.getElementById('add');
  var audioFrame = document.getElementById('audio1');
  var alternarC = true;
  const audioLink = document.querySelector('.audio');

  function alternar() {
    if (alternarC) {
      add.style.display = 'block';
      botao.style.width = '250px';
      botao.value = 'Sair da seção';
      audioFrame.style.display = 'none'; // Esconde o áudio
      toggleAudio(false); // Oculta o áudio
      alternarC = false;
    } else {
      add.style.display = 'none';
      botao.value = 'Entrar na seção (chat no lado direito)';
      botao.style.width = '420px';
      audioFrame.style.display = 'flex'; // Mostra o áudio novamente
      toggleAudio(true); // Mostra o áudio
      alternarC = true;
      recarregarPagina();
    }
  }

  function toggleAudio(show) {
    if (show) {
      audioFrame.style.display = 'block'; // Mostra o áudio
    } else {
      audioFrame.style.display = 'none'; // Oculta o áudio
    }
  }

  botao.addEventListener('click', function() {
    alternar();
  });

  function recarregarPagina() {
    location.reload();
  }

  audioLink.addEventListener('click', function(event) {
    event.preventDefault();

    if (audioFrame.style.display === 'none') {
      toggleAudio(true); // Mostra o áudio
      botao.style.display = 'none'; // Esconde o botão
    } else {
      toggleAudio(false); // Oculta o áudio
      botao.style.display = 'block'; // Mostra o botão novamente
    }
  });
});

