/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : prettytalks

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-07-26 21:10:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for carlist
-- ----------------------------
DROP TABLE IF EXISTS `carlist`;
CREATE TABLE `carlist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgUrl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `num` bigint(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `origin_price` decimal(10,2) DEFAULT NULL,
  `checked` tinyint(4) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carlist
-- ----------------------------
INSERT INTO `carlist` VALUES ('1', 'http://s11.mogucdn.com/p2/170717/upload_00h6f5f2l6f8008fg69fdfefa24da_640x900.jpg_330x440.v1cAC.70.webp', '套装 2017夏休闲时尚套装两件套宽松中长款T恤+松紧腰短裤', '白色', 'M', '1', '58.30', '66.25', '1', '1111');
INSERT INTO `carlist` VALUES ('2', 'http://s3.mogucdn.com/p2/170714/upload_6gf9j47ag54d22341l6efhjkdlj22_640x900.jpg_330x440.v1cAC.70.webp', '重工刺绣的衬衫2017夏季新款一字领性感女神闺蜜装上衣', '红色', 'M', '1', '52.58', '59.75', '1', '1111');
INSERT INTO `carlist` VALUES ('3', 'http://s3.mogucdn.com/p2/170712/upload_50d0738if04lid4fb8kl9l1agf6j1_640x900.jpg_330x440.v1cAC.70.webp', '复古衬衫裙长裙高腰田园小清新收腰绑带大格子文艺仙短袖连衣裙夏', '复古黄格', '均码', '1', '93.50', '106.25', '1', '1111');
INSERT INTO `carlist` VALUES ('4', 'http://s11.mogucdn.com/p2/170718/upload_7fg87cll5cgbfka236keh5b51kaf6_1600x2250.jpg_330x440.v1cAC.70.webp', '套装露肩性感V领连衣裙套装修身显胸大腰细三色上衣+裙子', '黑色', 'M', '1', '63.80', '72.50', '1', '1111');
