import ListaProductosCmpDTO from "../DTO/ListaProductosCmpDTO";
import ListaProductosCmpEntity from "../../models/ListaProductosCmpEntity";
import ProductListMapper from "../Maping/ProductListMapper";
import ProductsListEntity from "../../models/ListaProductosEntity";
import GestionListProductsRepository from "../../repositories/GestionListProductsRepository";
import IGestionProductsList from "./IGestionProductosList";
import ListPrdDTO from "../DTO/ListPrdDTO";
class GestionProductosListImpl implements IGestionProductsList{
    private accesoPersistencia:GestionListProductsRepository;
    private mapper:ProductListMapper;
    public constructor(){
        this.accesoPersistencia = new GestionListProductsRepository();
        this.mapper = new ProductListMapper();
    }
    async crearListaProducto(listPrd: ListPrdDTO): Promise<ListPrdDTO> {
        
        const dtoPrb = this.mapper.jsonToDTO(listPrd);
        const entity=this.mapper.dtoToEntity(dtoPrb);
        const res= await this.accesoPersistencia.crearListaProducto(entity);
        return this.mapper.entityToDTO(res);
        
    }
    async eliminarListaProducto(listPrd: ListPrdDTO): Promise<boolean> {
        const dtoPrb = this.mapper.jsonToDTO(listPrd);
        const entity=this.mapper.dtoToEntity(dtoPrb);
        return await this.accesoPersistencia.eliminarListaProducto(entity);
    }
    async consultarListaProductos(idUser: number): Promise<ListaProductosCmpDTO[]> {
        const res= await this.accesoPersistencia.consultarListaProductos(idUser);
        return this.mapper.entitiesToDTOs(res);
    }
   
}

const gestionProductosListImpl = new GestionProductosListImpl();
export default gestionProductosListImpl;