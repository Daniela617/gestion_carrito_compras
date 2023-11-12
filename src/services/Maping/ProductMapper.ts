import ProductoDTO from "../DTO/ProductoDTO";
import ProductoEntity from "../../models/ProductEntity";
export default class ProductMapper
{
    public constructor(){

    }
    public entityToDTO(producto:ProductoEntity):ProductoDTO{
        const dto:ProductoDTO= new ProductoDTO(producto.IDPRODUCTO,producto.NOMBRE_PRODUCTO,producto.FECHA_FABRICACION,producto.PRECIO);
        return dto;
    }
    public DTOToEntity(producto:ProductoDTO):ProductoEntity{
        const entity:ProductoEntity= new ProductoEntity(producto.id,producto.nombre,producto.precio, producto.fechaFab);
        return entity;
    }
    public entitiesToDTOs(objEntity:ProductoEntity[]): ProductoDTO[]
    {
        const productos:ProductoDTO[] = [];
        objEntity.forEach((row)=>
        {
            const prd = productos.find((producto)=> producto.id === row.IDPRODUCTO);
            if(!prd)
            {
               const temp = new ProductoDTO(row.IDPRODUCTO,row.NOMBRE_PRODUCTO,row.FECHA_FABRICACION,row.PRECIO);
               productos.push(temp);
            }
        })
        return productos;
    }
}