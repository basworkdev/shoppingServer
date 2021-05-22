-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2021 at 01:43 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `userName`, `password`) VALUES
(1, 'sarawut', '2ea05ea8eed5a1a367e377f9b67bb8aa');

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `name`) VALUES
('COLEMAN', 'Coleman'),
('IRONMAN', 'ironman'),
('MARMOT', 'Marmot'),
('THULE', 'Thule'),
('YAKIMA', 'Yakima'),
('YETI', 'YETI');

-- --------------------------------------------------------

--
-- Table structure for table `config`
--

CREATE TABLE `config` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `config`
--

INSERT INTO `config` (`id`, `name`, `value`) VALUES
(1, 'OFFROAD', 'RODX-OFFROAD'),
(2, 'PRODUCT_COLOR', '#000000,#00ff00,#00aacc,#e0e0e0,#ffffff,#8c5600,ff0000');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mainDetail` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `subDetail` varchar(255) DEFAULT NULL,
  `price` float DEFAULT 0,
  `fullPrice` float DEFAULT 0,
  `productKey` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT 0,
  `img` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `mainImg` varchar(255) DEFAULT NULL,
  `deliveryCost` float NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `mainDetail`, `detail`, `subDetail`, `price`, `fullPrice`, `productKey`, `color`, `stock`, `img`, `type`, `brand`, `status`, `mainImg`, `deliveryCost`) VALUES
(4, 'Thule x Tepui Explorer Ayer 2', 'Anywhere your vehicle can go, your tent is sure to follow. That\'s because you\'re equipped with the Thule x Tepui Explorer Ayer 2. Sized for a couple or you and your furry best friend', '- A 2-person rooftop tent for car camping in elevated comfort\n- Coated cotton-poly walls defend through all four seasons\n- Tent fabric treated to be both UV- and mold-resistant\n- Includes a high-density foam mattress well-rested nights\n- Mesh panels offer', '<h2 class=\"ui-product-details__title\">Thule x Tepui Explorer Ayer 2</h2>\n<div class=\"ui-product-details__description\">\n<p>Anywhere your vehicle can go, your tent is sure to follow. That\'s because you\'re equipped with the Thule x Tepui Explorer Ayer 2. Siz', 32000, 32000, 'rooftop-tent-Thule-x-Tepui-Explorer-Ayer-2', '#00aacc,#e0e0e0', 9, 'HAZGRA_1621339177770.png,BLU_D3_1621339183694.png,HAZGRA_D4_1621339187939.png,BLU_D1_1621339192490.png,HAZGRA_D3_1621339198959.png,HAZGRA_D2_1621339203302.png,BLU_D2_1621339208026.png', 'ROOF_TOP_TENT', 'THULE', 'Y', 'HAZGRA_1621339166166.png', 0),
(5, 'Thule x Tepui Explorer Autana 3 + Annex', 'Upgrade your car camping setup with this premium roof-top tent 600D ripstop blend fabric is durable and protects from weather', '\nUpgrade your car camping setup with this premium roof-top tent\n600D ripstop blend fabric is durable and protects from weather\nRemovable annex offers privacy and gear storage\nHigh-density foam mattress adds comfort and an at-home feel\nTelescoping ladder i', '<h2 class=\"ui-product-details__title\">Why We Like The Thule x Tepui Explorer Autana 3 + Annex</h2>\n<div class=\"ui-product-details__description\">\n<p>Explore vehicle-accessible trails off the grip and sleep in the comforts of home with the x Tepui Explorer ', 37000, 39000, 'rooftop-tent-Thule-x-Tepui-Explorer-Autana-3-and-Annex', '#00aacc,#e0e0e0', 9, 'BLU (1)_1621339720518.png,OLIGRE_D10_1621339727239.png,OLIGRE_D9_1621339732095.png,OLIGRE_D8_1621339736263.png,OLIGRE_D7_1621339742276.png,BLU_D4_1621339746486.png,BLU_D1_1621339750550.png', 'ROOF_TOP_TENT', 'THULE', 'Y', 'BLU (1)_1621339714476.png', 0),
(6, 'Thule x Tepui Low-Pro 3', ' Rooftop tent ready for weekends at the beach or in the mountains Waterproof ripstop sidewalls keep you covered from the elements Screens provide ventilation for mountain air, temperature control 3-person design is spacious and comfortable for', 'The happiest campers are those who aren\'t sleeping with pinecones digging into their backs, and we prefer the Thule x Tepui Low-Pro 3 Rooftop Tent for its lightweight, low-profile design. We don\'t mind leaving it on our smaller vehicles in between weekend', '<h2 class=\"ui-product-details__title\">Why We Like The Thule x Tepui Low-Pro 3</h2>\n<div class=\"ui-product-details__description\">\n<p>The happiest campers are those who aren\'t sleeping with pinecones digging into their backs, and we prefer the Thule x Tepui', 33000, 35000, 'rooftop-tent-Thule-x-Tepui-Low-Pro-3', '#ffffff', 5, 'LIGGRA_1621340312979.png', 'ROOF_TOP_TENT', 'THULE', 'Y', 'LIGGRA_1621340308101.png', 0),
(7, 'Thule x Tepui Explorer Autana 4 + Annex', 'Tough and spacious rooftop tent for off-road adventures Attaches to roof rack for quick and convenient setup Reinforced fabric with taped seams for durability Telescoping ladder offers easy access to roof Fully enclosed Annex below tent provides ample sto', 'Tough and spacious rooftop tent for off-road adventures\nAttaches to roof rack for quick and convenient setup\nReinforced fabric with taped seams for durability\nTelescoping ladder offers easy access to roof\nFully enclosed Annex below tent provides ample sto', '<h2 class=\"ui-product-details__title\">Why We Like The Thule x Tepui Explorer Autana 4 + Annex</h2>\n<div class=\"ui-product-details__description\">\n<p>Designed for off-road rigs and dirt roads, the Thule x Tepui Explorer Autana 4 + Annex is the biggest and b', 42000, 42000, 'rooftop-tent-Thule-x-Tepui-Explorer-Autana-4-add-Annex', '#e0e0e0', 4, 'HAZGRA_1621340554388.png,HAZGRA_D5_1621340559316.png,HAZGRA_D4_1621340564793.png,HAZGRA_D3_1621340569252.png', 'ROOF_TOP_TENT', 'THULE', 'Y', 'HAZGRA_1621340549041.png', 0),
(9, 'Yakima Skyrise Rooftop Tent - 3-Person 3-Season', 'Yakima\'s foray into lightweight and rugged rooftop tents 3-person, 3-season tent attaches to most crossbar systems 210D nylon fabric with PU-coated fly for rain protection Included foam mattress eliminates need for inflatable pads Ventilated mesh windows ', 'Why We Like The Skyrise Rooftop Tent\nYakima\'s Skyrise Rooftop Tent elevates us from cold, muddy grounds to panoramic vistas and starlit skies. Yakima channels decades of hauling and outdoor expertise into the lightweight design and robust durability of th', '<h2 class=\"ui-product-details__title\">Why We Like The Skyrise Rooftop Tent</h2>\n<div class=\"ui-product-details__description\">\n<p>Yakima\'s Skyrise Rooftop Tent elevates us from cold, muddy grounds to panoramic vistas and starlit skies. Yakima channels deca', 35000, 35000, 'rooftop-tent-Yakima-Skyrise-Rooftop-Tent-3-Person-3-Season', '#00ff00', 3, 'ONECOL_D1_1621340929083.png,ONECOL_D2_1621340935136.png,ONECOL_1621340939217.png', 'ROOF_TOP_TENT', 'YAKIMA', 'Y', 'ONECOL_D1_1621340924011.png', 0),
(10, 'Coleman Skydome Tent: 4-Person 3-Season', 'Spacious tent for 3-season camping with a few friends PU coated walls and tub-like floor protects from wet weather Wide door for easy entrance and gear transportation Mesh storage shelves and gear loft for small item organization Carry bag included to con', 'Spacious tent for 3-season camping with a few friends\nPU coated walls and tub-like floor protects from wet weather\nWide door for easy entrance and gear transportation\nMesh storage shelves and gear loft for small item organization\nCarry bag included to con', '<h2 class=\"ui-product-details__title\">Why We Like The Skydome Tent</h2>\n<div class=\"ui-product-details__description\">\n<p>The Skydome 4-Person 3-Season Tent makes weekend camping trips with our favorite adventure partners (human or otherwise) a comfortable', 3799, 3799, 'tent-Coleman-Skydome-Tent-4-Person-3-Season', '#00aacc', 20, 'DAR_1621341248591.png,DAR_D6_1621341252737.png,DAR_D3_1621341256953.png,DAR_D1_1621341261137.png,DAR_D2_1621341265350.png,DAR_D5_1621341269390.png,DAR_D4_1621341273588.png', 'TENT', 'COLEMAN', 'Y', 'DAR_1621341243929.png', 0),
(11, 'Coleman Skydome XL Tent: 10-Person 3-Season', 'Tent palace for group camping trips from spring to fall Lofty ceiling for easy standing and walking around inside Nearly vertical walls provide more livable space Two wide doors for convenient in-out for everyone Large awnings offer more weather protectio', 'Tent palace for group camping trips from spring to fall\nLofty ceiling for easy standing and walking around inside\nNearly vertical walls provide more livable space\nTwo wide doors for convenient in-out for everyone\nLarge awnings offer more weather protectio', '<h2 class=\"ui-product-details__title\">Why We Like The Skydome XL Tent</h2>\n<div class=\"ui-product-details__description\">\n<p>We pack the Skydome XL Tent when we get the gang together for a weekend of trail exploring and s\'more making. The pre-attached pole', 8299, 8600, 'tent-Coleman-Skydome-XL-Tent-10-Person-3-Season', '#00aacc', 10, 'BLUNIG_1621341623528.png,BLUNIG_D6_1621341627777.png,BLUNIG_D5_1621341632538.png,BLUNIG_D4_1621341636838.png', 'TENT', 'COLEMAN', 'Y', 'BLUNIG_1621341619144.png', 0),
(12, 'Marmot Limestone Tent: 8-Person 3-Season', 'Escape the bustle of modern life with this huge tent Pre-bent design increases headspace and vertical room Super-sized door for easy access Large vestibule with separate door for convenient storage Color-coded pieces for easier and quicker pitching Intern', 'Escape the bustle of modern life with this huge tent\nPre-bent design increases headspace and vertical room\nSuper-sized door for easy access\nLarge vestibule with separate door for convenient storage\nColor-coded pieces for easier and quicker pitching\nIntern', '<h2 class=\"ui-product-details__title\">Why We Like The Limestone Tent</h2>\n<div class=\"ui-product-details__description\">\n<p>Massive liveability makes Marmot\'s Limestone Tent an absolute delight for camping with the whole family. From relaxing under the awn', 23000, 25000, 'tent-Marmot-Limestone-Tent-8-Person-3-Season', '#00ff00', 11, 'GNSHA_1621341830852.png,GNSHA_D10_1621341834782.png,GNSHA_D5_1621341839137.png,GNSHA_D4_1621341844495.png,GNSHA_D3_1621341848506.png', 'TENT', 'COLEMAN', 'Y', 'GNSHA_1621341825567.png', 0),
(13, 'YETI Roadie 24 Cooler', 'A high-performance cooler to keep your food or beverages cold PermaFrost insulation offers premium insulating properties Rotomolded construction is durable while staying thinner and lighter Slim design takes up less space in your car or boat Bearfoot non-', 'A high-performance cooler to keep your food or beverages cold\nPermaFrost insulation offers premium insulating properties\nRotomolded construction is durable while staying thinner and lighter\nSlim design takes up less space in your car or boat\nBearfoot non-', '<h2 class=\"ui-product-details__title\">Why We Like The Roadie 24 Cooler</h2>\n<div class=\"ui-product-details__description\">\n<p>Built to keep a small party prepared for day trips or overnighters, the Roadie 24 Cooler is a slim, light, and higher-performing c', 6000, 6000, 'Cooler-YETI-Roadie-24-Cooler', '#e0e0e0,#8c5600,#ffffff,#000000', 99, 'AQUBLU_1621342342407.png,CHA_D3_1621342346154.png,CHA_D2_1621342350279.png,TAN_D3_1621342354359.png,WHI_D2_1621342359307.png,TAN_D1_1621342363620.png', 'ASSISTIVE-DEVICE', 'YETI', 'Y', 'AQUBLU_1621342332922.png', 0),
(14, 'Petzl Actik Core Headlamp', 'Rechargeable, compact, multi-beam headlamp made versatile Petzl\'s Core battery recharges via included USB cable Wide or mixed beams can be adjusted for maximum visibility Item #PTZ009G', 'Rechargeable, compact, multi-beam headlamp made versatile\nPetzl\'s Core battery recharges via included USB cable\nWide or mixed beams can be adjusted for maximum visibility\nItem #PTZ009G', '<h2 class=\"ui-product-details__title\">Actik Core Headlamp</h2>\n<div class=\"ui-product-details__description\">\n<p>You never know when your day hike will extend past sunset, so be sure to keep Petzl\'s Actic Core Headlamp in you backpack. The Actic will light', 1900, 1999, 'Headlamp-Petzl-Actik-Core-Headlamp', '#000000', 9, 'OR_1621342573100.png,BK_D3_1621342578161.png,OR_D2_1621342582246.png', 'ASSISTIVE-DEVICE', 'YAKIMA', 'Y', 'OR_1621342568288.png', 0),
(16, 'Goal Zero Yeti 150 Solar Generator', 'Solar generator for use with USB, 12V, and AC powered devices Power up tablets, laptop, lights, camera, TV, etc. Pop-up handle for convenient portability Indicator light lets you check the charge at a glance Display backlight makes it easy to see in the d', 'Solar generator for use with USB, 12V, and AC powered devices\nPower up tablets, laptop, lights, camera, TV, etc.\nPop-up handle for convenient portability\nIndicator light lets you check the charge at a glance\nDisplay backlight makes it easy to see in the d', '<ul class=\"prod-details-accordion__list\">\n<li class=\"prod-details-accordion__bulletpoint\">Solar generator for use with USB, 12V, and AC powered devices</li>\n<li class=\"prod-details-accordion__bulletpoint\">Power up tablets, laptop, lights, camera, TV, etc.', 5000, 5200, 'Goal-Zero-Yeti-150-Solar-Generator', '#000000', 8, 'ONECOL (1)_1621601749203.png,ONECOL_D2 (1)_1621601753705.png', 'ASSISTIVE-DEVICE', 'YAKIMA', 'Y', 'ONECOL (1)_1621601744911.png', 50);

-- --------------------------------------------------------

--
-- Table structure for table `product_type`
--

CREATE TABLE `product_type` (
  `id` varchar(100) NOT NULL,
  `name_th` varchar(255) NOT NULL,
  `name_en` varchar(255) NOT NULL,
  `type_order` int(5) NOT NULL,
  `detail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_type`
--

INSERT INTO `product_type` (`id`, `name_th`, `name_en`, `type_order`, `detail`) VALUES
('ASSISTIVE-DEVICE', 'อุปกรณ์แคมป์ปิ้ง', 'ASSISTIVE-DEVICE', 3, 'อุปกร์แคมป์ปิ้งคุณภ่าพ ทนทาน แข็งแรง'),
('ROOF_TOP_TENT', 'เต็นท์หลังคา', 'roof top tent', 1, 'เต็นท์สำหรับรถยนต์ ไม่ว่าจะรถเล็กหรือรถใหญ่ก็สามารถติดตั้งได้'),
('TENT', 'เต็นท์', 'tent', 0, 'เต็นท์คุณภาพ ทนทานแข็งแรง เหมาะสำหรับการลุย');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `config`
--
ALTER TABLE `config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `config`
--
ALTER TABLE `config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
