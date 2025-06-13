try {
  console.log(NãoExisto);
} catch (err) {
  console.log("NãoExisto não existe");
}
console.log();

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisao ser números");
  }

  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (err) {
  console.log("Alguma coisa mais amigavel pro usuario");
}
