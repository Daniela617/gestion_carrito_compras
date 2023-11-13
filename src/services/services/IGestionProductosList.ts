import ListaProductosCmpDTO from "../DTO/ListaProductosCmpDTO";
import ListPrdDTO from "../DTO/ListPrdDTO";
export default interface IGestionProductsList{

    crearListaProducto(listPrd:ListPrdDTO):Promise<ListPrdDTO>;

    
    eliminarListaProducto(listPrd:ListPrdDTO):Promise<boolean>;
    //TO DO:RETORNO
    consultarListaProductos(idUser:number):Promise<ListaProductosCmpDTO[]>;
}