const rodri_circulo = document.getElementById('circulo');
let tamanho_rodri = 20;  // Iniciando o tamanho do círculo

rodri_circulo.addEventListener('dblclick', () => {
    rodri_circulo.style.width = `${tamanho_rodri}px`;
    rodri_circulo.style.height = `${tamanho_rodri}px`;
    rodri_circulo.style.borderRadius = '50%';  // Mantém o círculo perfeito
    tamanho_rodri = tamanho_rodri + 20;  // Aumenta o tamanho por 20px
});

function mudarCor(novacor) {
    var elemento= document.getElementById("para1")
    elemento.style.backgroundColor=novacor;
    elemento.style.display='inline';
}