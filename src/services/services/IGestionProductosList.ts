import ListaProductosDTO from "../DTO/ListaProductosDTO";
import ListaProductosCmpDTO from "../DTO/ListaProductosCmpDTO";
export default interface IGestionProductsList{

    crearListaProducto(listPrd:ListaProductosDTO):Promise<ListaProductosDTO>;

    
    eliminarListaProducto(listPrd:ListaProductosDTO):Promise<boolean>;
    //TO DO:RETORNO
    consultarListaProductos(idUser:number):Promise<ListaProductosCmpDTO[]>;
}