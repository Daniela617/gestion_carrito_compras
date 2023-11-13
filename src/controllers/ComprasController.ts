import {Request, Response} from 'express';
import IGestionCompras from '../services/services/IGestionCompras';
import ListaComprasDTO from '../services/DTO/ListaComprasDTO';
import gestionComprasImpl from '../services/services/GestionComprasImpl';
class ComprasController{
    private comprasService:IGestionCompras;
    public constructor(objImpl: IGestionCompras)
    {
        this.comprasService = objImpl;
    }
    public create = async (req:Request, res:Response)=>
    {
        const {id} =  req.params
        const result = await this.comprasService.crearCompra(parseInt(id));
        if(result.idLista !=0)
        {
            res.status(200).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
    public delete = async (req:Request, res:Response)=>
    {
        const {id} =  req.params
        console.log(id)
        const result = await this.comprasService.eliminarCompra(parseInt(id));
        if(result)
        {
            res.status(200).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
}
const comprasController = new ComprasController(gestionComprasImpl);
export default comprasController;