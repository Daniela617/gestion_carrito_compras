import ProductoEntity from "../../models/ProductEntity";
import GestionProductosRepository from "../../repositories/GestionProductosRepository";
import ProductoDTO from "../DTO/ProductoDTO";
import ProductMapper from "../Maping/ProductMapper";
import IGestionProducts from "./IGestionProducts";
class GestionProductosImpl implements IGestionProducts{
    private accesoPersistencia:GestionProductosRepository;
    private mapper:ProductMapper;
    public constructor(){
        this.accesoPersistencia = new GestionProductosRepository();
        this.mapper = new ProductMapper();
    }
    async consultarProductos(): Promise<ProductoDTO[]> {
        const res= await this.accesoPersistencia.consultarProductos();
        return this.mapper.entitiesToDTOs(res);    }
    async consultarProductoPorId(id: number): Promise<ProductoDTO> {
        const res = await this.accesoPersistencia.consultarProductoPorId(id);
        return this.mapper.entityToDTO(res);
    }
    async consultarProductosPorNombre(nombre: string): Promise<ProductoDTO> {
        const res = await this.accesoPersistencia.consultarProductosPorNombre(nombre);
        return this.mapper.entityToDTO(res);    }
}
const gestionProductosImpl = new GestionProductosImpl();
export default gestionProductosImpl;