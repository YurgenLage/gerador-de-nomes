// Arrays de prefixos e sufixos predefinidos
const prefixos = [
    "Super", "Mega", "Ultra", "Speedy", "Pro", "Master", "Xtreme", "Shadow", "Dark", "King", "Queen", 
    "Cyber", "Robo", "Lord", "Night", "Golden", "Epic", "Mighty", "Iron", "Storm", "Thunder", "Fire", 
    "Soul", "Dark", "Phantom", "Lightning"
];

const sufixos = [
    "X", "Y", "Z", "1", "2", "3", "Alpha", "Beta", "Omega", "Max", "Viper", "Knight", "Hunter", 
    "Slayer", "Wolf", "Dragon", "Phoenix", "Titan", "Ace", "Star", "Warrior", "Fury", "Ranger", "Shadow"
];

// Função para gerar o nickname
function gerarNickname(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos (prefixo e sufixo do formulário)
    const prefixoInput = document.getElementById('prefixo').value.trim();
    const sufixoInput = document.getElementById('sufixo').value.trim();

    // Se o usuário não preencher os campos, usamos valores aleatórios dos arrays
    const prefixo = prefixoInput || prefixos[Math.floor(Math.random() * prefixos.length)];
    const sufixo = sufixoInput || sufixos[Math.floor(Math.random() * sufixos.length)];

    // Gera um número aleatório para o nickname
    const numeroAleatorio = Math.floor(Math.random() * 1000);

    // Combina o prefixo, o número aleatório e o sufixo
    let nicknameGerado = `${prefixo}Player${numeroAleatorio}${sufixo}`;

    // Exibe o nickname gerado
    document.getElementById('nickname').textContent = nicknameGerado;

    // Adiciona ao histórico
    adicionarAoHistorico(nicknameGerado);
}

// Função para adicionar o nickname ao histórico
function adicionarAoHistorico(nickname) {
    // Cria o item da lista
    const li = document.createElement('li');
    li.textContent = nickname;

    // Adiciona ao histórico
    const ul = document.getElementById('historico');
    ul.appendChild(li);

    // Atualiza o contador de históricos
    const count = document.getElementById('count');
    count.textContent = ul.children.length;
}

// Inicializa o efeito de partículas
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        shape: {
            type: 'circle',
        },
        color: {
            value: '#00c7b7',
        },
        size: {
            value: 4,
        },
        move: {
            speed: 1,
        },
    },
});
