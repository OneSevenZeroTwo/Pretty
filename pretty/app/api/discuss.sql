/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : prettytalks-user

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

<<<<<<< HEAD
Date: 2017-08-01 09:34:46
=======
Date: 2017-08-01 14:31:21
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `discuss`
-- ----------------------------
DROP TABLE IF EXISTS `discuss`;
CREATE TABLE `discuss` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `time` varchar(244) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `iid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
<<<<<<< HEAD
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
=======
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10

-- ----------------------------
-- Records of discuss
-- ----------------------------
<<<<<<< HEAD
INSERT INTO `discuss` VALUES ('1', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '彬彬妹2016', '还没有穿！看起还是可以！', '2017-07-30 ', '黑色套装  ', '75/34', '', '1kg8fzc');
INSERT INTO `discuss` VALUES ('2', 'http://s3.mogucdn.com/p2/161214/103488673_0l1ff9kf2hbc32fe4a2g05l77d89d_140x140.png_100x100.jpg', 'DàMr._qqqV', '这种价位买到这样质量衣服已经很良心了喜欢的可以放心买，穿着非常非常显瘦，背后的小心机很性感啊！', '2017-07-30 ', '黑色', 'M', 'http://s3.mogucdn.com/mlcdn/c45406/170725_4dc28f8b7l44765j940j72fl26c46_306x400.jpg_100x100.jpg', '1kggdaq');
INSERT INTO `discuss` VALUES ('3', 'http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png_100x100.jpg', 'Loser蛋蛋', '裙子做工很精致，样子也不错，自己挺喜欢的，大赞', '2017-04-03', '白色 ', '均码', '', '1kgds9u');
INSERT INTO `discuss` VALUES ('4', 'http://s3.mogucdn.com/p2/161214/103488673_0l1ff9kf2hbc32fe4a2g05l77d89d_140x140.png_100x100.jpg', '迦***音', '质量很好 上身很漂亮  就是快递有点慢哦 ', '2017-07-17', '蓝色  ', 'M', null, '1kgd92m');
INSERT INTO `discuss` VALUES ('5', 'http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png_100x100.jpg', 'y***e', '谢谢亲的效率。昨晚美了一把。都夸衣服好看。忘了拍全身照。就给半身的买家秀吧', '2017-01-18', '黑色', 'L', 'http://m.meilishuo.com/rateList/index/1h3ybmi', '1kgah8u');
INSERT INTO `discuss` VALUES ('6', 'http://s3.mogucdn.com/p2/161214/103488673_8ff131b8g07810e345268cgcda6ef_140x141.png_100x100.jpg', '萱萱要努力啊纯购', '穿着很显气质，很赞，值得购买', '2017-05-05', '灰色  ', 'S', 'http://m.meilishuo.com/rateList/index/1k9z1ii', '1kfz4p8');
INSERT INTO `discuss` VALUES ('7', 'http://s3.mogucdn.com/p2/161214/103488673_8da6lhkf9a5h32ei6bd297523c35d_140x140.png_100x100.jpg', 'Anne__F', '穿第二次就破损了，后面拉链上面一截也拉不上的，之前买了一件小了，老板说不能换，我就先重买了一件，小的那件退了，结果老板就赖账了，我衣服退了他钱不退了还说我没退，还好我单据都留着，无良商家。现在找他们都联系不上了', '2017-06-14', '黑色 ', 'S', 'http://m.meilishuo.com/rateList/index/1h5ncsu', '1h6wrjm');
INSERT INTO `discuss` VALUES ('8', 'http://s3.mogucdn.com/p2/161214/103488673_8ff131b8g07810e345268cgcda6ef_140x141.png_100x100.jpg', '萱萱要努力啊纯购', '穿着很显气质，很赞，值得购买', '2017-05-05', '灰色 ', 'S', null, '1kggdsy');
INSERT INTO `discuss` VALUES ('9', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '旅行者454599', '手感很好，穿着也很舒服', '2017-06-17', '黑色套装', '32/70', 'http://s11.mogucdn.com/mlcdn/c45406/170617_60550454edffik8ee67cfj8k9ciih_1080x1080.jpg_100x100.jpg', '1kggdaq');
INSERT INTO `discuss` VALUES ('10', 'http://s3.mogucdn.com/p2/161214/103488673_0l1ff9kf2hbc32fe4a2g05l77d89d_140x140.png_100x100.jpg', '夏梓柒', '这款衣服真的是非常好，料子也柔软顺滑，穿着很仙，也不透。就是我比较喜欢穿有袖子的，这个袖子岔开算无袖吧！质量还是很不错哦。物有所值', '2017-07-24', '蓝色 ', 'M', 'http://s3.mogucdn.com/mlcdn/c45406/170724_6g2e412ec88cjadljg7kiad0fhdgi_300x400.jpg_100x100.jpg', '1kggh5i');
INSERT INTO `discuss` VALUES ('11', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '拜鱼为师', '质量很好，服务很贴心，因为个人原因把地址写错了，跟商家说了一下，商家帮我反馈了，货还是送到我手里了，非常感谢', '2017-07-20', '柔美碎花 ', 'L', 'http://m.meilishuo.com/rateList/index/1kdre2m', '1kfd02g');
INSERT INTO `discuss` VALUES ('12', 'http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png_100x100.jpg', '镓有两宝', '宝贝质量很好，大小也刚刚好。', '2017-06-25', '杏粉色  ', 'S', 'http://m.meilishuo.com/rateList/index/1kdm5vy', '1kgg6pi');
INSERT INTO `discuss` VALUES ('13', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '维尼发发', '夏天的感觉就是要这么美，裙子很喜欢，质量也很不错哦，穿出去约会闺蜜说很漂亮。', '2017-05-18', '图色 ', 'M', 'http://m.meilishuo.com/rateList/index/1kby078', '1kf3dq4');
INSERT INTO `discuss` VALUES ('14', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '奋斗ing2008', '裙子质量不错 也很漂亮 很喜欢 ', '2017-06-09', '白色', 'S', 'http://m.meilishuo.com/rateList/index/1k9bfj2', '1kge9w8');
INSERT INTO `discuss` VALUES ('15', 'http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png_100x100.jpg', '莉萍2017', '衣服不错价格比实体便宜好多值得购买', '2017-06-21', '藕粉色 ', 'L', 'http://m.meilishuo.com/rateList/index/1kdm98u', '1h6wrjm');
INSERT INTO `discuss` VALUES ('16', 'http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png_100x100.jpg', 'yy猪', '衣服不错价格比实体便宜好多值得购买', '2017-5-20', '粉色', 'M', '', '1kggiec');
=======
INSERT INTO `discuss` VALUES ('1', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '彬彬妹2016', '还没有穿！看起还是可以！', '2017-07-30 ', '黑色套装  ', '75/34', 'http://s3.mogucdn.com/p2/170727/upload_3d5kgje8i3jdgd0ik52l28biha0hk_640x900.jpg_640x960.v1cOK.81.jpg', '1kg8fzc');
INSERT INTO `discuss` VALUES ('2', 'http://s3.mogucdn.com/p2/161214/103488673_0l1ff9kf2hbc32fe4a2g05l77d89d_140x140.png_100x100.jpg', 'DàMr._qqqV', '这种价位买到这样质量衣服已经很良心了喜欢的可以放心买，穿着非常非常显瘦，背后的小心机很性感啊！', '2017-07-30 ', '黑色', 'M', 'http://s3.mogucdn.com/p2/170117/upload_5jebi0af8537id564g95ehj0g781k_1125x647.jpg', '1kggdaq');
INSERT INTO `discuss` VALUES ('3', 'http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png_100x100.jpg', 'Loser蛋蛋', '裙子做工很精致，样子也不错，自己挺喜欢的，大赞', '2017-04-03', '白色 ', '均码', 'http://s17.mogucdn.com/p2/170718/upload_76812521ge2e3l7k6aegh24kdf3c8_640x900.jpg_640x960.v1cOK.81.jpg', '1kgds9u');
INSERT INTO `discuss` VALUES ('4', 'http://s3.mogucdn.com/p2/161214/103488673_0l1ff9kf2hbc32fe4a2g05l77d89d_140x140.png_100x100.jpg', '迦***音', '质量很好 上身很漂亮  就是快递有点慢哦 ', '2017-07-17', '蓝色  ', 'M', 'http://s3.mogucdn.com/p2/170725/upload_6kkchfbf3chl32e35hd1d92e91609_640x900.jpg_640x960.v1cOK.81.jpg', '1kgd92m');
INSERT INTO `discuss` VALUES ('5', 'http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png_100x100.jpg', 'y***e', '谢谢亲的效率。昨晚美了一把。都夸衣服好看。忘了拍全身照。就给半身的买家秀吧', '2017-01-18', '黑色', 'L', 'http://s3.mogucdn.com/mlcdn/55cf19/170718_5lfheb7bg4e02j9de067c8gfll61l_640x960.jpg_640x960.v1cOK.81.jpg', '1kgah8u');
INSERT INTO `discuss` VALUES ('6', 'http://s3.mogucdn.com/p2/161214/103488673_8ff131b8g07810e345268cgcda6ef_140x141.png_100x100.jpg', '萱萱要努力啊纯购', '穿着很显气质，很赞，值得购买', '2017-05-05', '灰色  ', 'S', 'http://s3.mogucdn.com/mlcdn/c45406/170610_79g82j13j727ggigle0gdibg46g0i_750x1125.jpg_640x960.v1cOK.81.jpg', '1kfz4p8');
INSERT INTO `discuss` VALUES ('7', 'http://s3.mogucdn.com/p2/161214/103488673_8da6lhkf9a5h32ei6bd297523c35d_140x140.png_100x100.jpg', 'Anne__F', '穿第二次就破损了，后面拉链上面一截也拉不上的，之前买了一件小了，老板说不能换，我就先重买了一件，小的那件退了，结果老板就赖账了，我衣服退了他钱不退了还说我没退，还好我单据都留着，无良商家。现在找他们都联系不上了', '2017-06-14', '黑色 ', 'S', 'http://s3.mogucdn.com/mlcdn/c45406/170610_79g82j13j727ggigle0gdibg46g0i_750x1125.jpg_640x960.v1cOK.81.jpg', '1h6wrjm');
INSERT INTO `discuss` VALUES ('8', 'http://s3.mogucdn.com/p2/161214/103488673_8ff131b8g07810e345268cgcda6ef_140x141.png_100x100.jpg', '萱萱要努力啊纯购', '穿着很显气质，很赞，值得购买', '2017-05-05', '灰色 ', 'S', 'http://s3.mogucdn.com/p2/170725/upload_6576cg7jd6deh7l6c016hg5908c1l_640x900.jpg_640x960.v1cOK.81.jpg', '1kggdsy');
INSERT INTO `discuss` VALUES ('9', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '旅行者454599', '手感很好，穿着也很舒服', '2017-06-17', '黑色套装', '32/70', 'http://s3.mogucdn.com/p2/170727/upload_5715ec18j9995l0ee3k6jfej4bca1_640x900.jpg_640x960.v1cOK.81.jpg', '1kggdaq');
INSERT INTO `discuss` VALUES ('10', 'http://s3.mogucdn.com/p2/161214/103488673_0l1ff9kf2hbc32fe4a2g05l77d89d_140x140.png_100x100.jpg', '夏梓柒', '这款衣服真的是非常好，料子也柔软顺滑，穿着很仙，也不透。就是我比较喜欢穿有袖子的，这个袖子岔开算无袖吧！质量还是很不错哦。物有所值', '2017-07-24', '蓝色 ', 'M', 'http://s11.mogucdn.com/p2/170308/72610347_5kli8f5fkc3abcbc1i6g7lk85bbdc_640x960.jpg_640x960.v1cOK.81.jpg', '1kggh5i');
INSERT INTO `discuss` VALUES ('11', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '拜鱼为师', '质量很好，服务很贴心，因为个人原因把地址写错了，跟商家说了一下，商家帮我反馈了，货还是送到我手里了，非常感谢', '2017-07-20', '柔美碎花 ', 'L', 'http://s3.mogucdn.com/p2/170725/upload_38i93flf49898g78feij8k5ff8dg6_1600x2250.jpg_640x960.v1cOK.81.jpg', '1kfd02g');
INSERT INTO `discuss` VALUES ('12', 'http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png_100x100.jpg', '镓有两宝', '宝贝质量很好，大小也刚刚好。', '2017-06-25', '杏粉色  ', 'S', 'http://s3.mogucdn.com/mlcdn/c45406/170515_1ejiahe035ehkdb939650gb78kici_640x960.jpg', '1kgg6pi');
INSERT INTO `discuss` VALUES ('13', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '维尼发发', '夏天的感觉就是要这么美，裙子很喜欢，质量也很不错哦，穿出去约会闺蜜说很漂亮。', '2017-05-18', '图色 ', 'M', 'http://s3.mogucdn.com/mlcdn/c45406/170623_7j5k20f94d1kckk4l65ehc7a98a29_640x960.jpg', '1kf3dq4');
INSERT INTO `discuss` VALUES ('14', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '奋斗ing2008', '裙子质量不错 也很漂亮 很喜欢 ', '2017-06-09', '白色', 'S', 'http://s3.mogucdn.com/p2/170724/upload_29h21ckj309b79kbie61jce7gg6hi_640x832.jpg', '1kge9w8');
INSERT INTO `discuss` VALUES ('15', 'http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png_100x100.jpg', '莉萍2017', '衣服不错价格比实体便宜好多值得购买', '2017-06-21', '藕粉色 ', 'L', 'http://s3.mogucdn.com/p2/170727/upload_5b8c70lb1874b84i3273g4dg57121_640x900.jpg', '1h6wrjm');
INSERT INTO `discuss` VALUES ('16', 'http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png_100x100.jpg', 'yy猪', '衣服不错价格比实体便宜好多值得购买', '2017-5-20', '粉色', 'M', 'http://s3.mogucdn.com/p2/170706/upload_50bje25750k565kl51c8g8gjh76dc_1600x2250.jpg', '1kggiec');
INSERT INTO `discuss` VALUES ('17', 'http://s3.mogucdn.com/p2/161214/103488673_8ff131b8g07810e345268cgcda6ef_140x141.png_100x100.jpg', '夏菡elki', '裙裙质量还蛮好，颜色也很喜欢，设计的非常不错，领口很特别，穿着挺好看的，厚薄适中，不透。面料柔软，做工细，款式单穿很性感。', '2017-07-31', '图片色 ', 'S', 'http://s3.mogucdn.com/mlcdn/c45406/170731_5de9cfl7g6e1f9l0elfdk6h172ki4_267x400.jpg_100x100.jpg', '1kgabxy');
INSERT INTO `discuss` VALUES ('18', 'http://s3.mogucdn.com/p2/161214/103488673_8ff131b8g07810e345268cgcda6ef_140x141.png_100x100.jpg', 'DSF', '还没有穿！看起还是可以！', '2017-07-25', '黑色套装', '75/34 ', 'http://s3.mogucdn.com/p2/170616/upload_29a3f1dckkikkg4ccb30g9k52418i_640x900.jpg', '1kg80rg');
INSERT INTO `discuss` VALUES ('19', 'http://s3.mogucdn.com/p2/161214/103488673_8ff131b8g07810e345268cgcda6ef_140x141.png_100x100.jp', '都是撒啊', '看起来还不错，试过才知道', '2017-7-29', '白色', 'L', 'http://s3.mogucdn.com/p2/170727/upload_5b8c70lb1874b84i3273g4dg57121_640x900.jpg', '1kgel0c');
INSERT INTO `discuss` VALUES ('20', 'http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png_100x100.jpg', '苏打水12', '大大看到那阿森纳打击你的', '2017-6-30', '黑色', 'M', 'http://s3.mogucdn.com/mlcdn/c45406/170623_7j5k20f94d1kckk4l65ehc7a98a29_640x960.jp', '1kgb21q');
INSERT INTO `discuss` VALUES ('21', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '点撒打算', '萨芬点撒点撒撒大恶趣味', '2017-7-1', '红色', 'S', 'http://s3.mogucdn.com/p2/170623/upload_86091f2dae0he4k3i2ai0lcfi019j_640x900.jpg', '1kg7oxq');
INSERT INTO `discuss` VALUES ('22', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '多少级啊大家', '大大大大日清河桥千', '2017-2-4', '粉红', 'L', 'http://s11.mogucdn.com/p2/170724/upload_4i0060fbhjkk45kc91b264i70cg1a_640x900.jpg', '1kg7vci');
INSERT INTO `discuss` VALUES ('23', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '日晚间热吻日', '额外企鹅王企鹅去', '2017-5-6', '蓝色', 'M', 'http://s3.mogucdn.com/p2/170727/upload_7ha93g8ljj7dal6f00jh2243h5f0h_640x900.jpg', '1kgdi7u');
INSERT INTO `discuss` VALUES ('24', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '点撒点大', '热吻日沃尔沃', '2017-7-4', '黑色', 'L', 'http://s3.mogucdn.com/p2/170727/upload_5b8c70lb1874b84i3273g4dg57121_640x900.jpg', '1kgdeai');
INSERT INTO `discuss` VALUES ('25', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', 'rewds', '啊点撒娇的说', '2017-7-23', '红色', 'M', 'http://s3.mogucdn.com/p2/170706/upload_50bje25750k565kl51c8g8gjh76dc_1600x2250.jpg', '1kghn4e');
INSERT INTO `discuss` VALUES ('26', 'http://s3.mogucdn.com/p2/161214/103488673_825c06kdj394515kkkjhhi0el8j86_140x141.png_100x100.jpg', '斯蒂芬森', '发送可是佛是否计算机', '2017-7-26', '黑色', 'L', 'http://s3.mogucdn.com/p2/170616/upload_29a3f1dckkikkg4ccb30g9k52418i_640x900.jpg', '1kggffe');
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10
