import {Router} from 'express';
import usuarioController from '../controllers/UsuarioController'

class UsuarioRolRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
        
        this.router.get('/log/', usuarioController.listByLogin);
        this.router.get('/:id', usuarioController.listById);
        this.router.get('/',usuarioController.list);
        
     
    }
}
const usuarioRoutes=new UsuarioRolRoutes();
export default usuarioRoutes.router;

