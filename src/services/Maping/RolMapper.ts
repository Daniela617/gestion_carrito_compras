import RolEntity from "../../models/RolEntity";
import RolDTO from "../DTO/RolDTO";

export default class RolMapper{
    public entitiesToDTO(rolesEnt:RolEntity[]):RolDTO[]
    {
        const roles:RolDTO[] = [];
        rolesEnt.forEach((row:RolEntity)=>
        {
            roles.push(new RolDTO(row.ID_ROL,row.NOMBRE_ROL));
        })
        return roles;
    }  
}
