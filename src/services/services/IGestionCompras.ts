import ListaComprasDTO from "../DTO/ListaComprasDTO";
export default interface IGestionCompras
{
   
    crearCompra(idUser:number):Promise<ListaComprasDTO>;
    
    eliminarCompra(idUser:number):Promise<boolean>;
}