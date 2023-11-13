export default class ListaComprasDTO{
    private _idusuario: number;
    private _idlista: number;
    private _nombreLista: string;
    private _fechaLista: Date;
   

    
    public constructor(  idList:number,idU:number,fechaLista:Date,nombreList:string)
    {
        this._idusuario = idU;
        this._idlista = idList;
        this._nombreLista=nombreList;
        this._fechaLista=fechaLista;



        
    }
    public get idUser():number{
        return this._idusuario;
    }
   
    
    public set idUser(id:number){
        this._idusuario = id;
    }
   
    public get idLista():number{
        console.log("dto1",this._idlista);

        return this._idlista;
    }
   
    
    public set idLista(id:number){
        console.log("dto",id);

        this._idlista = id;
    }
    
    public set fechaList(fecha_list:Date){
        this._fechaLista = fecha_list;
    }
    public get fechaFab():Date{
        return this._fechaLista;
    }

    public set nombre(nombre:string){
        this._nombreLista = nombre;
    }
    public get nombre():string{
        return this._nombreLista;
    }
}