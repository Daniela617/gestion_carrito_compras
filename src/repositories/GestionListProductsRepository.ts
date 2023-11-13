import { ResultSetHeader, RowDataPacket } from 'mysql2';
import db from '../database/Database';
import { query } from 'express';
import ListaProductosCmpEntity from '../models/ListaProductosCmpEntity';
import ProductsListEntity from '../models/ListaProductosEntity';
export default class GestionListProductsRepository
{
    public constructor()
    {
    }
    async crearListaProducto(listPrd:ProductsListEntity):Promise<ProductsListEntity>{
        console.log("repos",listPrd);
        const query="INSERT INTO LISTA_PRODUCTO VALUES(?,?,?)";
        const lsP:ProductsListEntity= new ProductsListEntity(listPrd.IDLISTA,listPrd.IDPRODUCTO,"Recibido");
        const res:ProductsListEntity= new ProductsListEntity(0,0,"");
        try{
           const [result]:ProductsListEntity|any  = await db.query(query,[lsP.IDLISTA,lsP.IDPRODUCTO,lsP.ESTADO]);
           if(result.affectedRows===1){
                return lsP;
           }
           return res;
        }catch(error)
        {
            throw error;
        }

        
    }

    
    async eliminarListaProducto(listPrd:ProductsListEntity):Promise<boolean>{
        const query = "DELETE FROM LISTA_PRODUCTO WHERE IDLISTA = ? AND IDPRODUCTO=?";
        const lsP:ProductsListEntity= new ProductsListEntity(listPrd.IDLISTA,listPrd.IDPRODUCTO,"Recibido");

        try{
            await db.query(query,[lsP.IDLISTA,lsP.IDPRODUCTO]);
            return true;
        }catch(error)
        {
            console.error("Error al eliminar usuario:", error);
            return false;
    }
}
    //TO DO:USUARIOOPC1
   /*async consultarListaProductos(idLista:number):Promise<ListaProductosCmpEntity[]>{
        const query="SELECT P.NOMBRE_PRODUCTO,P.PRECIO FROM PRODUCTO P INNER JOIN LISTA_PRODUCTOS L ON P.IDPRODUCTO=L.IDPRODUCTO WHERE IDLISTA=? ";
        const res:ListaProductosCmpEntity[]=[];
        try{
            
            const [result]:ListaProductosCmpEntity|any  = await db.query(query);
            console.log("ing",result);
            result.map((row:ListaProductosCmpEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;

    }*/
    async consultarListaProductos(idUser:number):Promise<ListaProductosCmpEntity[]>{
        const query="SELECT P.NOMBRE_PRODUCTO,P.PRECIO FROM PRODUCTO P INNER JOIN LISTA_PRODUCTO LP ON P.IDPRODUCTO=LP.IDPRODUCTO INNER JOIN LISTA_COMPRAS LC ON LP.IDLISTA=LC.IDLISTA INNER JOIN USUARIO US ON LC.IDUSUARIO=US.IDUSUARIO WHERE US.IDUSUARIO=?;";
        const res:ListaProductosCmpEntity[]=[];
        console.log("ing1");
        try{
            
            const [result]:ListaProductosCmpEntity|any  = await db.query(query,[idUser]);
            console.log("ing");
            result.map((row:ListaProductosCmpEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;

    }

}