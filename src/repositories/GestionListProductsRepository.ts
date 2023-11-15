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
        const query1="SELECT cantidad AS total FROM LISTA_PRODUCTO WHERE IDLISTA = ? AND IDPRODUCTO=?";
        const query="INSERT INTO LISTA_PRODUCTO VALUES(?,?,?,?)";
        const query2="UPDATE LISTA_PRODUCTO SET CANTIDAD=? WHERE IDLISTA = ? AND IDPRODUCTO=? ";
        const lsP:ProductsListEntity= new ProductsListEntity(listPrd.IDLISTA,listPrd.IDPRODUCTO,"Recibido",listPrd.CANTIDAD);
        const res:ProductsListEntity= new ProductsListEntity(0,0,"",0);
        
        try{
           const [selectRows]= await db.query<any[]>(query1,[lsP.IDLISTA,lsP.IDPRODUCTO]);
           const totalRegistros=selectRows[0]?.total ||0;
           console.log(totalRegistros);
            if(totalRegistros===0){
                    const [result]:ProductsListEntity|any  = await db.query(query,[lsP.IDLISTA,lsP.IDPRODUCTO,lsP.ESTADO,1]);
                if(result.affectedRows===1){
                        return lsP;
                }
            }else{
                const [result]:ProductsListEntity|any  = await db.query(query2,[1+totalRegistros,lsP.IDLISTA,lsP.IDPRODUCTO]);
                if(result.affectedRows===1){
                        const lsP:ProductsListEntity= new ProductsListEntity(listPrd.IDLISTA,listPrd.IDPRODUCTO,"Recibido",1+totalRegistros);
                        return lsP;
                }
            }
           return res;
        }catch(error)
        {
            throw error;
        }

        
    }

    
    async eliminarListaProducto(listPrd:ProductsListEntity):Promise<boolean>{
        const query = "DELETE FROM LISTA_PRODUCTO WHERE IDLISTA = ? AND IDPRODUCTO=?";
        const query1="SELECT cantidad AS total FROM LISTA_PRODUCTO WHERE IDLISTA = ? AND IDPRODUCTO=?";
        const query2="UPDATE LISTA_PRODUCTO SET CANTIDAD=? WHERE IDLISTA = ? AND IDPRODUCTO=? ";
        const lsP:ProductsListEntity= new ProductsListEntity(listPrd.IDLISTA,listPrd.IDPRODUCTO,"Recibido",listPrd.CANTIDAD);

        try{
            const [selectRows]= await db.query<any[]>(query1,[lsP.IDLISTA,lsP.IDPRODUCTO]);
            const totalRegistros=selectRows[0]?.total ||0;
             if(totalRegistros===1 ){
                await db.query(query,[lsP.IDLISTA,lsP.IDPRODUCTO]);
                return true;
                 
             }else{
                 await db.query(query2,[totalRegistros-1,lsP.IDLISTA,lsP.IDPRODUCTO]);
                 return true;
             }
            
        }catch(error)
        {
            console.error("Error al eliminar el producto de la lista:", error);
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
        const query="SELECT P.NOMBRE_PRODUCTO,P.PRECIO ,LP.CANTIDAD FROM PRODUCTO P INNER JOIN LISTA_PRODUCTO LP ON P.IDPRODUCTO=LP.IDPRODUCTO INNER JOIN LISTA_COMPRAS LC ON LP.IDLISTA=LC.IDLISTA INNER JOIN USUARIO US ON LC.IDUSUARIO=US.IDUSUARIO WHERE US.IDUSUARIO=?;";
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