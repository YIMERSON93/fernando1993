import { cantidad } from "../cantidad";
import { cuenta } from "./cuenta";
import { CuentaAhorros } from "./CuentaAhorros";
import { CuentaCorriente } from "./CuentaCorriente";


let CuentaAhorros1= new CuentaAhorros(50000,20,320,430,550,false)
CuentaAhorros1.actividadCuenta()

let cuenta1= new cuenta(30000,7,3,1200,240)
let cantidad1= new cantidad(67000);
cuenta1.consignar(cantidad1)
cuenta1.imprimir()
cuenta1.retirar(cantidad1)

let cuentacorriente1= new CuentaCorriente(30000,7,3,1200,240,0)
cuentacorriente1.imrimirc()
