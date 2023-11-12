import ProductsListEntity from "../../models/ProductsListEntity";
import ListaProductosCmp from "../../models/ListaProductosCmp";
export interface IGestionProductsList{

    crearListaProducto(listPrd:ProductsListEntity):Promise<ProductsListEntity>;

    
    eliminarListaProducto(listPrd:ProductsListEntity):Promise<boolean>;
    //TO DO:RETORNO
    consultarListaProductos(idLista:number):Promise<ListaProductosCmp[]>;
}