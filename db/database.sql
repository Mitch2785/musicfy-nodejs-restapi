CREATE DATABASE iF NOT EXISTS musicfyDB;

USE musicfyDB;

CREATE TABLE album(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) DEFAULT NULL,
    `artista` VARCHAR(255) DEFAULT NULL,
    `year` INT(4) DEFAULT NULL,
    `imagen` VARCHAR(255) DEFAULT NULL,
    `eliminado` BOOLEAN DEFAULT false,
    PRIMARY KEY (`id`)
);


INSERT INTO `album` (`nombre`, `artista`, `year`, `imagen`) VALUES
('A kind of magic', 'Queen', '2010', 'url_imagen'),
('Meteora', 'Linkin Park', '2011', 'url_imagen2');

SELECT COUNT(*) AS cantidad FROM `album` WHERE `eliminado` = false;
