
document.querySelector('button').addEventListener('click', ()=> {
    const numeroSorteado1 = parseInt(Math.random()*100)
    const numeroSorteado2 = parseInt(Math.random()*100)
    document.querySelector('#exibirNumero1').textContent = numeroSorteado1
    document.querySelector('#exibirNumero2').textContent = numeroSorteado2
    document.querySelector('#soma').textContent = numeroSorteado1+numeroSorteado2
    document.querySelector('#produto').textContent = numeroSorteado1*numeroSorteado2
    document.querySelector('#divisao').textContent = (numeroSorteado1/numeroSorteado2).toFixed(2)
})