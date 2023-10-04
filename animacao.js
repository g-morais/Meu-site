function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando'); // Alterado o seletor para .digitando
    ativaLetra(titulo);
}

document.addEventListener('DOMContentLoaded', function () {
    escrevendoLetra();
});







