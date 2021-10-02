CREATE TABLE productos (
  codigo int NOT NULL AUTO_INCREMENT,
  nombre varchar(20) NOT NULL,
  precio double NOT NULL,
  inventario int NOT NULL,
  PRIMARY KEY (codigo)
)