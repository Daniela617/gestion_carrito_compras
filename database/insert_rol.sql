INSERT INTO ROL (ID_ROL, NOMBRE_ROL)
VALUES (1, 'Administrador');
INSERT INTO ROL (ID_ROL, NOMBRE_ROL)
VALUES (2, 'Cliente');

INSERT INTO `usuario` (`IDUSUARIO`, `ID_ROL`, `NOMBRE_USUARIO`, `CLAVE`, `USERNAME`) 
VALUES ('11', '1', 'Isabella Solarte', '123', 'isabsolarte'),
 ('12', '1', 'Daniela Riascos', '123', 'driascos');