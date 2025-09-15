const numeroSorteado = new Array(3)
let soma = 0
document.querySelector('button').addEventListener('click', ()=> {
    for(let i=0;i<3;i++){
        numeroSorteado[i]= parseInt(Math.random()*100)
        soma += numeroSorteado[i]
    }
    document.querySelector('#exibirNumero1').textContent = numeroSorteado[0]
    document.querySelector('#exibirNumero2').textContent = numeroSorteado[1]
    document.querySelector('#exibirNumero3').textContent = numeroSorteado[2]
    document.querySelector('#somaTripla').textContent = soma*3
})