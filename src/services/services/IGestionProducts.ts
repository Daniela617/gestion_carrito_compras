import ProductoDTO from "../DTO/ProductoDTO";
export default interface IGestionProducts
{
    consultarProductos():Promise<ProductoDTO[]>;
    /**
     * Obtiene un usuario por id
     * @route GET /api/usuarios/{id}
     */
    consultarProductoPorId(id:number):Promise<ProductoDTO>;
    
    /**
     * Obtiene usuarios por login
     * @router GET /api/usuarios/nombreP/{nombre}
     */
    consultarProductosPorNombre(nombre:string):Promise<ProductoDTO>;

}