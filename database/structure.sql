CREATE DATABASE reselecdb;

CREATE TABLE category_products (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL
);

CREATE TABLE type_products (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL
);

CREATE TABLE products (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    price DECIMAL NOT NULL,
    characteristicOne VARCHAR(150) NOT NULL,
    characteristicTwo VARCHAR(150) NOT NULL,
    characteristicThree VARCHAR(150) NOT NULL,
    description VARCHAR (300) NOT NULL,
    mainImage VARCHAR (100) NOT NULL,
    imageTwo VARCHAR (100),
    imageThree VARCHAR (100),
    imageFour VARCHAR (100),
    imageFive VARCHAR (100),
    idCategory INT UNSIGNED,
    idTypeProduct INT UNSIGNED,
    CONSTRAINT fk_category FOREIGN KEY (idCategory) REFERENCES category_products (id),
    CONSTRAINT fk_type FOREIGN KEY (idTypeProduct) REFERENCES type_products (id)
);

CREATE TABLE category_users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL
);

CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR (30) NOT NULL,
    password VARCHAR (100) NOT NULL,
    name VARCHAR (30) NOT NULL,
    lastName VARCHAR (30) NOT NULL,
    email VARCHAR (30) NOT NULL UNIQUE,
    phoneNumber VARCHAR (30) NOT NULL,
    userImage VARCHAR (50),
    idCategory INT UNSIGNED,
    CONSTRAINT fk_categoryUser FOREIGN KEY (idCategory) REFERENCES category_users (id)
);