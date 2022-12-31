let num = Math.floor(Math.random() * (10 - 0 + 1) + 1);
let resp = prompt('Qual número eu estou pensando?')
let chances = 3;
if (resp == num) {
    alert('Parabéns, você acertou!')
}
else {

    while (chances > 1 && resp != num) {
        --chances;
        alert('você errou!')
        resp = prompt(`ainda tem ${chances} chances de acertar. Em qual numero eu estou pensando?`);
    }
    if (resp == num) {
        alert('Parabens, você acertou!')
    } else {
        alert(`O número era: ${num}`)
    }

}