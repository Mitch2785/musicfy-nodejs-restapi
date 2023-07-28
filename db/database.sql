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
('A kind of magic', 'Queen', '2010', 'https://upload.wikimedia.org/wikipedia/en/6/63/Queen_A_Kind_Of_Magic.png'),
('Meteora', 'Linkin Park', '2011', 'https://www.rockaxis.com/img/newsList/3041215.jpg');

SELECT COUNT(*) AS cantidad FROM `album` WHERE `eliminado` = false;
