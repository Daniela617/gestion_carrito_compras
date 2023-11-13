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
        const query="INSERT INTO LISTA_COMPRAS (IDUSUARIO, FECHA_LISTA, NOMBRE_LISTA) VALUES (?, CURDATE(), CONCAT('LISTA_COMPRAS_', (SELECT NOMBRE_USUARIO FROM USUARIO WHERE IDUSUARIO=?)));";
          
        
        const query2="SELECT IDLISTA,IDUSUARIO,FECHA_LISTA,NOMBRE_LISTA FROM LISTA_COMPRAS WHERE IDLISTA=?;";
        const res:ListaComprasEntity= new ListaComprasEntity(0,0,new Date(),"");
        try{
           const [result]:ListaComprasEntity|any  = await db.query(query,[idUser,idUser]);
           console.log("",result);
           if(result.affectedRows===1){
                const [result2]:ListaComprasEntity|any  = await db.query(query2,[result.insertId]);
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
         const query="DELETE LP FROM LISTA_PRODUCTO LP INNER JOIN LISTA_COMPRAS LC ON LP.IDLISTA = LC.IDLISTA INNER JOIN USUARIO U ON LC.IDUSUARIO = U.IDUSUARIO WHERE U.IDUSUARIO = ?; ";
         const query2="DELETE LC FROM LISTA_COMPRAS LC JOIN USUARIO U ON LC.IDUSUARIO=U.IDUSUARIO WHERE U.IDUSUARIO=?";   
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
