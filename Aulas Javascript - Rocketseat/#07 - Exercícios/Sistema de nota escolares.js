let noteStudend = 59;

let scoreError = noteStudend > 100;
let scoreA = noteStudend >= 90;
let scoreB = noteStudend >= 80;
let scoreC = noteStudend >= 70;
let scoreD = noteStudend >= 60;

if (scoreError) {
  console.log("[ERRO] Por favor, insira um valor entre 0-100");
} else if (scoreA) {
  console.log(`A nota do aluno foi ${noteStudend}, ficou com A`);
} else if (scoreB) {
  console.log(`A nota do aluno foi ${noteStudend}, ficou com B`);
} else if (scoreC) {
  console.log(`A nota do aluno foi ${noteStudend}, ficou com C`);
} else if (scoreD) {
  console.log(`A nota do aluno foi ${noteStudend}, ficou com D`);
} else {
  console.log(`A nota do aluno foi ${noteStudend}, ficou com F`);
}
