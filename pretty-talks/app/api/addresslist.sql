/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : prettytalks

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-07-31 09:02:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for addresslist
-- ----------------------------
DROP TABLE IF EXISTS `addresslist`;
CREATE TABLE `addresslist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `addressUser` varchar(255) DEFAULT NULL,
  `addressPhone` varchar(255) DEFAULT NULL,
  `addressPname` varchar(255) DEFAULT NULL,
  `addressCname` varchar(255) DEFAULT NULL,
  `addressDname` varchar(255) DEFAULT NULL,
  `addressStreet` varchar(255) DEFAULT NULL,
  `addressPostcode` varchar(255) DEFAULT NULL,
  `isDefault` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of addresslist
-- ----------------------------
INSERT INTO `addresslist` VALUES ('8', '', '', '22222222', '13333333333', '重庆市', '重庆市', '梁平县', '1111111', '', '1');
INSERT INTO `addresslist` VALUES ('10', '', '', '11111111', '13333333333', '山西省', '晋城市', '沁水县', '1111111', '', '0');
