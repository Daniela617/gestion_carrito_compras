import UsuarioEntity from '../../models/UsuarioEntity';
import GestionUsuariosRepository from '../../repositories/GestionUsuariosRepository';
import UsuarioDTO from '../DTO/UsuarioDTO';
import UsuarioMapper from '../Maping/UsuarioMapper';

import enc from '../Utiles/Encriptar';

import IGestionUsuarios from './IGestionUsuarios';

class GestionUsuariosImpl implements IGestionUsuarios{
    private accesoPersistencia:GestionUsuariosRepository;
    private mapper:UsuarioMapper;
    public constructor(){
        this.accesoPersistencia = new GestionUsuariosRepository();
        this.mapper = new UsuarioMapper();
    }
    async crearUsuario(usuario: UsuarioDTO): Promise<UsuarioDTO> {
        const usuarioDTO = this.mapper.jsonToDTO(usuario);
        usuarioDTO.password = enc.hashPassword(usuarioDTO.password);
        const usuarioEntity:UsuarioEntity[] = this.mapper.dtoToEntity(usuarioDTO);
        const res = await this.accesoPersistencia.crearUsuarioRol(usuarioEntity);
        return this.mapper.entityToDTO(res);     
    }
    async actualizarUsuario(id: number, usuario: UsuarioDTO): Promise<UsuarioDTO> {
        const usuarioDTO = this.mapper.jsonToDTO(usuario);
        const usuarioEntity:UsuarioEntity[]= this.mapper.dtoToEntity(usuarioDTO)
        const res= await this.accesoPersistencia.actualizarUsuario(id,usuarioEntity);
        return this.mapper.entityToDTO(res);
        
    }
    async eliminarUsuario(id: number): Promise<boolean> {
        return await this.accesoPersistencia.eliminarUsuario(id);
    }
    async consultarUsuarios(): Promise<UsuarioDTO[]> {
        const res= await this.accesoPersistencia.consultarUsuarios();
        return this.mapper.entitiesToDTOs(res);
    }
    async consultarUsuarioPorId(id: number): Promise<UsuarioDTO> {
        const res = await this.accesoPersistencia.consultarUsuarioPorId(id);
        return this.mapper.entityToDTO(res);
    }
    
    async consultarUsuariosPorLogin(login: string): Promise<UsuarioDTO> {
        const res = await this.accesoPersistencia.consultarUsuariosPorLogin(login);
        return this.mapper.entityToDTO(res);
    }
}

const gestionUsuariosImpl = new GestionUsuariosImpl();
export default gestionUsuariosImpl;