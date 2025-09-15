document.querySelector('button').addEventListener('click', ()=> {
    const numeroSorteado = parseInt(Math.random()*100)
    document.querySelector('#exibirNumero').textContent = numeroSorteado
    document.querySelector('#porcentagem').textContent = (numeroSorteado*1.15).toFixed(2)
})