const numeroSorteado = new Array(3)
document.querySelector('button').addEventListener('click',()=>{
    let soma = 0
    for(let i=0;i<3;i++){
        numeroSorteado[i] = parseInt(Math.random()*10)
        soma += numeroSorteado[i]
    }
    document.querySelector('#nota1').textContent = numeroSorteado[0]
    document.querySelector('#nota2').textContent = numeroSorteado[1]
    document.querySelector('#nota3').textContent = numeroSorteado[2]
    document.querySelector('#media').textContent = (soma/3).toFixed(2)
})