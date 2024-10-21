document.addEventListener('DOMContentLoaded', () => {
    let menuDesplegable = document.getElementById('menuDesplegable');
    let listaDesplegable = document.getElementById('listaDesplegable');
    
    menuDesplegable.addEventListener('click', () => {
        listaDesplegable.classList.toggle('d-block');
    });
});
