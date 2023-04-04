/*Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.
EXERCÍCIO OPCIONAL
Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

Mas ele é 100% opcional.

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?*/

var name = prompt("Qual seu nome?")
var age = prompt("Qual sua idade?")
var language = prompt("Qual linguagem de programação você está, estudando?")

console.log(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}`)
var like = prompt(`Você gosta de estudar ${language}? 0 p/ sim e 1 p/ não`)

if (like == 0) {
  console.log("Muito bom! Continue estudando e você terá muito sucesso.")
}
else {
  console.log("Ahh que pena... Já tentou aprender outras linguagens?")
}