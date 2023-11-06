export default class ProveedorDTO{
    private _idproveedor: number;
    private _nombreproveedor: string;

    public constructor(id:number, nombre:string, login:string, password:string, rolId:number)
    {
        this._idproveedor = id;
        this._nombreproveedor = nombre;
        
    }
    public get id():number{
        return this._idproveedor;
    }
    public get nombre():string{
        return this._nombreproveedor;
    }
    
    
    
    public set id(id:number){
        this._idproveedor = id;
    }
    public set nombre(nombre:string){
        this._nombreproveedor = nombre;
    }
}