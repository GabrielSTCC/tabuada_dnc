function Tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    if(num.value.length == 0 || end.value.length == 0){
        var res = window.document.getElementById('resposta')
        res.innerHTML = `!!SEM DADOS SUFICIENTES PARA REALIZAR A TABUADA!!`
        res.style.color=`red`
        // window.alert('[ERRO] Confira os dados!')
    }else{
        var n = Number(num.value)
        var e = Number(end.value)
        var r = ''
        var res = window.document.getElementById('resposta')
        res.innerHTML = `A tabuada do ${n} é:<br>`
        var x = 0
        do{
            r= n*x
            res.innerHTML += `${x} X ${n} = ${r}<br>`
            x++
        }while(x <= e)
    }

}