import { ResultSetHeader, RowDataPacket } from 'mysql2';
import db from '../database/Database';
import { query } from 'express';
import ProductoEntity from '../models/ProductEntity';
export default class GestionProductosRepository
{
    public constructor()
    {
    }
    

    async consultarProductos():Promise<ProductoEntity[]>{
        const query="SELECT IDPRODUCTO, NOMBRE_PRODUCTO, PRECIO, FECHA_FABRICACION FROM PRODUCTO;";
        const res:ProductoEntity[]=[];
        try{
            
            const [result]:ProductoEntity|any  = await db.query(query);
            console.log("ing",result);
            result.map((row:ProductoEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;

    }
    
    async consultarProductoPorId(id:number):Promise<ProductoEntity>{
        const query="SELECT IDPRODUCTO, NOMBRE_PRODUCTO, PRECIO, FECHA_FABRICACION FROM PRODUCTO where IDPRODUCTO=?;";
        const res:ProductoEntity=new ProductoEntity(0,"",0,new Date());
        try{
            
            const [result]:ProductoEntity|any  = await db.query(query,[id]);
            if (result.length > 0) {
                console.log(result[0]);
                     return result[0]; 
               }
               console.log("salio");
               return res; 
    
        }catch(error)
        {
            throw error;
        }

    }
    
   
    async consultarProductosPorNombre(nombre:string):Promise<ProductoEntity>{
        const query="SELECT IDPRODUCTO, NOMBRE_PRODUCTO, PRECIO, FECHA_FABRICACION FROM PRODUCTO where NOMBRE_PRODUCTO=?;";
        const res:ProductoEntity=new ProductoEntity(0,"",0,new Date());
        try{
            
            const [result]:ProductoEntity|any  = await db.query(query,[nombre]);
            if (result.length > 0) {
                console.log(result[0]);
                     return result[0]; 
               }
               console.log("salio");
               return res; 
    
        }catch(error)
        {
            throw error;
        }
    }
}