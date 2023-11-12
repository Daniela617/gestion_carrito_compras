import { ResultSetHeader, RowDataPacket } from 'mysql2';
import db from '../database/Database';
import UsuarioEntity from '../models/UsuarioEntity';
import { query } from 'express';

//TODO: Implementar el uso de transacciones
export default class GestionUsuarioRepository{
    public constructor()
    {
    }
    
    public async consultarUsuarios(): Promise<UsuarioEntity[]> {
        const query1 = "SELECT IDUSUARIO,ID_ROL ,  NOMBRE_USUARIO , CLAVE ,USERNAME FROM USUARIO; ";
        const res:UsuarioEntity[] = []
        try{
            
            const [result]:UsuarioEntity|any  = await db.query(query1);
            console.log("ing",result);
            result.map((row:UsuarioEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;
    }
     async consultarUsuarioPorId(id: number): Promise<UsuarioEntity[]> {
        const query = "SELECT  IDUSUARIO,ID_ROL ,  NOMBRE_USUARIO , CLAVE ,USERNAME FROM USUARIO WHERE IDUSUARIO=? ";
        const res:UsuarioEntity[] = []
        console.log(id);
        try{
            
            const [result]:UsuarioEntity|any  = await db.query(query, [id]);
            result.map((row:UsuarioEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;
    }
    
    async consultarUsuariosPorLogin(login: string): Promise<UsuarioEntity[]> {
        const query3 = "SELECT  IDUSUARIO,ID_ROL ,  NOMBRE_USUARIO , CLAVE ,USERNAME FROM USUARIO WHERE USERNAME=?";
        const res:UsuarioEntity[] = []
        try{
            const [result]:UsuarioEntity|any  = await db.query(query3, [login]);
            result.map((row:UsuarioEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;
    }
   

}