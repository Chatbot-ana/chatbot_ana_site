document.body.style.zoom = "80%";
document.addEventListener('DOMContentLoaded', function () {
    var botao = document.getElementsByClassName('botao')[0];
    var add = document.getElementById('add');
    var alternarC = true;

    function alternar() {
        if (alternarC) {
            add.style.display = 'block';
            botao.style.width = '250px'
            botao.value = 'Sair da seção';
            alternarC = false;
           
        } else {
            add.style.display = 'none';
            botao.value = 'Entrar na seção (chat no lado direito)';
            botao.style.width = '420px'
            alternarC = true; 
            recarregarPagina();
        }
    }

    botao.addEventListener('click', function () {
        alternar();
        
    });

    function recarregarPagina() {
        location.reload();
    }
});
