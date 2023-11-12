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

        this.router.get('/',usuarioController.list);
        this.router.get('/:id', usuarioController.listById);
        this.router.get('/login/:login', usuarioController.listByLogin);
     
    }
}
const usuarioRoutes=new UsuarioRolRoutes();
export default usuarioRoutes.router;

