import {Router} from 'express';
import listPrdController from '../controllers/ListProductsController';
class ListProductsRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
        
        this.router.post('',listPrdController.create);
        this.router.get('/:id', listPrdController.listById);
        this.router.delete('/', listPrdController.delete);
     
    }
}
const lProductsRoutes=new ListProductsRoutes();
export default lProductsRoutes.router;

