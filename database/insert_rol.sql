INSERT INTO ROL (ID_ROL, NOMBRE_ROL)
VALUES (1, 'Administrador');
INSERT INTO ROL (ID_ROL, NOMBRE_ROL)
VALUES (2, 'Cliente');

INSERT INTO `usuario` (`IDUSUARIO`, `ID_ROL`, `NOMBRE_USUARIO`, `CLAVE`, `USERNAME`) 
VALUES ('11', '1', 'Isabella Solarte', '123', 'isabsolarte'),
 ('12', '1', 'Daniela Riascos', '123', 'driascos');

INSERT INTO `usuario` (`IDUSUARIO`, `ID_ROL`, `NOMBRE_USUARIO`, `CLAVE`, `USERNAME`) 
VALUES ('13', '2', 'Carolina Solarte', '123', 'carsolarte'),
 ('14', '2', 'Santiago Benitez', '123', 'sbenitez');

INSERT INTO `usuario` (`IDUSUARIO`, `ID_ROL`, `NOMBRE_USUARIO`, `CLAVE`, `USERNAME`) 
VALUES ('15', '2', 'Claudia Urrego', '123', 'currego'),
 ('16', '2', 'Wilson Riascos', '123', 'wriascos');

 INSERT INTO `usuario` (`IDUSUARIO`, `ID_ROL`, `NOMBRE_USUARIO`, `CLAVE`, `USERNAME`) 
VALUES ('17', '2', 'Jose Campo', '123', 'jcampo'),
 ('18', '2', 'Juan Navia', '123', 'jnavia');

 INSERT INTO `usuario` (`IDUSUARIO`, `ID_ROL`, `NOMBRE_USUARIO`, `CLAVE`, `USERNAME`) 
VALUES ('20', '2', 'Simon Guzman', '123', 'siguzman'),
 ('19', '2', 'Camilo Bonilla', '123', 'cbonilla');




 INSERT INTO PRODUCTO (IDPRODUCTO, NOMBRE_PRODUCTO, PRECIO, FECHA_FABRICACION)
VALUES (1, 'Camiseta', 20, '2023-01-15');

INSERT INTO PRODUCTO (IDPRODUCTO, NOMBRE_PRODUCTO, PRECIO, FECHA_FABRICACION)
VALUES (2, 'Zapatos deportivos', 50, '2023-02-28');

INSERT INTO PRODUCTO (IDPRODUCTO, NOMBRE_PRODUCTO, PRECIO, FECHA_FABRICACION)
VALUES (3, 'Portátil', 800, '2023-03-10');

INSERT INTO PRODUCTO (IDPRODUCTO, NOMBRE_PRODUCTO, PRECIO, FECHA_FABRICACION)
VALUES (4, 'Cámara digital', 150, '2023-04-05');

INSERT INTO PRODUCTO (IDPRODUCTO, NOMBRE_PRODUCTO, PRECIO, FECHA_FABRICACION)
VALUES (5, 'Reloj inteligente', 100, '2023-05-20');
SELECT P.NOMBRE_PRODUCTO,P.PRECIO 
FROM PRODUCTO P INNER JOIN LISTA_PRODUCTOS LP 
ON P.IDPRODUCTO=LP.IDPRODUCTO INNER JOIN LISTA_COMPRAS LC
ON LP.IDLISTA=LC.IDLISTA INNER JOIN USUARIO US
ON LC.IDUSUARIO=US.IDUSUARIO
WHERE IDUSUARIO=?;


CONCAT('FACTURA_'(SELECT NOMBRE_USUARIO
FROM USUARIO
WHERE IDUSUARIO=?))


//
{
        "_idusuario": 11,
        "_nombreusuario": "Isabella Solarte",
        "_username": "isabsol",
        "_clave": "123",
        "_idrol": 1
    }


     {
        "_idlista": 2,
        "_idproducto": 1,
        "_estado": ""
    }