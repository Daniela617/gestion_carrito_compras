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
        const query2 ="SELECT  IDUSUARIO,ID_ROL ,  NOMBRE_USUARIO , CLAVE ,USERNAME FROM USUARIO WHERE = ? ";
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
     async actualizarUsuario(id:number, usuario:UsuarioEntity[]):Promise<UsuarioEntity[]>{
        const query1="UPDATE USUARIO SET IDUSUARIO=?,ID_ROL =?,  NOMBRE_USUARIO=? , CLAVE =?,USERNAME=? FROM USUARIO WHERE  ";
        const query2 ="SELECT  IDUSUARIO,ID_ROL ,  NOMBRE_USUARIO , CLAVE ,USERNAME FROM USUARIO WHERE = ? ";
        const res: UsuarioEntity[]=[];
        try{
            const [result]:any = await db.query(query1,[usuario[0].IDUSUARIO,usuario[0].ID_ROL,usuario[0].NOMBRE_USUARIO,usuario[0].CLAVE,usuario[0].USERNAME]);
            if(result.affectedRows != 0)
            {
                const [result2]:UsuarioEntity|any = await db.query(query2, usuario[0].IDUSUARIO);
                result2.map((row:UsuarioEntity)=>{
                    res.push(row);
                })
            }
            return result;
        }catch(error)
        {
            return [];
        }
    
    }
    async eliminarUsuario(id: number): Promise<boolean> {
        const query = "DELETE FROM USUARIO WHERE IDUSUARIO = ?";
        try{
            await db.query(query,[id]);
            return true;
        }catch(error)
        {
            console.error("Error al eliminar usuario:", error);
            return false;
        }
    }
    async consultarUsuarios(): Promise<UsuarioEntity[]> {
        const query1 = "SELECT  IDUSUARIO,ID_ROL ,  NOMBRE_USUARIO , CLAVE ,USERNAME FROM USUARIO WHERE ROL_ID = 2 ";
        const res:UsuarioEntity[] = []
        try{
            const [result]:UsuarioEntity|any  = await db.query(query1);
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