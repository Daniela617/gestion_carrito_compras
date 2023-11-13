import ListaComprasDTO from "../DTO/ListaComprasDTO";
import ListaComprasEntity from "../../models/ListaComprasEntity";
import ComprasMapper from "../Maping/ComprasMapper";
import GestionComprasRepository from "../../repositories/GestionComprasRepository";
import IGestionCompras from "./IGestionCompras";
class GestionComprasImpl implements IGestionCompras{
    private accesoPersistencia:GestionComprasRepository;
    private mapper:ComprasMapper;
    public constructor(){
        this.accesoPersistencia = new GestionComprasRepository();
        this.mapper = new ComprasMapper();
    }
    async crearCompra(idUser: number): Promise<ListaComprasDTO> {
        const res= await this.accesoPersistencia.crearCompra(idUser);
        return this.mapper.entityToDTO(res);    }
    async eliminarCompra(idUser: number): Promise<boolean> {
        return await this.accesoPersistencia.eliminarCompra(idUser);
    }
    
   
}

const gestionComprasImpl = new GestionComprasImpl();
export default gestionComprasImpl;