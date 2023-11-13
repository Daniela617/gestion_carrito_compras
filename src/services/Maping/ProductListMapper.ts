import ProductsListEntity from "../../models/ProductsListEntity";
import ListaProductosCmpDTO from "../DTO/ListaProductosCmpDTO";
import ListaProductosCmpEntity from "../../models/ListaProductosCmpEntity";
import ListaProductosDTO from "../DTO/ListaProductosDTO";


export default class ProductListMapper{
    public constructor(){

    }
    public entityToDTO(objEntity:ProductsListEntity):ListaProductosDTO{
        const dto:ListaProductosDTO=new ListaProductosDTO(objEntity.IDLISTA,objEntity.IDPRODUCTO,objEntity.ESTADO);
        return dto;
    }
    public dtoToEntity(objDTO:ListaProductosDTO): ProductsListEntity
    {
        const entity:ProductsListEntity=new ProductsListEntity(objDTO.idLista,objDTO.idProducto,objDTO.estado);
        return entity;
    }
   
    public entitiesToDTOs(objEntity:ListaProductosCmpEntity[]): ListaProductosCmpDTO[]
    {
       const ls:ListaProductosCmpDTO[]=[];

        objEntity.forEach((row)=>
        {
            ls.push(new ListaProductosCmpDTO(row.NOMBRE_PRODUCTO,row.PRECIO));
        }
        )
       return ls;
    }
    
    //
    public entityToDTOC(objEntity:ListaProductosCmpEntity):ListaProductosCmpDTO{
       const dtoC:ListaProductosCmpDTO=new ListaProductosCmpDTO(objEntity.NOMBRE_PRODUCTO,objEntity.PRECIO);
       return dtoC;
    }
    public dtoToEntityC(objDTO:ListaProductosCmpDTO): ListaProductosCmpEntity
    {
        const entity:ListaProductosCmpEntity=new ListaProductosCmpEntity(objDTO.nombre,objDTO.precio);
        return entity;
    }
    
}