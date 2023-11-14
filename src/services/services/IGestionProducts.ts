import ProductoDTO from "../DTO/ProductoDTO";
export default interface IGestionProducts
{
    consultarProductos():Promise<ProductoDTO[]>;
    
    
    consultarProductoPorId(id:number):Promise<ProductoDTO>;
    
    
    consultarProductosPorNombre(nombre:string):Promise<ProductoDTO>;

}