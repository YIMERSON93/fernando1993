import {cantidad } from "./cantidad";

export class cuenta{

    public saldo:number;
    public numeroConsignaciones: number=0;
    public numeroRetiros: number=0;
    public tasaAnual: number;
    public comisionMensual: number=0;
    private valorIngresa: Array<cantidad> = [];
    public get getvalorIngresa(): Array<cantidad> {
        return this.valorIngresa;
    }
    public set setvalorIngresa(value: Array<cantidad>) {
        this.valorIngresa = value;
    }

    constructor(saldo:number,numeroConsignaciones:number,numeroRetiros:number,tasaAnual:number,comisionMensual:number ){
        this.saldo=saldo;
        this.numeroConsignaciones=numeroConsignaciones;
        this.numeroRetiros=numeroRetiros;
        this.tasaAnual=tasaAnual;
        this.comisionMensual=comisionMensual;
        this.valorIngresa=[];
    }

    consignar(cantidad:cantidad){

        
        this.valorIngresa.push(cantidad)
        if (cantidad.getvalor<0){

            console.log('No es válido el valor ingresado')
         }
         else{
            this.saldo=this.saldo+cantidad.getvalor;
            console.log('usted ha ingresado: ',cantidad.getvalor)
            console.log('el valor actual de la cuenta es: ', this.saldo)

         }

         return this.saldo

    }
    retirar(cantidad:cantidad){


        if(cantidad.getvalor>=0){
            
            console.log('el valor inicial de la cuenta es: ',this.saldo);
            console.log('el valor ingresado es de:', cantidad.getvalor);
            if (cantidad.getvalor>=this.saldo){
    
                
                console.log('usted ha retirado', this.saldo);
                console.log('el saldo de la cuenta ahora es de: cero')
            }
            else{
                this.saldo= this.saldo-cantidad.getvalor;
                console.log('usted ha retirado', cantidad.getvalor);
                console.log('el saldo de la cuenta es de:', this.saldo)
            }

        }
        else{

            console.log('usted ha ingresado un valor negativo')

        }

    }
    calcularInteres(){




    }
    extractoMensual(){


       return this.tasaAnual/12


    }

    imprimir(){

        console.log('saldo: ',this.saldo)
        console.log('número de consignaciones: ',this.numeroConsignaciones)
        console.log('número de retiros: ',this.numeroRetiros)
        console.log('tasa anual: ',this.tasaAnual)
        console.log('comisión mensul: ',this.comisionMensual)



    }





}


