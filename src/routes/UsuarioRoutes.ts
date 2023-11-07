import {Router} from 'express';
import usuarioController from '../controllers/RolesController'

class UsuarioRolRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
        this.router.post('/', usuarioController.list);
        
    }
}
const usuarioRoutes=new UsuarioRolRoutes();
export default usuarioRoutes.router;

