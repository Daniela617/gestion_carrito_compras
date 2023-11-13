export default class ListPrdDTO{
    
    private _idlista: number;
    private _idproducto: number;
    private _estado: string;
    
    public constructor(idLista: number, idproducto: number, estado: string)
    {
        this._idproducto = idproducto;
        this._idlista = idLista;
        this._estado=estado;
        
    }
    public get idPro():number{
        return this._idproducto;
    }
   
    
    public set idPro(id:number){
        this._idproducto = id;
    }
   
    public get idLista():number{
        console.log("dto1",this._idlista);

        return this._idlista;
    }
   
    
    public set idLista(id:number){

        this._idlista = id;
    }
    

    public set nombre(nombre:string){
        this._estado = nombre;
    }
    public get nombre():string{
        return this._estado;
    }
}