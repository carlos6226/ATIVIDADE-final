// Obter os elementos dos inputs
const nomeInput = document.getElementById("nome");
const nickInput = document.getElementById("nick");
const jogoInput = document.getElementById("jogo");

// Adicionar evento de "keydown" para o input de nome
nomeInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let nome = nomeInput.value;
        let nick = nickInput.value;
        let jogo = jogoInput.value;
        alert("Oi " + nome + "! Seu nick nos jogos é " + nick + "! Seu jogo preferido é " + jogo + "!" );
    }
});

// Adicionar evento de "keydown" para o input de nick
corInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let nome = nomeInput.value;
        let nick = nickInput.value;
        let jogo = jogoInput.value;
        alert("Oi " + nome + "! Seu nick nos jogos é " + nick + "! Seu jogo preferido é " + jogo + "!" );
    }
});

// Adicionar evento de "keydown" para o input de jogo
corInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let nome = nomeInput.value;
        let nick = nickInput.value;
        let jogo = jogoInput.value;
        alert("Oi " + nome + "! Seu nick nos jogos é " + nick + "! Seu jogo preferido é " + jogo + "!" );
    }
});