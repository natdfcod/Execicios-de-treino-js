document.querySelector('button').addEventListener('click', ()=> {
    const numeroSorteado = parseInt(Math.random()*100)
    document.querySelector('#exibirNumero').textContent = numeroSorteado
    document.querySelector('#porcentagem').textContent = (numeroSorteado*0.75).toFixed(2)
})