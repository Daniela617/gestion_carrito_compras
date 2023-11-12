import {Request, Response} from 'express';
import IGestionProducts from '../services/services/IGestionProducts';
import ProductoDTO from '../services/DTO/ProductoDTO';
import gestionProductosImpl from '../services/services/GestionProductosImpl';
class ProductController
{
    private productoService:IGestionProducts;
    public constructor(objImpl: IGestionProducts)
    {
        this.productoService = objImpl;
    }
    public list = async (req:Request, res:Response)=>
    {
        console.log("ing");
        const result = await this.productoService.consultarProductos();
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
        const result = await this.productoService.consultarProductoPorId(parseInt(id));
        if(result.id == parseInt(id))
        {
            res.status(200).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
    
    public listByName = async (req:Request, res:Response) =>
    {
        const {nombre} =  req.params
        const result = await this.productoService.consultarProductosPorNombre(nombre);
        if(result.nombre == nombre)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }
    }
}
const productoController = new ProductController(gestionProductosImpl);
export default productoController;