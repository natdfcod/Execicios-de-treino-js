document.querySelector('button').addEventListener('click', ()=> {
    const numeroSorteado = parseInt(Math.random()*100)
    document.querySelector('#exibirNumero').textContent = numeroSorteado
    document.querySelector('#antecessor').textContent = numeroSorteado-1
    document.querySelector('#sucessor').textContent = numeroSorteado+1
})