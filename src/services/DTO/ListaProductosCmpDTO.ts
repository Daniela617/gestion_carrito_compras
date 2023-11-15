export default class ListaProductosCmpDTO{
    private _nombreproducto: string;
    private _precio: number;
    private _cantidad: number;

    
    public constructor( nombre:string,  precio:number, cantidad:number)
    {
        this._nombreproducto = nombre;
        this._precio = precio;
        this._cantidad= cantidad;
    }
   
    public get nombre():string{
        return this._nombreproducto;
    }
   
    
    public get precio():number{
        return this._precio;
    }
    
    
   
    public set nombre(nombre:string){
        this._nombreproducto = nombre;
    }
    
    
    public set precio(precio:number){
        this._precio = precio;
    }
    public get cant():number{
        return this._cantidad;
    }
    
    
   
    
    public set cant(cant:number){
        this._cantidad = cant;
    }
    


}