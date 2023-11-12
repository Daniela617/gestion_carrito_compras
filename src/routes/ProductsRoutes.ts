import {Router} from 'express';
import productoController from '../controllers/ProductController';
class ProductoRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {

        this.router.get('/',productoController.list);
        this.router.get('/:id', productoController.listById);
        this.router.get('/nombre/:nombre', productoController.listByName);
     
    }
}
const productoRoutes=new ProductoRoutes();
export default productoRoutes.router;