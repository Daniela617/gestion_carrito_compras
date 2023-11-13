import UsuarioDTO from '../DTO/UsuarioDTO';
import CredencialesDTO from '../DTO/CredencialesDTO';
export default interface IGestionUsuarios
{
   
   
    consultarUsuarios():Promise<UsuarioDTO[]>;
    /**
     * Obtiene un usuario por id
     * @route GET /api/usuarios/{id}
     */
    consultarUsuarioPorId(id:number):Promise<UsuarioDTO>;
    
    /**
     * Obtiene usuarios por login
     */
    consultarUsuarioLogin(user:CredencialesDTO):Promise<UsuarioDTO>;
}