-- MySQL dump 10.13  Distrib 5.6.39, for Linux (x86_64)
--
-- Host: localhost    Database: srozic
-- ------------------------------------------------------
-- Server version	5.6.39-cll-lve

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `osoba`
--

DROP TABLE IF EXISTS `osoba`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `osoba` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ime` varchar(45) DEFAULT NULL,
  `prezime` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `osoba`
--

LOCK TABLES `osoba` WRITE;
/*!40000 ALTER TABLE `osoba` DISABLE KEYS */;
INSERT INTO `osoba` (`id`, `ime`, `prezime`) VALUES (1,'Ivan','Boric'),(2,'Branimir','Banic'),(3,'Ivan','Katanusic'),(4,'Ante','Matos'),(5,'Filip','Mihalic'),(6,'Antonio','Mitrovic'),(7,'Zarko','Penava'),(8,'Simun','Rozic'),(9,'BratStariji','Rozic'),(10,'BratMladji','Rozic'),(11,'Eugen','Sunic'),(12,'Marko','Krasniqi'),(13,'Ime1','Prezime1'),(14,'Ime2','Prezime2');
/*!40000 ALTER TABLE `osoba` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `podaci`
--

DROP TABLE IF EXISTS `podaci`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `podaci` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `car` int(11) DEFAULT NULL,
  `moto` int(11) DEFAULT NULL,
  `bus` int(11) DEFAULT NULL,
  `lgv` int(11) DEFAULT NULL,
  `hgv` int(11) DEFAULT NULL,
  `bike` int(11) DEFAULT NULL,
  `other` int(11) NOT NULL,
  `linija` int(11) DEFAULT NULL,
  `datum` date DEFAULT NULL,
  `lokacija` varchar(100) DEFAULT NULL,
  `osobafk` int(11) DEFAULT NULL,
  `inter_min` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `osobaFK_idx` (`osobafk`),
  CONSTRAINT `osobaFK` FOREIGN KEY (`osobafk`) REFERENCES `osoba` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `podaci`
--

LOCK TABLES `podaci` WRITE;
/*!40000 ALTER TABLE `podaci` DISABLE KEYS */;
INSERT INTO `podaci` (`id`, `car`, `moto`, `bus`, `lgv`, `hgv`, `bike`, `other`, `linija`, `datum`, `lokacija`, `osobafk`, `inter_min`) VALUES (1,43,0,1,9,1,0,0,2,'2016-04-26','Kafana Dixy',4,'4'),(2,27,0,1,4,0,0,0,2,'2016-04-26','Kafana Dixy',4,'2'),(3,70,0,1,7,0,0,0,1,'2016-04-26','Kafana Dixy',4,'2'),(4,34,0,1,4,0,0,0,1,'2016-04-26','Kafana Dixy',4,'1'),(5,109,0,2,14,1,0,0,1,'2016-04-26','Kafana Dixy',4,'4'),(6,34,0,1,7,1,0,0,2,'2016-04-26','Kafana Dixy',4,'3'),(7,93,0,2,12,0,0,0,1,'2016-04-26','Kafana Dixy',4,'3'),(8,14,0,1,3,0,0,0,2,'2016-04-26','Kafana Dixy',4,'1'),(9,34,0,1,4,0,0,0,1,'2016-04-26','Kafana Dixy',4,'1'),(10,70,0,1,7,0,0,0,1,'2016-04-26','Kafana Dixy',4,'2'),(11,93,0,2,12,0,0,0,1,'2016-04-26','Kafana Dixy',4,'3'),(12,109,0,2,14,1,0,0,1,'2016-04-26','Kafana Dixy',4,'4'),(13,14,0,1,3,0,0,0,2,'2016-04-26','Kafana Dixy',4,'1'),(14,34,0,1,7,1,0,0,2,'2016-04-26','Kafana Dixy',4,'3'),(15,43,0,1,9,1,0,0,2,'2016-04-26','Kafana Dixy',4,'4'),(16,27,0,1,4,0,0,0,2,'2016-04-26','Kafana Dixy',4,'2'),(17,12,1,0,4,0,0,0,1,'2016-04-27','Kuca broj 7 vise automobila je prema glavnoj cesti manje je dubina sela',11,'3'),(18,16,1,0,4,0,0,0,1,'2016-04-27','Kuca broj 7 vise automobila je prema glavnoj cesti manje je dubina sela',11,'4'),(19,10,1,0,1,0,0,0,1,'2016-04-27','Kuca broj 7 vise automobila je prema glavnoj cesti manje je dubina sela',11,'2'),(20,30,0,2,8,0,0,0,2,'2016-04-27','Kuca broj 7 vise automobila je prema glavnoj cesti manje je dubina sela',11,'2'),(21,20,0,1,5,0,0,0,2,'2016-04-27','Kuca broj 7 vise automobila je prema glavnoj cesti manje je dubina sela',11,'1'),(22,7,0,0,1,0,0,0,1,'2016-04-27','Kuca broj 7 vise automobila je prema glavnoj cesti manje je dubina sela',11,'1'),(23,34,0,2,10,2,0,0,2,'2016-04-27','Kuca broj 7 vise automobila je prema glavnoj cesti manje je dubina sela',11,'3'),(24,46,0,2,13,2,0,0,2,'2016-04-27','Kuca broj 7 vise automobila je prema glavnoj cesti manje je dubina sela',11,'4'),(25,6,0,0,0,0,0,0,1,'2017-04-19','omladinska kod birca i trgovine (pekarna)',11,'2'),(26,6,0,0,1,1,2,0,2,'2017-04-19','omladinska kod birca i trgovine (pekarna)',11,'2'),(27,8,0,0,0,0,2,0,1,'2017-04-19','omladinska kod birca i trgovine (pekarna)',11,'3'),(28,4,0,0,0,1,0,0,2,'2017-04-19','omladinska kod birca i trgovine (pekarna)',11,'1'),(29,3,0,0,0,0,0,0,1,'2017-04-19','omladinska kod birca i trgovine (pekarna)',11,'1'),(30,14,0,0,0,0,3,0,1,'2017-04-19','omladinska kod birca i trgovine (pekarna)',11,'4'),(31,8,0,0,1,1,2,0,2,'2017-04-19','omladinska kod birca i trgovine (pekarna)',11,'3'),(32,10,0,0,3,1,2,0,2,'2017-04-19','omladinska kod birca i trgovine (pekarna)',11,'4');
/*!40000 ALTER TABLE `podaci` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'srozic'
--

--
-- Dumping routines for database 'srozic'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-04 12:17:31
