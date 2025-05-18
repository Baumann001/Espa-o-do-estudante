const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuPrincipal = document.querySelector('.menu-principal');

if (menuHamburguer && menuPrincipal) {
    menuHamburguer.addEventListener('click', () => {
        menuHamburguer.classList.toggle('aberto');
        menuPrincipal.classList.toggle('mostrar');
    });
} else {
    console.error("Elementos .menu-hamburguer ou .menu-principal não foram encontrados no HTML.");
}