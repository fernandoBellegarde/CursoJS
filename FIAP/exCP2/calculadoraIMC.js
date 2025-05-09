/*
Crie a função calcularIMC que receba peso e altura e retorne:

- `"Abaixo do peso"` se < 18.5
- `"Peso normal"` se entre 18.5 e 24.9
- `"Sobrepeso"` se entre 25 e 29.9
- `"Obesidade"` se ≥ 30
- `"Erro"` para dados inválidos

**Fórmula IMC**: peso / (altura * altura)
*/

function calcularIMC(peso, altura) {
  if (typeof peso !== 'number' || typeof altura !== 'number' || altura === 0){
	  return 'Erro';
	}
	
  const imc = peso / (altura * altura);
   if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc < 25) {
    return 'Peso normal';
  } else if (imc < 30) {
    return 'Sobrepeso';
  } else {
    return 'Obesidade';
  }
}
