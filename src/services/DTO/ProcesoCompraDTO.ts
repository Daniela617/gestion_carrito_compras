export default class ProcesoCompraDTO{
    private _idproceso: number;
    private _idusuario: number;
    private _idlista: number;
    private _idproducto: number;
   

    
    public constructor(idU:number,  idList:number,idProceso:number, idProducto:number)
    {
        this._idusuario = idU;
        this._idproceso = idProceso;
        this._idlista = idList;
        this._idproducto = idProducto;



        
    }
    public get idUser():number{
        return this._idusuario;
    }
   
    
    public set idUser(id:number){
        this._idusuario = id;
    }
    public get idProceso():number{
        return this._idproceso;
    }
   
    
    public set idProceso(id:number){
        this._idproceso = id;
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
   
    
    public set idProdcuto(id:number){
        this._idproducto = id;
    }
    


}