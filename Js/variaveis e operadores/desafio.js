// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = gets();
// Cria um loop de repetição para que o usuário possa tentar novamente caso escolha uma ação inválida:
while (true) {
  // Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
  const acaoEscolhida = gets();
  // Converte a ação escolhida para lowercase para que a comparação seja case-insensitive:
  // Verifica a ação escolhida:
  if (acaoEscolhida === "Atacar" || acaoEscolhida === "Fugir") {
    // Exibe a mensagem correspondente à ação escolhida:
    console.log(`${nomePersonagem} escolheu ${acaoEscolhida}!`);
    break;
  } else{
    // Exibe uma mensagem de erro e permite que o usuário tente novamente:
    console.log(`Tente novamente`);
  }
}