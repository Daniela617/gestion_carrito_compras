import {Request, Response} from 'express';
import IGestionUsuarios from '../services/services/IGestionUsuarios';
import UsuarioDTO from '../services/DTO/UsuarioDTO';
import gestionUsuariosImpl from '../services/services/GestionUsuariosImpl';

class UsuarioController{
    private usuarioRolService:IGestionUsuarios;
    public constructor(objImpl: IGestionUsuarios)
    {
        this.usuarioRolService = objImpl;
    }
    
    public list = async (req:Request, res:Response)=>
    {
        console.log("ing");
        const result = await this.usuarioRolService.consultarUsuarios();
        if(result.length >0)
        {
            res.status(200).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
    public listById = async (req:Request, res:Response)=>
    {
        const {id} =  req.params
        console.log(id)
        const result = await this.usuarioRolService.consultarUsuarioPorId(parseInt(id));
        if(result.id == parseInt(id))
        {
            res.status(200).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
    
    public listByLogin = async (req:Request, res:Response) =>
    {
        const {login} =  req.params
        const result = await this.usuarioRolService.consultarUsuariosPorLogin(login);
        if(result.login == login)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }
    }
}

const usuarioController = new UsuarioController(gestionUsuariosImpl);
export default usuarioController;