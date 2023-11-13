
import ListaComprasDTO from "../DTO/ListaComprasDTO";
import ListaComprasEntity from "../../models/ListaComprasEntity";

export default class ComprasMapper{
    public constructor(){

    }
    public entityToDTO(objEntity:ListaComprasEntity):ListaComprasDTO{
        const dto:ListaComprasDTO=new ListaComprasDTO(objEntity.IDLISTA,objEntity.IDUSUARIO,objEntity.FECHA_LISTA,objEntity.NOMBRE_LISTA);
        return dto;
    }
    public dtoToEntity(objDTO:ListaComprasDTO): ListaComprasEntity
    {
        const entity:ListaComprasEntity=new ListaComprasEntity(objDTO.idLista,objDTO.idUser,objDTO.fechaList,objDTO.nombre);
        return entity;
    }
}