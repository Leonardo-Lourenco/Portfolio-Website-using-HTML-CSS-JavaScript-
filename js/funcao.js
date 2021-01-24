
function toggleMenu(){
	const menuEfeito = document.querySelector('.fundo-menu'); // função para alterar as imagens do burguer abbrir e fechar
	const sidebar = document.querySelector('.sidebar');
	menuEfeito.classList.toggle('active') // está funcão alteras as imagens do Menu Burguer
	sidebar.classList.toggle('active') // esta funcao é para abrir e ocultar o menu
}