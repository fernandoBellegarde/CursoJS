/*
Implemente a função verificarPalavra, que receba uma frase, e uma palavra de busca e:

- Retorna `"A frase é muito curta"` se o comprimento da frase for menor que 5;
- Retorna `"A frase contém a palavra de busca"` se a `palavraBusca` estiver contida dentro de frase (ignorando maiúsculas e minúsculas);
- Retorna `"A frase não contém a palavra de busca"` caso contrário;
- Remove espaços extras no início e no final da frase antes de realizar a verificação.
*/

function verificarPalavra(frase, palavraBusca) {
  frase = frase.trim();
	if (frase.length < 5) {
    return 'A frase é muito curta';
  }

  if (frase.toLowerCase().includes(palavraBusca.toLowerCase())) {
    return 'A frase contém a palavra de busca';
  } else {
    return 'A frase não contém a palavra de busca';
  }
}

verificarPalavra("   JavaScript  ", "script") // "A palavra contém a palavra de busca"
verificarPalavra("node", "script") // "A palavra é muito curta"