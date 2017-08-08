/*
Navicat MySQL Data Transfer

<<<<<<< HEAD
Source Server         : local
Source Server Version : 50505
=======
Source Server         : localhost_3306
Source Server Version : 50714
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10
Source Host           : localhost:3306
Source Database       : prettytalks-user

Target Server Type    : MYSQL
<<<<<<< HEAD
Target Server Version : 50505
File Encoding         : 65001

<<<<<<< HEAD
Date: 2017-07-31 19:35:11
=======
Date: 2017-07-31 20:58:03
>>>>>>> e19247169a9bba0ac49696246e40ce881eb6e2fe
=======
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-08-01 12:31:10
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
<<<<<<< HEAD
-- Table structure for `users`
=======
-- Table structure for users
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10
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
<<<<<<< HEAD
<<<<<<< HEAD
) ENGINE=MyISAM AUTO_INCREMENT=124 DEFAULT CHARSET=utf8;
=======
) ENGINE=MyISAM AUTO_INCREMENT=119 DEFAULT CHARSET=utf8;
>>>>>>> e19247169a9bba0ac49696246e40ce881eb6e2fe
=======
) ENGINE=MyISAM AUTO_INCREMENT=124 DEFAULT CHARSET=utf8;
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10

-- ----------------------------
-- Records of users
-- ----------------------------
<<<<<<< HEAD
<<<<<<< HEAD
INSERT INTO `users` VALUES ('1', '123', '123', '123', '123', '2017-07-30 14:45:23', null, null);
INSERT INTO `users` VALUES ('122', '铁皮青衣', '12345678', '13811111111', null, '2017-07-30 15:54:19', './headImg/head-1501401566253.jpg', null);
INSERT INTO `users` VALUES ('123', '123', 'qwerty', '13722222222', null, '2017-07-31 11:42:20', '', '1kgghcw');
=======
INSERT INTO `users` VALUES ('118', null, '123344', '13810293847', null, '2017-07-28 14:08:47', null);
>>>>>>> e19247169a9bba0ac49696246e40ce881eb6e2fe
=======
INSERT INTO `users` VALUES ('122', '铁皮青衣', '12345678', '13811111111', null, '2017-07-30 15:54:19', './headImg/head-1501401566253.jpg', '32443');
INSERT INTO `users` VALUES ('123', '123', 'qwerty', '13722222222', null, '2017-07-31 11:42:20', '', '1kg8mtw,1kge8f6');
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10
