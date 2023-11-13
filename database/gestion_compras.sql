-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-11-2023 a las 05:28:15
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestion_compras`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distribucion`
--

CREATE TABLE `distribucion` (
  `IDPROVEEDOR` int(11) NOT NULL,
  `IDPRODUCTO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_compras`
--

CREATE TABLE `lista_compras` (
  `IDLISTA` int(11) NOT NULL,
  `IDUSUARIO` int(11) DEFAULT NULL,
  `FECHA_LISTA` date NOT NULL,
  `NOMBRE_LISTA` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lista_compras`
--

INSERT INTO `lista_compras` (`IDLISTA`, `IDUSUARIO`, `FECHA_LISTA`, `NOMBRE_LISTA`) VALUES
(1, 13, '2023-11-11', 'CAR_LISTA'),
(6, 19, '2023-11-12', 'FACTURA_Camilo Bonilla'),
(7, 17, '2023-11-12', 'LISTA_COMPRAS_Jose Campo'),
(8, 15, '2023-11-12', 'LISTA_COMPRAS_Claudia Urrego'),
(9, 15, '2023-11-12', 'LISTA_COMPRAS_Claudia Urrego'),
(10, 17, '2023-11-12', 'LISTA_COMPRAS_Jose Campo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_producto`
--

CREATE TABLE `lista_producto` (
  `IDLISTA` int(11) NOT NULL,
  `IDPRODUCTO` int(11) NOT NULL,
  `ESTADO` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lista_producto`
--

INSERT INTO `lista_producto` (`IDLISTA`, `IDPRODUCTO`, `ESTADO`) VALUES
(1, 1, 'Recibido'),
(1, 2, 'Recibido'),
(1, 3, 'Recibido'),
(1, 4, 'Recibido'),
(1, 5, 'Recibido');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proceso_compra`
--

CREATE TABLE `proceso_compra` (
  `ID_PROCESO` int(11) NOT NULL,
  `IDUSUARIO` int(11) NOT NULL,
  `IDLISTA` int(11) NOT NULL,
  `IDPRODUCTO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `IDPRODUCTO` int(11) NOT NULL,
  `NOMBRE_PRODUCTO` varchar(20) NOT NULL,
  `PRECIO` int(11) NOT NULL,
  `FECHA_FABRICACION` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`IDPRODUCTO`, `NOMBRE_PRODUCTO`, `PRECIO`, `FECHA_FABRICACION`) VALUES
(1, 'Camiseta', 20, '2023-01-15'),
(2, 'Zapatos deportivos', 50, '2023-02-28'),
(3, 'Portátil', 800, '2023-03-10'),
(4, 'Cámara digital', 150, '2023-04-05'),
(5, 'Reloj inteligente', 100, '2023-05-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `IDPROVEEDOR` int(11) NOT NULL,
  `NOMBRE_PROVEEDOR` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `ID_ROL` int(11) NOT NULL,
  `NOMBRE_ROL` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`ID_ROL`, `NOMBRE_ROL`) VALUES
(1, 'Administrador'),
(2, 'Cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `IDUSUARIO` int(11) NOT NULL,
  `ID_ROL` int(11) NOT NULL,
  `NOMBRE_USUARIO` varchar(30) NOT NULL,
  `CLAVE` varchar(15) NOT NULL,
  `USERNAME` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`IDUSUARIO`, `ID_ROL`, `NOMBRE_USUARIO`, `CLAVE`, `USERNAME`) VALUES
(11, 1, 'Isabella Solarte', '123', 'isabsolart'),
(12, 1, 'Daniela Riascos', '123', 'driascos'),
(13, 2, 'Carolina Solarte', '123', 'carsolarte'),
(14, 2, 'Santiago Benitez', '123', 'sbenitez'),
(15, 2, 'Claudia Urrego', '123', 'currego'),
(16, 2, 'Wilson Riascos', '123', 'wriascos'),
(17, 2, 'Jose Campo', '123', 'jcampo'),
(18, 2, 'Juan Navia', '123', 'jnavia'),
(19, 2, 'Camilo Bonilla', '123', 'cbonilla'),
(20, 2, 'Simon Guzman', '123', 'siguzman');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `distribucion`
--
ALTER TABLE `distribucion`
  ADD PRIMARY KEY (`IDPROVEEDOR`,`IDPRODUCTO`),
  ADD KEY `FK_DISTRIBUCION` (`IDPRODUCTO`);

--
-- Indices de la tabla `lista_compras`
--
ALTER TABLE `lista_compras`
  ADD PRIMARY KEY (`IDLISTA`),
  ADD KEY `FK_TIENE` (`IDUSUARIO`);

--
-- Indices de la tabla `lista_producto`
--
ALTER TABLE `lista_producto`
  ADD PRIMARY KEY (`IDLISTA`,`IDPRODUCTO`),
  ADD KEY `FK_LISTA_PRODUCTO` (`IDPRODUCTO`);

--
-- Indices de la tabla `proceso_compra`
--
ALTER TABLE `proceso_compra`
  ADD PRIMARY KEY (`ID_PROCESO`),
  ADD KEY `FK_GESTIONA` (`IDUSUARIO`),
  ADD KEY `FK_MANTIENE` (`IDLISTA`),
  ADD KEY `FK_PERTENECE` (`IDPRODUCTO`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`IDPRODUCTO`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`IDPROVEEDOR`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`ID_ROL`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IDUSUARIO`),
  ADD KEY `FK_CONTIENE` (`ID_ROL`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lista_compras`
--
ALTER TABLE `lista_compras`
  MODIFY `IDLISTA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `proceso_compra`
--
ALTER TABLE `proceso_compra`
  MODIFY `ID_PROCESO` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `distribucion`
--
ALTER TABLE `distribucion`
  ADD CONSTRAINT `FK_DISTRIBUCION` FOREIGN KEY (`IDPRODUCTO`) REFERENCES `producto` (`IDPRODUCTO`),
  ADD CONSTRAINT `FK_DISTRIBUCION2` FOREIGN KEY (`IDPROVEEDOR`) REFERENCES `proveedor` (`IDPROVEEDOR`);

--
-- Filtros para la tabla `lista_compras`
--
ALTER TABLE `lista_compras`
  ADD CONSTRAINT `FK_TIENE` FOREIGN KEY (`IDUSUARIO`) REFERENCES `usuario` (`IDUSUARIO`);

--
-- Filtros para la tabla `lista_producto`
--
ALTER TABLE `lista_producto`
  ADD CONSTRAINT `FK_LISTA_PRODUCTO` FOREIGN KEY (`IDPRODUCTO`) REFERENCES `producto` (`IDPRODUCTO`),
  ADD CONSTRAINT `FK_LISTA_PRODUCTO2` FOREIGN KEY (`IDLISTA`) REFERENCES `lista_compras` (`IDLISTA`);

--
-- Filtros para la tabla `proceso_compra`
--
ALTER TABLE `proceso_compra`
  ADD CONSTRAINT `FK_GESTIONA` FOREIGN KEY (`IDUSUARIO`) REFERENCES `usuario` (`IDUSUARIO`),
  ADD CONSTRAINT `FK_MANTIENE` FOREIGN KEY (`IDLISTA`) REFERENCES `lista_compras` (`IDLISTA`),
  ADD CONSTRAINT `FK_PERTENECE` FOREIGN KEY (`IDPRODUCTO`) REFERENCES `producto` (`IDPRODUCTO`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `FK_CONTIENE` FOREIGN KEY (`ID_ROL`) REFERENCES `rol` (`ID_ROL`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
