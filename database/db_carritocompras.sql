/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     05/11/2023 08:49:32 p. m.                    */
/*==============================================================*/


drop table if exists DISTRIBUCION;

drop table if exists LISTA_COMPRAS;

drop table if exists LISTA_PRODUCTO;

drop table if exists PROCESO_COMPRA;

drop table if exists PRODUCTO;

drop table if exists PROVEEDOR;

drop table if exists ROL;

drop table if exists USUARIO;

/*==============================================================*/
/* Table: DISTRIBUCION                                          */
/*==============================================================*/
create table DISTRIBUCION
(
   IDPROVEEDOR          INT not null,
   IDPRODUCTO           INT not null,
   primary key (IDPROVEEDOR, IDPRODUCTO)
);

/*==============================================================*/
/* Table: LISTA_COMPRAS                                         */
/*==============================================================*/
CREATE TABLE LISTA_COMPRAS
(
   IDLISTA              INT AUTO_INCREMENT PRIMARY KEY,
   IDUSUARIO            INT,
   FECHA_LISTA          DATE NOT NULL,
   NOMBRE_LISTA         VARCHAR(15) NOT NULL
);


/*==============================================================*/
/* Table: LISTA_PRODUCTO                                        */
/*==============================================================*/
create table LISTA_PRODUCTO
(
   IDLISTA              INT not null,
   IDPRODUCTO           INT not null,
   ESTADO               varchar(10) not null,
   primary key (IDLISTA, IDPRODUCTO)
);

/*==============================================================*/
/* Table: PROCESO_COMPRA                                        */
/*==============================================================*/
create table PROCESO_COMPRA
(
   ID_PROCESO           INT AUTO_INCREMENT PRIMARY KEY,
   IDUSUARIO            INT not null,
   IDLISTA              INT not null,
   IDPRODUCTO           INT not null
);

/*==============================================================*/
/* Table: PRODUCTO                                              */
/*==============================================================*/
create table PRODUCTO
(
   IDPRODUCTO           INT not null,
   NOMBRE_PRODUCTO      varchar(20) not null,
   PRECIO               INT not null,
   FECHA_FABRICACION    date not null,
   primary key (IDPRODUCTO)
);

/*==============================================================*/
/* Table: PROVEEDOR                                             */
/*==============================================================*/
create table PROVEEDOR
(
   IDPROVEEDOR          INT not null,
   NOMBRE_PROVEEDOR     varchar(20) not null,
   primary key (IDPROVEEDOR)
);

/*==============================================================*/
/* Table: ROL                                                   */
/*==============================================================*/
create table ROL
(
   ID_ROL               INT not null,
   NOMBRE_ROL           varchar(15) not null,
   primary key (ID_ROL)
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO
(
   IDUSUARIO            INT not null,
   ID_ROL               INT not null,
   NOMBRE_USUARIO       varchar(30) not null,
   CLAVE                varchar(15) not null,
   USERNAME             varchar(10) not null,
   primary key (IDUSUARIO)
);

alter table DISTRIBUCION add constraint FK_DISTRIBUCION foreign key (IDPRODUCTO)
      references PRODUCTO (IDPRODUCTO) on delete restrict on update restrict;

alter table DISTRIBUCION add constraint FK_DISTRIBUCION2 foreign key (IDPROVEEDOR)
      references PROVEEDOR (IDPROVEEDOR) on delete restrict on update restrict;

alter table LISTA_COMPRAS add constraint FK_TIENE foreign key (IDUSUARIO)
      references USUARIO (IDUSUARIO) on delete restrict on update restrict;

alter table LISTA_PRODUCTO add constraint FK_LISTA_PRODUCTO foreign key (IDPRODUCTO)
      references PRODUCTO (IDPRODUCTO) on delete restrict on update restrict;

alter table LISTA_PRODUCTO add constraint FK_LISTA_PRODUCTO2 foreign key (IDLISTA)
      references LISTA_COMPRAS (IDLISTA) on delete restrict on update restrict;

alter table PROCESO_COMPRA add constraint FK_GESTIONA foreign key (IDUSUARIO)
      references USUARIO (IDUSUARIO) on delete restrict on update restrict;

alter table PROCESO_COMPRA add constraint FK_MANTIENE foreign key (IDLISTA)
      references LISTA_COMPRAS (IDLISTA) on delete restrict on update restrict;

alter table PROCESO_COMPRA add constraint FK_PERTENECE foreign key (IDPRODUCTO)
      references PRODUCTO (IDPRODUCTO) on delete restrict on update restrict;

alter table USUARIO add constraint FK_CONTIENE foreign key (ID_ROL)
      references ROL (ID_ROL) on delete restrict on update restrict;

