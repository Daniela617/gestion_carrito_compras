import UsuarioDTO from "../DTO/UsuarioDTO";
import RolDTO from "../DTO/RolDTO";
import UsuarioEntity from "../../models/UsuarioEntity";


//
import CredencialesDTO from "../DTO/CredencialesDTO";
import CredencialesEntity from "../../models/credencialesEntity";
export default class UsuarioMapper{
    public constructor(){

    }
    /**
     * Convierte una lista de UsuarioRolEntity en un objeto UsuarioRolDTO, 
     * se utiliza cuando los datos corresponden a los de un solo usuario
     * @param {UsuarioRolEntity} objEntity 
     * 
     */
    public entityToDTO(objEntity:UsuarioEntity[]):UsuarioDTO{
        var usuario:UsuarioDTO = new UsuarioDTO(0,"","","",0);
        objEntity.forEach((row)=>{
            if(usuario.id != row.IDUSUARIO)
            {
                usuario.id = row.IDUSUARIO;
                usuario.login = row.USERNAME;
                usuario.nombre = row.NOMBRE_USUARIO;
                usuario.password = row.CLAVE;
                usuario.rolId =row.ID_ROL;
            }
        })
       return usuario;
    }
    public dtoToEntity(objDTO:UsuarioDTO): UsuarioEntity[]
    {
        var usuario:UsuarioEntity[] = [];
        
        usuario.push(new UsuarioEntity(objDTO.id,objDTO.rolId,objDTO.nombre,objDTO.login,objDTO.password));
        
        return usuario;
    }
   
    public jsonToDTO(json:any):UsuarioDTO
    {   
        
        const usuario = new UsuarioDTO(
            parseInt(json._idusuario),
            json._nombreusuario,
            json._username,
            json._clave,
            parseInt(json._idrol)
        );

        return usuario;
    }
    public entitiesToDTOs(objEntity:UsuarioEntity[]): UsuarioDTO[]
    {
        const usuarios:UsuarioDTO[] = [];
        objEntity.forEach((row)=>
        {
            const user = usuarios.find((usuario)=> usuario.id === row.IDUSUARIO);
            if(!user)
            {
               const temp = new UsuarioDTO(row.IDUSUARIO,row.NOMBRE_USUARIO,row.USERNAME,row.CLAVE,row.ID_ROL);
               usuarios.push(temp);
            }
        })
        return usuarios;
    }

    //
    public entityToDTOC(objEntity:CredencialesEntity):CredencialesDTO{
       const dtoC:CredencialesDTO=new CredencialesDTO(objEntity.CLAVE,objEntity.USERNAME);
       return dtoC;
    }
    public dtoToEntityC(objDTO:CredencialesDTO): CredencialesEntity
    {
        const entity:CredencialesEntity= new CredencialesEntity(objDTO.password,objDTO.login);
        return entity;
    }
}
