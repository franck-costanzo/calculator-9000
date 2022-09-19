CREATE SCHEMA IF NOT EXISTS `saveCalc` DEFAULT CHARACTER SET utf8mb4 ;

USE `saveCalc` ;

-- ------------------------------------
--          table droits             --
-- ------------------------------------

CREATE TABLE IF NOT EXISTS calculs (
    id_calcul INT AUTO_INCREMENT NOT NULL, 
    calcul VARCHAR(255),
    result VARCHAR(255), 
    PRIMARY KEY (id_calcul)) ENGINE=InnoDB;