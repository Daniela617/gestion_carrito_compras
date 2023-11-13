import { ResultSetHeader, RowDataPacket } from 'mysql2';
import db from '../database/Database';
import { query } from 'express';
import ListaComprasEntity from '../models/ListaComprasEntity';

export default class GestionComprasRepository
{
    public constructor()
    {
    }

    async crearCompra(idUser:number):Promise<ListaComprasEntity>{
        const query="INSERT INTO LISTA_PRODUCTOS VALUES(?,CURDATE(),CONCAT('FACTURA_'(SELECT NOMBRE_USUARIO FROM USUARIO WHERE IDUSUARIO=?)))";
        const query2="SELECT IDLISTA,IDUSUARIO,FECHA_LISTA,NOMBRE_LISTA FROM LISTA_COMPRAS WHERE IDLISTA=?;";
        const res:ListaComprasEntity= new ListaComprasEntity(0,0,new Date(),"");
        try{
           const [result]:ListaComprasEntity|any  = await db.query(query,[idUser]);
           if(result.affectedRows===1){
                const [result2]:ListaComprasEntity|any  = await db.query(query2,[result.id]);
                if (result2.length > 0) {
                    console.log(result2[0]);
                        return result2[0]; 
                }
        
            }
           return res;
        }catch(error)
        {
            throw error;
        }
    }
    
    async eliminarCompra(idUser:number):Promise<boolean>{
         const query="DELETE FROM LISTA_PRODUCTOS LP JOIN LISTA_COMPRAS LC ON LP.IDLISTA=LC.IDLISTA JOIN USUARIO U ON LC.IDUSUARIO=U.USUARIO WHERE U.USUARIO=?  ";
         const query2="DELETE FROM LISTA_COMPRAS LC JOIN USUARIO U ON LC.IDUSUARIO=U.USUARIO WHERE U.USUARIO=?";   
         try{
            await db.query(query,[idUser]);
            const [res]:ResultSetHeader|any = await db.query(query2,[idUser]);
            return res.affectedRows > 0;
        }catch(error)
        {
            console.error("Error al eliminar usuario:", error);
            return false;
        }
    }
}
