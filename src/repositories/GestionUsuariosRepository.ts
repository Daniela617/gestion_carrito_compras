import { ResultSetHeader, RowDataPacket } from 'mysql2';
import db from '../database/Database';
import UsuarioEntity from '../models/UsuarioEntity';
import { query } from 'express';

//TODO: Implementar el uso de transacciones
export default class GestionUsuarioRepository{
    public constructor()
    {
    }
    public async crearUsuarioRol(usuario: UsuarioEntity[]): Promise<UsuarioEntity[]>{
        //TODO: Refactorizar
        const query = "insert into usuario values(?,?,?,?,?)";
        const query2 ="SELECT  IDUSUARIO,ID_ROL ,  NOMBRE_USUARIO , CLAVE ,USERNAME FROM USUARIO WHERE ";
        const user:UsuarioEntity = new UsuarioEntity(usuario[0].IDUSUARIO,usuario[0].ID_ROL,usuario[0].NOMBRE_USUARIO,usuario[0].CLAVE,usuario[0].USERNAME);
        const res:UsuarioEntity[]=[];
        try{
            const [result1]:any = await db.query(query,[user.IDUSUARIO,user.ID_ROL,user.NOMBRE_USUARIO, user.CLAVE, user.USERNAME]);
            if (result1.affectedRows === 1) {
                const [result2]:UsuarioEntity|any = await db.query(query2,[result1.IDUSUARIO]);
                result2.map((row:UsuarioEntity)=>{
                    res.push(row);
                })
            }    
        }catch(error)
        {
            return res;
        }
        return res;
    }
}