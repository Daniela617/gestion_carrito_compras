import UsuarioDTO from '../DTO/UsuarioDTO';
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
     * @router GET /api/usuarios/login/{login}
     */
    consultarUsuariosPorLogin(login:string):Promise<UsuarioDTO>;
}