import ProductoDTO from "./ProductoDTO";

export default class ProcesoCompraDTO{
   
    private _idlista: number;
    private _idproducto: ProductoDTO;
    private _estado: string;
   

    
    public constructor(  idList:number, idProducto:ProductoDTO,estado:string)
    {
        this._idlista = idList;
        this._idproducto = idProducto;
        this._estado=estado;



        
    }
    public get idLista():number{
        return this._idlista;
    }
   
    
    public set idLista(id:number){
        this._idlista = id;
    }
    public get idProducto():ProductoDTO{
        return this._idproducto ;
    }
   
    
    public set idProducto(id:ProductoDTO){
        this._idproducto = id;
    }
    public get estado():string{
        return this._estado ;
    }
   
    
    public set estado(estado:string){
        this._estado = estado;
    }
    
    


}