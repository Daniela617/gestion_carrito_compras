import ProductoDTO from './ProductoDTO';
export default class ProcesoCompraDTO{
    private _idproveedor: number;
    private _idproducto: ProductoDTO[];
   

    
    public constructor(idProveedor:number,  idProducto:ProductoDTO[])
    {
        this._idproveedor = idProveedor;

        this._idproducto = idProducto;



        
    }
    public get idProveedor():number{
        return this._idproveedor;
    }
   
    
    public set idProveedor(id:number){
        this._idproveedor = id;
    }
    public get idProducto():ProductoDTO[]{
        return this._idproducto ;
    }
   
    
    public set idProducto(id:ProductoDTO[]){
        this._idproducto = id;
    }
    


}