-- MySQL dump 10.13  Distrib 5.6.39, for Linux (x86_64)
--
-- Host: localhost    Database: ppi_input
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
-- Table structure for table `basic_person_info`
--

DROP TABLE IF EXISTS `basic_person_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `basic_person_info` (
  `id` int(11) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `weight_si` varchar(45) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `height_si` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `race` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basic_person_info`
--

LOCK TABLES `basic_person_info` WRITE;
/*!40000 ALTER TABLE `basic_person_info` DISABLE KEYS */;
INSERT INTO `basic_person_info` (`id`, `age`, `weight`, `weight_si`, `height`, `height_si`, `gender`, `race`) VALUES (1,2,2,'pd',2,'cm','male','black'),(2,1,1,'st',1,'in','female','black'),(3,22,3,'st',33,'in','other','black'),(4,23,90,'kg',191,'cm','male','white'),(5,33,2,'pd',178,'in','male','hispanic/latino'),(6,2,3,'pd',2,'in','male','black'),(7,2,2,'st',2,'ft','other','black'),(8,11,2,'pd',1,'ft','male','black'),(9,110,90,'st',10,'mt','other','other'),(10,99,9,'st',9,'ft','male','white'),(11,5,5,'st',5,'in','male','asian'),(12,6,6,'pd',6,'ft','male','white'),(13,9,9,'st',9,'in','female','white'),(14,10,10,'st',10,'mt','female','white'),(15,8,8,'kg',8,'mt','female','hispanic/latino'),(16,33,2,'st',2,'in','female','white'),(17,22,3,'st',222,'ft','male','white'),(18,3,2,'st',2,'ft','female','black'),(19,1,2,'st',1,'mt','female','black'),(20,3,2,'st',4,'ft','male','white'),(21,2,2,'st',2,'mt','male','black'),(22,3,3,'pd',3,'ft','female','asian'),(23,2,2,'st',2,'mt','other','white'),(24,2,2,'st',2,'in','male','white'),(25,5,3,'st',7,'in','female','black'),(26,2,2,'st',2,'mt','female','black'),(27,3,4,'st',3,'in','male','black'),(28,3,3,'st',3,'ft','male','black'),(29,3,3,'st',3,'in','female','black'),(30,3,3,'st',3,'ft','other','black'),(31,2,3,'pd',3,'in','female','white'),(32,3,2,'st',3,'ft','female','white'),(33,3,3,'pd',3,'in','male','black');
/*!40000 ALTER TABLE `basic_person_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disease`
--

DROP TABLE IF EXISTS `disease`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `disease` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gastro` longtext,
  `other` longtext,
  `ppis` longtext,
  `basicID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bid1_idx` (`basicID`),
  CONSTRAINT `bid1` FOREIGN KEY (`basicID`) REFERENCES `basic_person_info` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disease`
--

LOCK TABLES `disease` WRITE;
/*!40000 ALTER TABLE `disease` DISABLE KEYS */;
INSERT INTO `disease` (`id`, `gastro`, `other`, `ppis`, `basicID`) VALUES (82,'Achalasia','','',1),(83,'Acid reflux','ADHD','Bone fracture',2),(84,'Achalasia','AIDS','Bone fracture',3),(85,'Achalasia','Acne','Anxiety',4),(86,'Acute gastritis','Alzheimer\'s','CKD (chronic kidney disease)',4),(87,'Acid reflux','AIDS','Anxiety',5),(88,'Achalasia','Acne','Bone fracture',6),(89,'Candida Overgrowth',NULL,NULL,6),(90,'Acid reflux',NULL,NULL,6),(91,'Acid reflux','','',7),(92,'Acid reflux','AIDS','Bone fracture',8),(93,'Acute gastritis','Crohnâ€™s Disease','Small Intestinal Bacterial Overgrowth (SIBO)',9),(94,'Stomach dysplasia','Prostate cancer','Pancreatitis',9),(95,'Candida Overgrowth','Osteoporosis',NULL,9),(96,'Celiac Disease',NULL,NULL,9),(97,'Stomach ulcer','Alopecia','Cardiovascular disease',10),(98,'something1','Marko','CKD (chronic kidney disease)',10),(99,'something2','Eugen',NULL,10),(100,'Zollinger-Ellison syndrome','Type 2 diabetis','Pancreatitis',11),(101,'Candida Overgrowth','','',12),(102,'Stomach dysplasia','Notfound','Pneumonia',13),(103,'Gluten intolerance','','',14),(104,'Barrett\'s esophagus',NULL,NULL,14),(105,'Candida Overgrowth',NULL,NULL,14),(106,'Celiac Disease',NULL,NULL,14),(107,'Duodenal cancer',NULL,NULL,14),(108,'Achalasia','AIDS','Anxiety',15),(109,'Acute gastritis',NULL,NULL,15),(110,'Barrett\'s esophagus',NULL,NULL,15),(111,'Acid reflux','AIDS','Bone fracture',17),(112,'Acid reflux','','',18),(113,'Acute gastritis','Acne','CKD (chronic kidney disease)',19),(114,'Acute gastritis','AIDS','Candida Overgrowth',20),(115,'Achalasia','ADHD','CKD (chronic kidney disease)',21),(116,'Achalasia','','',22),(117,'Acid reflux','','',23),(118,'Acid reflux','','',24),(119,'Acid reflux','ADHD','',27),(120,'Marko\'s','Intex\'\"?',NULL,27),(121,'Achalasia','','',28),(122,'Acute gastritis','','',29),(123,'Acid reflux','','',30),(124,'Acid reflux','','',31),(125,'Achalasia','AIDS','Anxiety',32),(126,'Achalasia','','',33);
/*!40000 ALTER TABLE `disease` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `extra_info`
--

DROP TABLE IF EXISTS `extra_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `extra_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hpylori` varchar(100) DEFAULT NULL,
  `exercise` varchar(100) DEFAULT NULL,
  `smoke` varchar(100) DEFAULT NULL,
  `alcohol` varchar(100) DEFAULT NULL,
  `obese` varchar(100) DEFAULT NULL,
  `healthy_eat` varchar(100) DEFAULT NULL,
  `stress` varchar(100) DEFAULT NULL,
  `family_gastro_issue` varchar(100) DEFAULT NULL,
  `anxiety` varchar(100) DEFAULT NULL,
  `gluten_sensitive` varchar(100) DEFAULT NULL,
  `lactose_intolerance` varchar(100) DEFAULT NULL,
  `substitute` varchar(100) DEFAULT NULL,
  `off_drug` varchar(100) DEFAULT NULL,
  `acid_rebound` varchar(100) DEFAULT NULL,
  `overall_experience` varchar(100) DEFAULT NULL,
  `basicID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bid2_idx` (`basicID`),
  CONSTRAINT `bid2` FOREIGN KEY (`basicID`) REFERENCES `basic_person_info` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `extra_info`
--

LOCK TABLES `extra_info` WRITE;
/*!40000 ALTER TABLE `extra_info` DISABLE KEYS */;
INSERT INTO `extra_info` (`id`, `hpylori`, `exercise`, `smoke`, `alcohol`, `obese`, `healthy_eat`, `stress`, `family_gastro_issue`, `anxiety`, `gluten_sensitive`, `lactose_intolerance`, `substitute`, `off_drug`, `acid_rebound`, `overall_experience`, `basicID`) VALUES (76,'no','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','somehow','unknown','satisfied',1),(77,'no','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','somehow','unknown','satisfied',2),(78,'no','few times per week','few times per week','few times per week','little','few times a year','sometimes','dont know','maybe','dont know','dont know','sometimes','yes','yes','satisfied',3),(79,'yes','daily','daily','daily','yes','daily','yes','yes','maybe','dont know','dont know','sometimes','unknown','unknown','satisfied',4),(80,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','no','no','dont know','unknown','unknown','horrible',5),(81,'yes','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','yes','yes','satisfied',6),(82,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','unknown','unknown','good',7),(83,'no','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','somehow','yes','satisfied',8),(84,'dont know','never','never','never','not sure','rarely eat healthy','not sure','dont know','dont know','dont know','dont know','dont know','dont know','unknown','horrible',9),(85,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','no','no','no','no','unknown','unknown','very satisfied',10),(86,'no','never','never','never','not sure','rarely eat healthy','not sure','dont know','dont know','dont know','dont know','dont know','unknown','unknown','horrible',11),(87,'yes','daily','daily','daily','yes','daily','yes','yes','yes','yes','yes','yes','yes','yes','very satisfied',12),(88,'no','few times per week','few times per week','few times per week','no','few times per week','no','no','no','no','no','no','no','unknown','satisfied',13),(89,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','somehow','no','satisfied',14),(90,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','unknown','unknown','satisfied',15),(91,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','unknown','unknown','satisfied',17),(92,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','somehow','unknown','satisfied',18),(93,'dont know','few times per month','few times per month','few times per month','not sure','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','somehow','no','satisfied',19),(94,'no','few times per week','few times per week','few times per week','little','few times per week','no','no','no','no','no','no','no','unknown','satisfied',20),(95,'no','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','somehow','no','satisfied',21),(96,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','dont know','unknown','unknown','good',22),(97,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','somehow','unknown','satisfied',23),(98,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','unknown','unknown','satisfied',24),(99,'no','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','unknown','unknown','satisfied',27),(100,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','unknown','unknown','satisfied',28),(101,'dont know','few times per month','few times per month','few times per month','not sure','few times per week','rarely get stressed','dont know','dont know','dont know','dont know','sometimes','unknown','unknown','satisfied',29),(102,'dont know','few times per month','few times per month','few times per month','not sure','few times per month','rarely get stressed','dont know','dont know','dont know','dont know','dont know','unknown','unknown','horrible',30),(103,'dont know','few times per week','few times per week','few times per week','not sure','few times per week','rarely get stressed','dont know','dont know','dont know','dont know','dont know','unknown','unknown','good',31),(104,'dont know','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','dont know','dont know','dont know','dont know','unknown','unknown','poor',32),(105,'no','few times per week','few times per week','few times per week','little','few times per week','sometimes','dont know','maybe','dont know','dont know','sometimes','unknown','unknown','satisfied',33);
/*!40000 ALTER TABLE `extra_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `natural_remedy`
--

DROP TABLE IF EXISTS `natural_remedy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `natural_remedy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `helped` longtext,
  `not_helped` longtext,
  `basicID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bid3_idx` (`basicID`),
  CONSTRAINT `bid3` FOREIGN KEY (`basicID`) REFERENCES `basic_person_info` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `natural_remedy`
--

LOCK TABLES `natural_remedy` WRITE;
/*!40000 ALTER TABLE `natural_remedy` DISABLE KEYS */;
INSERT INTO `natural_remedy` (`id`, `helped`, `not_helped`, `basicID`) VALUES (134,'','',1),(135,'','',2),(136,'','',3),(137,'DGL','Aloe vera',4),(138,NULL,'Digestive enzymes',4),(139,'Apple cide vinegar','Apple',5),(140,'Probiotics','',6),(141,'','',7),(142,'DGL','Aloe vera',8),(143,'','',9),(144,'Arko','Eugen',10),(145,'','',11),(146,'','',12),(147,'','',13),(148,'Probiotics','Aloe vera',14),(149,'','',15),(150,'','',17),(151,'Apple cide vinegar','DGL',18),(152,'','',19),(153,'Apple cide vinegar','DGL',20),(154,'','DGL',21),(155,NULL,'Homemade apple juice',21),(156,'','',22),(157,'','',23),(158,'','',24),(159,'Kadfkja?','',27),(160,'','',28),(161,'','',29),(162,'','',30),(163,'','',31),(164,'','',32),(165,'DGL','DGL',33);
/*!40000 ALTER TABLE `natural_remedy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutrient_deficiency`
--

DROP TABLE IF EXISTS `nutrient_deficiency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nutrient_deficiency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `nutrient_radio` varchar(50) DEFAULT NULL,
  `basicID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bid4_idx` (`basicID`),
  CONSTRAINT `bid4` FOREIGN KEY (`basicID`) REFERENCES `basic_person_info` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrient_deficiency`
--

LOCK TABLES `nutrient_deficiency` WRITE;
/*!40000 ALTER TABLE `nutrient_deficiency` DISABLE KEYS */;
INSERT INTO `nutrient_deficiency` (`id`, `name`, `nutrient_radio`, `basicID`) VALUES (115,'','dont know',1),(116,'','no',2),(117,'Iron','yes',3),(118,'Calcium','yes',4),(119,'Phospate','yes',4),(120,'','dont know',5),(121,'Iron','yes',6),(122,'Phospate','yes',7),(123,'Magnesium','yes',7),(124,'Magnesium','yes',8),(125,'Vitamin A','yes',8),(126,'Vitamin D','yes',8),(127,'Vitamin B','yes',8),(128,'','dont know',9),(129,'','no',10),(130,'','no',11),(131,'','dont know',12),(132,'','no',13),(133,'','no',14),(134,'','no',15),(135,'','dont know',17),(136,'','no',18),(137,'','no',19),(138,'','dont know',20),(139,'','no',21),(140,'','dont know',22),(141,'','dont know',23),(142,'','no',24),(143,'','no',27),(144,'','no',28),(145,'','dont know',29),(146,'','no',30),(147,'','no',31),(148,'','no',32),(149,'','no',33);
/*!40000 ALTER TABLE `nutrient_deficiency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `other_drug`
--

DROP TABLE IF EXISTS `other_drug`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `other_drug` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` longtext,
  `other_drug_radio` varchar(50) DEFAULT NULL,
  `basicID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bid5_idx` (`basicID`),
  CONSTRAINT `bid5` FOREIGN KEY (`basicID`) REFERENCES `basic_person_info` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `other_drug`
--

LOCK TABLES `other_drug` WRITE;
/*!40000 ALTER TABLE `other_drug` DISABLE KEYS */;
INSERT INTO `other_drug` (`id`, `name`, `other_drug_radio`, `basicID`) VALUES (118,'','no',1),(119,'','no',2),(120,'Marko','yes',3),(121,'Nsaids','yes',4),(122,'Zantac','yes',4),(123,'','no',5),(124,'Nesto','yes',6),(125,'Abilify','yes',7),(126,'Adalimumab','yes',7),(127,'Adalimumab','yes',8),(128,'Budesonide','yes',8),(129,'','no',9),(130,'ARBs','yes',10),(131,'Askldnmfalksn','yes',10),(132,'','no',11),(133,'','no',12),(134,'','no',13),(135,'','no',14),(136,'','no',15),(137,'','no',17),(138,'','no',18),(139,'','no',19),(140,'','no',20),(141,'','no',21),(142,'','no',22),(143,'','no',23),(144,'','no',24),(145,'Alksdfjlka?','yes',27),(146,'','no',28),(147,'','no',29),(148,'','no',30),(149,'','no',31),(150,'','no',32),(151,'','no',33);
/*!40000 ALTER TABLE `other_drug` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ppi_drug`
--

DROP TABLE IF EXISTS `ppi_drug`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ppi_drug` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `generic` varchar(100) DEFAULT NULL,
  `brand` longtext,
  `dosage` varchar(50) DEFAULT NULL,
  `treatment_duration` double DEFAULT NULL,
  `global_time` varchar(45) DEFAULT NULL,
  `daily` varchar(45) DEFAULT NULL,
  `basicID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bid6_idx` (`basicID`),
  CONSTRAINT `bid6` FOREIGN KEY (`basicID`) REFERENCES `basic_person_info` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ppi_drug`
--

LOCK TABLES `ppi_drug` WRITE;
/*!40000 ALTER TABLE `ppi_drug` DISABLE KEYS */;
INSERT INTO `ppi_drug` (`id`, `generic`, `brand`, `dosage`, `treatment_duration`, `global_time`, `daily`, `basicID`) VALUES (93,'Dexlansoprazole','Aciphex','+160',2,'year','yes',1),(94,'Pantoprazole','MARKO','80',3,'day','yes',1),(95,'Omeprazole',NULL,'10',1,'week','yes',1),(96,'Esomeprazole','eugen','15',3,'day','yes',2),(97,'Ilaprazole','marko','80',3,'year','yes',2),(98,'Esomeprazole','sanja','80',3,'day','yes',2),(99,'Esomeprazole','Aciphex','15',3,'day','yes',3),(100,'Dexlansoprazole','Ares','30',3,'week','yes',3),(101,'Esomeprazole','Aciphex','20',2,'day','yes',4),(102,'Ilaprazole','Controloc','60',2,'year','no',4),(103,'Esomeprazole','Controloc','40',3,'week','no',5),(104,'Esomeprazole','Controloc','30',3,'day','no',5),(105,'Omeprazole','Controloc','120',3,'day','yes',6),(106,'Esomeprazole','Controloc','+160',3,'day','yes',6),(107,'Lansoprazole','Dexilant','60',3,'day','yes',6),(108,'Lansoprazole',NULL,'45',3,'day','no',6),(109,'Esomeprazole','Ares','30',3,'day','yes',7),(110,'Lansoprazole',NULL,'40',3,'week','yes',7),(111,'Ilaprazole',NULL,'60',2,'week','yes',7),(112,'Esomeprazole','Ares','40',3,'day','yes',8),(113,'Esomeprazole','Ares','40',3,'week','yes',8),(114,'Esomeprazole','Nexium man','100',3,'year','no',9),(115,'Ilaprazole','nesto1','20',2,'day','unknown',10),(116,'Lansoprazole','nesto2','20',2,'day','no',10),(117,'Esomeprazole','nesto3','20',2,'month','yes',10),(118,'Pantoprazole','nesto4','40',2,'week','no',10),(119,'Esomeprazole','Nexium','45',3,'day','yes',11),(120,'Lansoprazole','Controloc','30',3,'week','yes',12),(121,'Tenatoprazole','Tecta','80',3,'day','yes',13),(122,'Ilaprazole','Ares','45',3,'week','no',14),(123,'Esomeprazole','Ares','+160',3,'month','yes',15),(124,'Ilaprazole','Ares','40',2,'day','no',17),(125,'Esomeprazole','','40',2,'day','yes',18),(126,'Esomeprazole','','40',2,'week','yes',19),(127,'Ilaprazole','Aciphex','40',3,'month','no',20),(128,'Dexlansoprazole','Ares','40',2,'week','yes',21),(129,'Esomeprazole','','40',3,'day','no',22),(130,'Esomeprazole','Aciphex','20',2,'week','yes',23),(131,'Esomeprazole','','20',2,'week','no',24),(132,'Dexlansoprazole',NULL,'30',2,'month','yes',24),(133,'Esomeprazole',NULL,'40',2,'week','yes',24),(134,'Esomeprazole','a?aslkdfa','20',6,'day','yes',27),(135,'Dexlansoprazole','','30',3,'month','yes',28),(136,'Esomeprazole','','40',3,'week','yes',29),(137,'Esomeprazole','','20',3,'week','no',30),(138,'Dexlansoprazole','','20',3,'week','yes',31),(139,'Dexlansoprazole','Aciphex','30',2,'day','yes',32),(140,'Dexlansoprazole','','30',3,'week','yes',33);
/*!40000 ALTER TABLE `ppi_drug` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `side_effect_general`
--

DROP TABLE IF EXISTS `side_effect_general`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `side_effect_general` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` longtext,
  `side_radio` varchar(50) DEFAULT NULL,
  `basicID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bid7_idx` (`basicID`),
  CONSTRAINT `bid7` FOREIGN KEY (`basicID`) REFERENCES `basic_person_info` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `side_effect_general`
--

LOCK TABLES `side_effect_general` WRITE;
/*!40000 ALTER TABLE `side_effect_general` DISABLE KEYS */;
INSERT INTO `side_effect_general` (`id`, `name`, `side_radio`, `basicID`) VALUES (118,'','yes',1),(119,'','no',2),(120,'','yes',3),(121,'','no',4),(122,'','dont know',5),(123,'','yes',6),(124,'Alergy','yes',7),(125,'Anxiety','yes',7),(126,'Appetite loss','yes',7),(127,'Marko','yes',7),(128,'','yes',8),(129,'Joint pain','yes',9),(130,'leg pain','yes',9),(131,'','yes',10),(132,'','no',11),(133,'','dont know',12),(134,'','no',13),(135,'','no',14),(136,'','no',15),(137,'','no',17),(138,'','no',18),(139,'','no',19),(140,'','no',20),(141,'','no',21),(142,'','dont know',22),(143,'','dont know',23),(144,'','no',24),(145,'','yes',27),(146,'','dont know',28),(147,'','dont know',29),(148,'','dont know',30),(149,'','no',31),(150,'','dont know',32),(151,'','no',33);
/*!40000 ALTER TABLE `side_effect_general` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `side_effect_ppi_drug`
--

DROP TABLE IF EXISTS `side_effect_ppi_drug`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `side_effect_ppi_drug` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` longtext,
  `ppi_drugID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bid8_idx` (`ppi_drugID`),
  CONSTRAINT `bid8` FOREIGN KEY (`ppi_drugID`) REFERENCES `ppi_drug` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=205 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `side_effect_ppi_drug`
--

LOCK TABLES `side_effect_ppi_drug` WRITE;
/*!40000 ALTER TABLE `side_effect_ppi_drug` DISABLE KEYS */;
INSERT INTO `side_effect_ppi_drug` (`id`, `name`, `ppi_drugID`) VALUES (129,'Alergy',93),(130,'Abdominal pain',93),(131,'Anxiety',94),(132,'Back pain',94),(133,'Irregular heart rythm',95),(134,'Light sensitivity',95),(135,'Memory problem',95),(136,'',96),(137,'',97),(138,'',98),(139,'Abdominal pain',99),(140,'Marko',99),(141,'Alergy',100),(142,'Anemia',100),(143,'',101),(144,'',102),(145,'',103),(146,'',104),(147,'Alergy',105),(148,'Anemia',105),(149,'Eugen',105),(150,'Eugene',105),(151,'Ankle pain',106),(152,'Back pain',106),(153,'Eugen',106),(154,'Anxiety',107),(155,'Ankle pain',107),(156,'Eugen',107),(157,'Anemia',108),(158,'Anxiety',108),(159,'Marko',108),(160,'',109),(161,'',110),(162,'',111),(163,'Alergy',112),(164,'Appetite loss',112),(165,'Back pain',112),(166,'Anemia',113),(167,'Appetite loss',113),(168,'',114),(169,'Abdominal pain',115),(170,'Anemia',115),(171,'Anxiety',115),(172,'Back pain',116),(173,'Belching',116),(174,'Blisters on body',116),(175,'Chest pain',117),(176,'Concetration problem',117),(177,'Constipation',117),(178,'Digestion problems',118),(179,'Double  vision',118),(180,'Dizziness',118),(181,'',119),(182,'',120),(183,'',121),(184,'',122),(185,'',123),(186,'',123),(187,'',124),(188,'',125),(189,'',126),(190,'',127),(191,'',128),(192,'',129),(193,'',130),(194,'',131),(195,'',132),(196,'',133),(197,'Alergy',134),(198,'Asldfča?asfas',134),(199,'',135),(200,'',136),(201,'',137),(202,'',138),(203,'',139),(204,'',140);
/*!40000 ALTER TABLE `side_effect_ppi_drug` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'ppi_input'
--

--
-- Dumping routines for database 'ppi_input'
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
