-- MySQL dump 10.13  Distrib 5.6.39, for Linux (x86_64)
--
-- Host: localhost    Database: ikplabpravi
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
-- Table structure for table `AudioPodatak`
--

DROP TABLE IF EXISTS `AudioPodatak`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AudioPodatak` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Content` varchar(45) DEFAULT NULL,
  `Beacon_Id` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_AudioPodatak_Beacon1_idx` (`Beacon_Id`),
  CONSTRAINT `fk_AudioPodatak_Beacon1` FOREIGN KEY (`Beacon_Id`) REFERENCES `Beacon` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AudioPodatak`
--

LOCK TABLES `AudioPodatak` WRITE;
/*!40000 ALTER TABLE `AudioPodatak` DISABLE KEYS */;
INSERT INTO `AudioPodatak` (`Id`, `Content`, `Beacon_Id`) VALUES (1,'pathstaza1',1);
/*!40000 ALTER TABLE `AudioPodatak` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Beacon`
--

DROP TABLE IF EXISTS `Beacon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Beacon` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Naziv` varchar(45) DEFAULT NULL,
  `Major` varchar(45) DEFAULT NULL,
  `Minor` varchar(45) DEFAULT NULL,
  `TxPower` varchar(45) DEFAULT NULL,
  `Lokacija_Id` int(11) NOT NULL,
  `UUID` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_Beacon_Lokacija1_idx` (`Lokacija_Id`),
  CONSTRAINT `fk_Beacon_Lokacija1` FOREIGN KEY (`Lokacija_Id`) REFERENCES `Lokacija` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Beacon`
--

LOCK TABLES `Beacon` WRITE;
/*!40000 ALTER TABLE `Beacon` DISABLE KEYS */;
INSERT INTO `Beacon` (`Id`, `Naziv`, `Major`, `Minor`, `TxPower`, `Lokacija_Id`, `UUID`) VALUES (1,'Zn6uP','1213','232','-65',1,'239f9i23j-2f23pd20'),(2,'6pNH','1236','212','-45',2,'123io23ekld2kl3');
/*!40000 ALTER TABLE `Beacon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Lokacija`
--

DROP TABLE IF EXISTS `Lokacija`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Lokacija` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Latitude` varchar(45) DEFAULT NULL,
  `Longitude` varchar(45) DEFAULT NULL,
  `Ulica` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Lokacija`
--

LOCK TABLES `Lokacija` WRITE;
/*!40000 ALTER TABLE `Lokacija` DISABLE KEYS */;
INSERT INTO `Lokacija` (`Id`, `Latitude`, `Longitude`, `Ulica`) VALUES (1,'34,2349','45,32324','Vlaska ulica'),(2,'32,111','47,213','Stanka Vraza 65'),(3,'23.322','32.2342','Odranaska'),(7,'sadfa','adsa','asd'),(8,'232.2342','5422.32','Ulica Braca'),(9,'sklajfa','askljdf','asd'),(10,'abla','labka','alksjbdvla'),(11,'','',''),(12,'','',''),(13,'','',''),(14,'','',''),(15,'','',''),(16,'','',''),(17,'','','');
/*!40000 ALTER TABLE `Lokacija` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ModelUredaj`
--

DROP TABLE IF EXISTS `ModelUredaj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ModelUredaj` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Naziv` varchar(45) DEFAULT NULL,
  `TerminalniUredaj_Id` int(11) NOT NULL,
  `Student_Id` int(11) NOT NULL,
  PRIMARY KEY (`Id`,`TerminalniUredaj_Id`),
  KEY `fk_ModelUredaj_TerminalniUredaj1_idx` (`TerminalniUredaj_Id`),
  KEY `fk_ModelUredaj_Student1_idx` (`Student_Id`),
  CONSTRAINT `fk_ModelUredaj_Student1` FOREIGN KEY (`Student_Id`) REFERENCES `Student` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ModelUredaj_TerminalniUredaj1` FOREIGN KEY (`TerminalniUredaj_Id`) REFERENCES `TerminalniUredaj` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ModelUredaj`
--

LOCK TABLES `ModelUredaj` WRITE;
/*!40000 ALTER TABLE `ModelUredaj` DISABLE KEYS */;
INSERT INTO `ModelUredaj` (`Id`, `Naziv`, `TerminalniUredaj_Id`, `Student_Id`) VALUES (1,'925',1,1),(2,'925',2,10),(3,'Xperia Z3',3,10),(4,'Xperia Z3',4,10),(5,'Xperia Z1',5,10),(6,'Xperia Z',6,10),(7,'iPhone4',7,10),(8,'iPhone 3G',8,10),(9,'7 Mozart',9,10),(10,'Galaxy S4',10,10),(11,'SmartWatch2',11,10),(12,'SmartWatch2',12,10),(13,'Gear',13,3),(14,'Galaxy Tab 3',14,10),(15,'Galaxy S6 edge',15,10),(16,'Galaxy S6',16,10),(17,'Iconia-A1',17,10),(18,'Iconia-A1',18,10),(19,'Iconia-A1',19,10),(20,NULL,20,10),(21,NULL,21,10),(22,NULL,22,10),(23,NULL,23,10),(24,NULL,24,10),(25,NULL,25,10),(26,NULL,26,10),(27,NULL,27,2),(28,'DH47',28,10),(29,'R124OI',29,10),(30,'Contactless SDK',30,10),(31,'Contactless SDK',31,10),(32,'gumena narukvica',32,10),(33,'All surface tag',33,10),(34,'BR301',34,10),(35,'RAC+5021CI',35,10),(36,'RC-S380',36,10),(37,'Sciel SCIBT36',37,10),(38,'NFC Solution Development Kit',38,10),(39,'NFC Solution Development Kit',39,10),(40,'NFC Solution Development Kit',40,10),(41,'NFC Starter Kit',41,10),(42,NULL,42,10),(43,'SDK\'s CD',43,10),(44,'Smartcard Automation Tool',44,10),(45,'Smartcard Automation Tool',45,10);
/*!40000 ALTER TABLE `ModelUredaj` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Proizvodac`
--

DROP TABLE IF EXISTS `Proizvodac`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Proizvodac` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Naziv` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Proizvodac`
--

LOCK TABLES `Proizvodac` WRITE;
/*!40000 ALTER TABLE `Proizvodac` DISABLE KEYS */;
/*!40000 ALTER TABLE `Proizvodac` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Proizvodac_has_TerminalniUredaj`
--

DROP TABLE IF EXISTS `Proizvodac_has_TerminalniUredaj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Proizvodac_has_TerminalniUredaj` (
  `Proizvodac_Id` int(11) NOT NULL,
  `TerminalniUredaj_Id` int(11) NOT NULL,
  PRIMARY KEY (`Proizvodac_Id`,`TerminalniUredaj_Id`),
  KEY `fk_Proizvodac_has_TerminalniUredaj_TerminalniUredaj1_idx` (`TerminalniUredaj_Id`),
  KEY `fk_Proizvodac_has_TerminalniUredaj_Proizvodac1_idx` (`Proizvodac_Id`),
  CONSTRAINT `fk_Proizvodac_has_TerminalniUredaj_Proizvodac1` FOREIGN KEY (`Proizvodac_Id`) REFERENCES `Proizvodac` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Proizvodac_has_TerminalniUredaj_TerminalniUredaj1` FOREIGN KEY (`TerminalniUredaj_Id`) REFERENCES `TerminalniUredaj` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Proizvodac_has_TerminalniUredaj`
--

LOCK TABLES `Proizvodac_has_TerminalniUredaj` WRITE;
/*!40000 ALTER TABLE `Proizvodac_has_TerminalniUredaj` DISABLE KEYS */;
/*!40000 ALTER TABLE `Proizvodac_has_TerminalniUredaj` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RadoviProjekti`
--

DROP TABLE IF EXISTS `RadoviProjekti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RadoviProjekti` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Naziv` varchar(45) DEFAULT NULL,
  `Storage` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RadoviProjekti`
--

LOCK TABLES `RadoviProjekti` WRITE;
/*!40000 ALTER TABLE `RadoviProjekti` DISABLE KEYS */;
/*!40000 ALTER TABLE `RadoviProjekti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RadoviProjekti_has_Student`
--

DROP TABLE IF EXISTS `RadoviProjekti_has_Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RadoviProjekti_has_Student` (
  `RadoviProjekti_Id` int(11) NOT NULL,
  `Student_Id` int(11) NOT NULL,
  PRIMARY KEY (`RadoviProjekti_Id`,`Student_Id`),
  KEY `fk_RadoviProjekti_has_Student_Student1_idx` (`Student_Id`),
  KEY `fk_RadoviProjekti_has_Student_RadoviProjekti1_idx` (`RadoviProjekti_Id`),
  CONSTRAINT `fk_RadoviProjekti_has_Student_RadoviProjekti1` FOREIGN KEY (`RadoviProjekti_Id`) REFERENCES `RadoviProjekti` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_RadoviProjekti_has_Student_Student1` FOREIGN KEY (`Student_Id`) REFERENCES `Student` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RadoviProjekti_has_Student`
--

LOCK TABLES `RadoviProjekti_has_Student` WRITE;
/*!40000 ALTER TABLE `RadoviProjekti_has_Student` DISABLE KEYS */;
/*!40000 ALTER TABLE `RadoviProjekti_has_Student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SlikaPodatak`
--

DROP TABLE IF EXISTS `SlikaPodatak`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SlikaPodatak` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Content` varchar(45) DEFAULT NULL,
  `Beacon_Id` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_SlikaPodatak_Beacon1_idx` (`Beacon_Id`),
  CONSTRAINT `fk_SlikaPodatak_Beacon1` FOREIGN KEY (`Beacon_Id`) REFERENCES `Beacon` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SlikaPodatak`
--

LOCK TABLES `SlikaPodatak` WRITE;
/*!40000 ALTER TABLE `SlikaPodatak` DISABLE KEYS */;
INSERT INTO `SlikaPodatak` (`Id`, `Content`, `Beacon_Id`) VALUES (1,'pathstaza1',1),(2,'Upload',1),(3,'Upload',1);
/*!40000 ALTER TABLE `SlikaPodatak` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Student` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Ime` varchar(45) DEFAULT NULL,
  `Prezime` varchar(45) DEFAULT NULL,
  `Jmbag` varchar(45) DEFAULT NULL,
  `DatRod` varchar(45) DEFAULT NULL,
  `Telefon` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
INSERT INTO `Student` (`Id`, `Ime`, `Prezime`, `Jmbag`, `DatRod`, `Telefon`) VALUES (1,'Kresimir','Bratic',NULL,NULL,NULL),(2,'Boris','Bucak',NULL,NULL,NULL),(3,'Ivan','Cvitic',NULL,NULL,NULL),(4,'Dragan','Perakovic',NULL,NULL,NULL),(5,'Marko','Perisa',NULL,NULL,NULL),(6,'Rosana ','Sente',NULL,NULL,NULL),(7,'16.013384926298208','45.72877812174288',NULL,NULL,NULL),(8,'Eugen','Sunic',NULL,NULL,NULL),(9,'Petra','Zoric',NULL,NULL,NULL),(10,NULL,NULL,NULL,NULL,NULL),(11,'nesto','nesto',NULL,NULL,NULL),(12,'','',NULL,NULL,NULL),(13,'','',NULL,NULL,NULL),(14,'Rosana','Sente',NULL,NULL,NULL),(15,'Rosana','Volim te eugen',NULL,NULL,NULL);
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student_has_RadoviProjekti`
--

DROP TABLE IF EXISTS `Student_has_RadoviProjekti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Student_has_RadoviProjekti` (
  `Student_Id` int(11) NOT NULL,
  `RadoviProjekti_Id` int(11) NOT NULL,
  PRIMARY KEY (`Student_Id`,`RadoviProjekti_Id`),
  KEY `fk_Student_has_RadoviProjekti_RadoviProjekti1_idx` (`RadoviProjekti_Id`),
  KEY `fk_Student_has_RadoviProjekti_Student1_idx` (`Student_Id`),
  CONSTRAINT `fk_Student_has_RadoviProjekti_RadoviProjekti1` FOREIGN KEY (`RadoviProjekti_Id`) REFERENCES `RadoviProjekti` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_has_RadoviProjekti_Student1` FOREIGN KEY (`Student_Id`) REFERENCES `Student` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student_has_RadoviProjekti`
--

LOCK TABLES `Student_has_RadoviProjekti` WRITE;
/*!40000 ALTER TABLE `Student_has_RadoviProjekti` DISABLE KEYS */;
/*!40000 ALTER TABLE `Student_has_RadoviProjekti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TerminalniUredaj`
--

DROP TABLE IF EXISTS `TerminalniUredaj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TerminalniUredaj` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Naziv` varchar(45) DEFAULT NULL,
  `Datum_posudba` varchar(45) DEFAULT NULL,
  `Posudenost` tinyint(1) DEFAULT NULL,
  `Napomena` varchar(45) DEFAULT NULL,
  `Boja` varchar(45) DEFAULT NULL,
  `Vrsta` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TerminalniUredaj`
--

LOCK TABLES `TerminalniUredaj` WRITE;
/*!40000 ALTER TABLE `TerminalniUredaj` DISABLE KEYS */;
INSERT INTO `TerminalniUredaj` (`Id`, `Naziv`, `Datum_posudba`, `Posudenost`, `Napomena`, `Boja`, `Vrsta`) VALUES (1,'Nokia','21.01.2016',1,NULL,'Crna','mobilni uredaj'),(2,'Nokia',NULL,0,NULL,'Bijela','mobilni uredaj'),(3,'Sony',NULL,0,NULL,NULL,'mobilni uredaj'),(4,'Sony',NULL,0,NULL,NULL,'mobilni uredaj'),(5,'Sony',NULL,0,NULL,NULL,'mobilni uredaj'),(6,'Sony',NULL,0,NULL,NULL,'mobilni uredaj'),(7,'Apple',NULL,0,NULL,NULL,'mobilni uredaj'),(8,'Apple',NULL,0,NULL,NULL,'mobilni uredaj'),(9,'HTC',NULL,0,NULL,NULL,'mobilni uredaj'),(10,'Samsung',NULL,0,NULL,NULL,'mobilni uredaj'),(11,'Sony',NULL,1,'Ne zna se gdje je',NULL,'pametni sat'),(12,'Sony',NULL,0,NULL,NULL,'pametni sat'),(13,'Samsung',NULL,1,NULL,NULL,'pametni sat'),(14,'Samsung',NULL,1,'Ne zna se gdje je',NULL,'tablet'),(15,'Samsung',NULL,1,'Ne zna se gdje je',NULL,'mobilni uredaj'),(16,'Samsung',NULL,1,'Ne zna se gdje je',NULL,'mobilni uredaj'),(17,'Acer',NULL,0,'Smotra',NULL,'tablet'),(18,'Acer',NULL,0,'Smotra',NULL,'tablet'),(19,'Acer',NULL,0,'Smotra',NULL,'tablet'),(20,'CSS Matery',NULL,0,NULL,NULL,'knjiga'),(21,'PHP trikovi',NULL,0,NULL,NULL,'knjiga'),(22,'Dreamweaver8',NULL,0,NULL,NULL,'knjiga'),(23,'Flash CS4 Professional',NULL,0,NULL,NULL,'knjiga'),(24,'SmartBeacon',NULL,0,NULL,'bijela','beacon'),(25,'SmartBeacon',NULL,0,'','bijela','beacon'),(26,'Arduino',NULL,0,NULL,NULL,'racunalo'),(27,'Arduino',NULL,1,NULL,NULL,'racunalo'),(28,'Sound Beacon',NULL,0,NULL,NULL,'zvucni beacon'),(29,'CAEN',NULL,0,NULL,NULL,'citac RFID'),(30,'Identive',NULL,0,NULL,NULL,'citac RFID+NFC'),(31,'Identive',NULL,0,NULL,NULL,'CD'),(32,'NFC tag',NULL,0,'94 komada',NULL,'NFC tag'),(33,'NFC tag',NULL,0,'88 komada',NULL,'NFC tag'),(34,'Fetian',NULL,0,NULL,NULL,'citac NFC'),(35,'RAC',NULL,0,NULL,NULL,'citac NFC'),(36,'Sony',NULL,0,NULL,NULL,'citac NFC'),(37,'Ela',NULL,0,NULL,NULL,'citac RFID+antena'),(38,'Identive',NULL,0,NULL,NULL,'USB stick'),(39,'Identive',NULL,0,NULL,NULL,'sklop'),(40,'Identive',NULL,0,NULL,NULL,'CD'),(41,'Sony',NULL,0,NULL,NULL,'CD'),(42,'Read-a-Card',NULL,0,NULL,NULL,'CD'),(43,'Fetian',NULL,0,NULL,NULL,'CD'),(44,'Read-a-Card',NULL,0,NULL,NULL,'CD'),(45,'Read-a-Card',NULL,0,NULL,NULL,'CD');
/*!40000 ALTER TABLE `TerminalniUredaj` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TextPodatak`
--

DROP TABLE IF EXISTS `TextPodatak`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TextPodatak` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Content` varchar(45) DEFAULT NULL,
  `Beacon_Id` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_TextPodatak_Beacon_idx` (`Beacon_Id`),
  CONSTRAINT `fk_TextPodatak_Beacon` FOREIGN KEY (`Beacon_Id`) REFERENCES `Beacon` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TextPodatak`
--

LOCK TABLES `TextPodatak` WRITE;
/*!40000 ALTER TABLE `TextPodatak` DISABLE KEYS */;
INSERT INTO `TextPodatak` (`Id`, `Content`, `Beacon_Id`) VALUES (3,'nestooo',1),(4,'bla bla bla unio sam',1),(5,'asdfafdanewo',1),(6,'Ovo je text za beacon Zn6up',1),(7,'bla bla bal',1),(11,'alskfjklasdjflkasdfjasfklsjfklasdjflasdÄjasf',1),(12,'lkasnkladsjfÄadsjklfaslkÄfalÄksdfjklÄadsf',2),(13,'opaaaaaaaaaaaaaa',1),(14,'da da da ',2),(16,'kjsfj',1),(17,'aklsjdfklÄasjf asd ',1),(18,'In front of the national library!',2);
/*!40000 ALTER TABLE `TextPodatak` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UrlPodatak`
--

DROP TABLE IF EXISTS `UrlPodatak`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UrlPodatak` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Content` varchar(45) DEFAULT NULL,
  `Beacon_Id` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_UrlPodatak_Beacon1_idx` (`Beacon_Id`),
  CONSTRAINT `fk_UrlPodatak_Beacon1` FOREIGN KEY (`Beacon_Id`) REFERENCES `Beacon` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UrlPodatak`
--

LOCK TABLES `UrlPodatak` WRITE;
/*!40000 ALTER TABLE `UrlPodatak` DISABLE KEYS */;
INSERT INTO `UrlPodatak` (`Id`, `Content`, `Beacon_Id`) VALUES (2,'httpdrugonesto',1),(3,'httpnests',1),(4,'httpdrugonestttt',2),(5,'http://www.index.hr',1),(6,'httpwww.',1),(11,'httpsakjdfa',2),(12,'httpsalÄksj',1),(13,'httpsalÄksj',2),(14,'httpkasjfda',1),(17,'httpindex.hr',1);
/*!40000 ALTER TABLE `UrlPodatak` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `VideoPodatak`
--

DROP TABLE IF EXISTS `VideoPodatak`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `VideoPodatak` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Content` varchar(45) DEFAULT NULL,
  `Beacon_Id` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_VideoPodatak_Beacon1_idx` (`Beacon_Id`),
  CONSTRAINT `fk_VideoPodatak_Beacon1` FOREIGN KEY (`Beacon_Id`) REFERENCES `Beacon` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VideoPodatak`
--

LOCK TABLES `VideoPodatak` WRITE;
/*!40000 ALTER TABLE `VideoPodatak` DISABLE KEYS */;
INSERT INTO `VideoPodatak` (`Id`, `Content`, `Beacon_Id`) VALUES (1,'pathstaza1',1);
/*!40000 ALTER TABLE `VideoPodatak` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'ikplabpravi'
--

--
-- Dumping routines for database 'ikplabpravi'
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
