export default class UsuarioDTO{
    private _idusuario: number;
    private _nombreusuario: string;
    private _username: string;
    private _clave: string;
    private _idrol: number;

    
    public constructor(id:number, nombre:string, login:string, password:string, rolId:number)
    {
        this._idusuario = id;
        this._nombreusuario = nombre;
        this._username = login;
        this._clave = password;
        this._idrol = rolId;
    }
    public get id():number{
        return this._idusuario;
    }
    public get nombre():string{
        return this._nombreusuario;
    }
    public get login():string{
        return this._username;
    }
    public get password():string{
        return this._clave;
    }
    public get rolId():number{
        return this._idrol;
    }
    
    
    public set id(id:number){
        this._idusuario = id;
    }
    public set nombre(nombre:string){
        this._nombreusuario = nombre;
    }
    public set login(login:string){
        this._username = login;
    }
    public set password(password:string){
        this._clave= password;
    }
    public set rolId(rolId:number){
        this._idrol = rolId;
    }
    


}