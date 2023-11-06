export default class ProductoDTO{
    private _idproducto: number;
    private _nombreproducto: string;
    private _fechafabricacion: Date;
    private _precio: number;

    
    public constructor(id:number, nombre:string,  fecha_fab:Date, precio:number)
    {
        this._idproducto = id;
        this._nombreproducto = nombre;
        this._fechafabricacion = fecha_fab;
        this._precio = precio;
    }
    public get id():number{
        return this._idproducto;
    }
    public get nombre():string{
        return this._nombreproducto;
    }
    public get fechaFab():Date{
        return this._fechafabricacion;
    }
    
    public get precio():number{
        return this._precio;
    }
    
    
    public set id(id:number){
        this._idproducto = id;
    }
    public set nombre(nombre:string){
        this._nombreproducto = nombre;
    }
    public set fechaFab(fecha_fab:Date){
        this._fechafabricacion = fecha_fab;
    }
    
    public set precio(precio:number){
        this._precio = precio;
    }
    


}