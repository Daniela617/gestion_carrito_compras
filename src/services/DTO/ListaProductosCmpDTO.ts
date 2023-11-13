export default class ListaProductosCmpDTO{
    private _nombreproducto: string;
    private _precio: number;

    
    public constructor( nombre:string,  precio:number)
    {
        this._nombreproducto = nombre;
        this._precio = precio;
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
    


}