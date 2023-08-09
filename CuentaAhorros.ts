 import { cuenta } from "./cuenta";
 export class CuentaAhorros extends cuenta{
    activa:boolean;

    constructor(saldo:number,numeroConsignaciones:number,numeroRetiros:number,tasaAnual:number,comisionMensual:number,activa:boolean){

        super(saldo,numeroConsignaciones,numeroRetiros,tasaAnual,comisionMensual)
        this.activa=activa;

    }

    actividadCuenta(){

      if(this.saldo>10000){

        this.activa=true
      
      console.log('la cuenta de ahorros está activa')

      }
      else{

        this.activa=false

      console.log('la cuenta de ahorros está Inactiva')

      }



    }

    
  imrimir(){

    console.log('Este es el interes calculado',this.calcularInteres())

    console.log('Esta en cuenta de ahorros y  el extracto mensual es de: ',this.extractoMensual())
        
    }




}
