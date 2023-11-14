import UsuarioDTO from '../DTO/UsuarioDTO';
import CredencialesDTO from '../DTO/CredencialesDTO';
export default interface IGestionUsuarios
{
   
   
    consultarUsuarios():Promise<UsuarioDTO[]>;
    
    
    consultarUsuarioPorId(id:number):Promise<UsuarioDTO>;
    
   
    consultarUsuarioLogin(user:CredencialesDTO):Promise<UsuarioDTO>;
}