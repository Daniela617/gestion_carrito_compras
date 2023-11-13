import {Router} from 'express';
import comprasController from '../controllers/ComprasController';
class ComprasRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
        
        this.router.post('/:id',comprasController.create);
        this.router.delete('/:id', comprasController.delete);
     
    }
}
const comprasRoutes=new ComprasRoutes();
export default comprasRoutes.router;

