/*
A função abaixo tenta retornar uma saudação personalizada para o usuário. O nome do usuário pode ser fornecido como parâmetro. Se o nome não for fornecido ou for `null` ou `undefined`, a saudação deve ser feita com "Visitante".

Além disso, a saudação só deve ser exibida se o usuário estiver logado (`isLogged` for `true`). Se não estiver logado, a função não deve retornar nada.

A função tem erros e comportamentos inesperados. Encontre e corrija os problemas usando **short-circuit evaluation** (avaliação de curto-circuito com `&&` ou `||`) e **nullish coalescing (`??`)**.

vem nesse link ex7 para corrigir certinho: https://cherry-client-b8f.notion.site/CP2-Javascript-COM-RESPOSTA-1e6911d84e0d805ca413f82ba7b9bdb2
*/

function saudacao(nome, isLogged) {
  nome = nome ?? "Visitante";
  return isLogged && "Olá, " + nome + "!";
}