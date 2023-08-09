import { cuenta } from "./cuenta";
 export class CuentaCorriente extends cuenta {
    private Sobregiro: number=0;
     public get getSobregiro(): number {
         return this.Sobregiro;
     }
     public set setSobregiro(value: number) {
         this.Sobregiro = value;
     }


    constructor(saldo:number,numeroConsignaciones:number,numeroRetiros:number,tasaAnual:number,comisionMensual:number,Sobregiro:number){

        super(saldo,numeroConsignaciones,numeroRetiros,tasaAnual,comisionMensual)
        this.Sobregiro=Sobregiro;

    }

    imrimirc(){

        console.log('saldo: ',this.saldo)
        console.log('comisión mensual: ',this.comisionMensual)
        console.log('número de transacciones realizadas: ',this.numeroConsignaciones+this.numeroRetiros)



    }
    





}