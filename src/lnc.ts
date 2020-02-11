function factorial(num : number): number{
    let res : number = 1;
    for(let i = 1 ; i <= num; i++){
        res *= i;
    }
    return res;
}

function longitud(num : number) : number {
    let numRestante = num;
    let cont = 0;
    while(true){
        //numRestante = Math.trunc(numRestante/10); -->esto solo funciona en javascript
        //numRestante = parseInt((numRestante/10).toFixed(0));
        numRestante = Math.floor(numRestante/10);
        cont++;
        if(numRestante == 0) break;
    }
    return cont;
}

export class LNC{
    lncToDecimal(num : number) : number{
        let numRestante = num;
        let tam = longitud(num);
        let suma = 0;

        for(let i = 0; i < tam; i++){
            let dig = numRestante % 10;
            suma += dig * factorial(i+1);
            numRestante = Math.floor(numRestante/10);
        }
        return suma;
    };
}
