const notaUm = 7
const notaDois = 7
const notaTres = 8
let mediaNotas = (notaUm + notaDois + notaTres) / 3

if (mediaNotas < 5) { console.log("Foi Reprovado!") }
else if (mediaNotas >= 5 && mediaNotas <= 7) { console.log("Ficou em Recuperação") }
else { console.log("passou de semestre") }

