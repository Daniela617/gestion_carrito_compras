import UsuarioDTO from '../DTO/UsuarioDTO';
export default interface IGestionUsuarios
{
    /**
     * Crea un nuevo usuario
     * @route POST /api/usuarios
     * @param {UsuarioDTO} usuario Usuario a ser ingresado en la base de datos.
     * @returns {UsuarioDTO} Usuario creado en la base de datos.
     */
    crearUsuario(usuario:UsuarioDTO):Promise<UsuarioDTO>;
    /**
     * Actualizar un usuario existente
     * @route PUT /api/usuarios/{id}
     * @param {number} id Id del usuario a modificar
     * @param {UsuarioDTO} usuario Nuevos datos del usuario
     * @returns {UsuarioDTO} Usuario actualizado en la base de datos
     */
    actualizarUsuario(id:number, usuario:UsuarioDTO):Promise<UsuarioDTO>;
    /**
     * Eliminar un usuario
     * @route DELETE /api/usuarios/{id}
     * @param {number} id id del usuario a eliminar
     * @returns {boolean} true en caso de éxito y falso en caso contrario. 
     */
    eliminarUsuario(id:number):Promise<boolean>;
    /**
     * Obtiene la lista de todos los usuarios
     * @route GET /api/usuarios
     * @returns {UsuarioDTO[]} lista de todos los usuarios del sistema
     */
    consultarUsuarios():Promise<UsuarioDTO[]>;
    /**
     * Obtiene un usuario por id
     * @route GET /api/usuarios/{id}
     * @param {number} id ID del usuario a buscar
     * @returns {UsuarioDTO} Usuario recuperado con el Id
     */
    consultarUsuarioPorId(id:number):Promise<UsuarioDTO>;
    
    /**
     * Obtiene usuarios por login
     * @router GET /api/usuarios/login/{login}
     * @param {string} login Nombre de usuario para el inicio de sesión
     */
    consultarUsuariosPorLogin(login:string):Promise<UsuarioDTO>;
}