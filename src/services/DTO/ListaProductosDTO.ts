import ProductoDTO from "./ProductoDTO";
//cambie arreglo
export default class ListaProductosDTO{
   
    private _idlista: number;
    private _idproducto: number;
    private _estado: string;
   

    
    public constructor(  idList:number, idProducto:number,estado:string)
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
    public get idProducto():number{
        return this._idproducto ;
    }
   
    
    public set idProducto(id:number){
        this._idproducto = id;
    }
    public get estado():string{
        return this._estado ;
    }
   
    
    public set estado(estado:string){
        this._estado = estado;
    }
    
    


}