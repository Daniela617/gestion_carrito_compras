import ListaProductosCmpDTO from "../DTO/ListaProductosCmpDTO";
import ListaProductosCmpEntity from "../../models/ListaProductosCmpEntity";
import ProductListMapper from "../Maping/ProductListMapper";
import ListaProductosDTO from "../DTO/ListaProductosDTO";
import ProductsListEntity from "../../models/ProductsListEntity";
import GestionListProductsRepository from "../../repositories/GestionListProductsRepository";
import IGestionProductsList from "./IGestionProductosList";
class GestionProductosListImpl implements IGestionProductsList{
    private accesoPersistencia:GestionListProductsRepository;
    private mapper:ProductListMapper;
    public constructor(){
        this.accesoPersistencia = new GestionListProductsRepository();
        this.mapper = new ProductListMapper();
    }
    async crearListaProducto(listPrd: ListaProductosDTO): Promise<ListaProductosDTO> {
        //
        let entity=this.mapper.dtoToEntity(listPrd);
        const res= await this.accesoPersistencia.crearListaProducto(entity);
        return this.mapper.entityToDTO(res);
        
    }
    async eliminarListaProducto(listPrd: ListaProductosDTO): Promise<boolean> {
        let entity=this.mapper.dtoToEntity(listPrd);
        return await this.accesoPersistencia.eliminarListaProducto(entity);
    }
    async consultarListaProductos(idUser: number): Promise<ListaProductosCmpDTO[]> {
        const res= await this.accesoPersistencia.consultarListaProductos(idUser);
        return this.mapper.entitiesToDTOs(res);
    }
   
}

const gestionProductosListImpl = new GestionProductosListImpl();
export default gestionProductosListImpl;