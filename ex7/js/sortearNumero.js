document.querySelector('button').addEventListener('click', ()=> {
    const produtoValor = parseInt(Math.random()*1000)
    const descontoValor = parseInt(Math.random()*50)
    document.querySelector('#produto').textContent = produtoValor
    document.querySelector('#porcentagem').textContent = descontoValor
    document.querySelector('#desconto').textContent = descontoValor*produtoValor/100
    document.querySelector('#valorFinal').textContent = (descontoValor*produtoValor/100)+produtoValor
})