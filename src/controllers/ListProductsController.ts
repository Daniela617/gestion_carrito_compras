import {Request, Response} from 'express';
import IGestionProductsList from '../services/services/IGestionProductosList';
import ListaProductosCmpDTO from '../services/DTO/ListaProductosCmpDTO';
import gestionProductosListImpl from '../services/services/GestionListaProductosImpl';
import ListPrdDTO from '../services/DTO/ListPrdDTO';
class ListProductsController
{
    private productLService:IGestionProductsList;
    public constructor(objImpl: IGestionProductsList)
    {
        this.productLService = objImpl;
    }

    public create = async (req:Request, res:Response)=>
    {
        const ls:ListPrdDTO = req.body;
        console.log(ls);
        const result = await this.productLService.crearListaProducto(ls);
        if(result.idLista != 0)
        {
            res.status(201).json(result);
        }else{
            res.status(400).json(result);
        }
    }
    public listById = async (req:Request, res:Response)=>
    {
        const {id} =  req.params
        console.log(id)
        const result = await this.productLService.consultarListaProductos(parseInt(id));
        if(result.length >0)
        {
            res.status(200).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
    
    public delete = async (req:Request, res:Response) =>
    {
        const ls:ListPrdDTO = req.body;
        const result  =await this.productLService.eliminarListaProducto(ls);
        if(result)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }

    }
}
const listPrdController = new ListProductsController(gestionProductosListImpl);
export default listPrdController;