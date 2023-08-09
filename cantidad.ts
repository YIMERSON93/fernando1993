export class cantidad{


    public valor: number;
    public get getvalor(): number {
        return this.valor;
    }
    public set setvalor(value: number) {
        this.valor = value;
    }

    constructor(valor:number){
        this.valor=valor;
    }

    }