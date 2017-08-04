/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : prettytalks-user

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-31 20:50:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `add_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `headerImgUrl` varchar(255) DEFAULT NULL,
  `iid` varchar(223) DEFAULT NULL,
  PRIMARY KEY (`id`,`add_time`)
) ENGINE=MyISAM AUTO_INCREMENT=124 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '123', '123', '123', '123', '2017-07-30 14:45:23', null, null);
INSERT INTO `users` VALUES ('122', '铁皮青衣', '12345678', '13811111111', null, '2017-07-30 15:54:19', './headImg/head-1501401566253.jpg', '32443');
INSERT INTO `users` VALUES ('123', '123', 'qwerty', '13722222222', null, '2017-07-31 11:42:20', '', '1kgaxmu,1kgaxmu');
