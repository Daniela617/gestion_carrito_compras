import ListaProductosEntity from "../../models/ListaProductosEntity";
import ListaProductosCmpDTO from "../DTO/ListaProductosCmpDTO";
import ListaProductosCmpEntity from "../../models/ListaProductosCmpEntity";
import ListPrdDTO from "../DTO/ListPrdDTO";

export default class ProductListMapper{
    public constructor(){

    }
    public entityToDTO(objEntity:ListaProductosEntity):ListPrdDTO{
        const dto:ListPrdDTO=new ListPrdDTO(objEntity.IDLISTA,objEntity.IDPRODUCTO,objEntity.ESTADO,objEntity.CANTIDAD);
        return dto;
    }
    public dtoToEntity(objDTO:ListPrdDTO):ListaProductosEntity
    {
        
        const entity:ListaProductosEntity= new ListaProductosEntity(objDTO.idLista,objDTO.idPro,objDTO.nombre,objDTO.cant);
        return entity;
    }
    public jsonToDTO(json:any):ListPrdDTO
    {   
        
        const ls = new ListPrdDTO(
            parseInt(json._idlista),
            parseInt(json._idproducto),
            json._estado,
            parseInt(json._cantidad)
        );

        return ls;
    }
    public entitiesToDTOs(objEntity:ListaProductosCmpEntity[]): ListaProductosCmpDTO[]
    {
       const ls:ListaProductosCmpDTO[]=[];

        objEntity.forEach((row)=>
        {
            ls.push(new ListaProductosCmpDTO(row.NOMBRE_PRODUCTO,row.PRECIO,row.CANTIDAD));
        }
        )
       return ls;
    }
    
    //
    public entityToDTOC(objEntity:ListaProductosCmpEntity):ListaProductosCmpDTO{
       const dtoC:ListaProductosCmpDTO=new ListaProductosCmpDTO(objEntity.NOMBRE_PRODUCTO,objEntity.PRECIO,objEntity.CANTIDAD);
       return dtoC;
    }
    public dtoToEntityC(objDTO:ListaProductosCmpDTO): ListaProductosCmpEntity
    {
        const entity:ListaProductosCmpEntity=new ListaProductosCmpEntity(objDTO.nombre,objDTO.precio,objDTO.cant);
        return entity;
    }
    
}