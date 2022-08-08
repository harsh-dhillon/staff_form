Steps to Reproduce this Page - 
1. Start XAMPP, PHP, MySQL modules.
2. In phpmyadmin, create a db name 'my_db'.
3. Select the created db from left menu and run the SQL script, 
```
CREATE TABLE `staff_info_table` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `occupation` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
4. Clone the repo and place it inside, ``` C:\xampp\htdocs```
5. Open the page ``` http://localhost/<folder-name>```
