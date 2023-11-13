import express,{ Application } from "express";
import morgan from 'morgan';
import cors from 'cors';

import usuarioRoutes from "./src/routes/UsuarioRoutes";
import indexRoutes from "./src/routes/indexRoutes";
import rolesRoutes from "./src/routes/RolesRoutes";
import productoRoutes from "./src/routes/ProductsRoutes"
import lProductsRoutes from "./src/routes/ListProductsRoutes";
class Servidor{
    public app: Application;
    constructor(){
       this.app= express();
       this.config();
       this.routes();
    }
    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());//entender los formatos json
        this.app.use(express.urlencoded({extended: false}));//enviar desde formulario html
    }
    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/api/usuarios',usuarioRoutes);     
        this.app.use('/api/roles', rolesRoutes);  
        this.app.use('/api/productos', productoRoutes);  
        this.app.use('/api/productosList', lProductsRoutes);  

    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }

}
const server=new Servidor();
server.start();