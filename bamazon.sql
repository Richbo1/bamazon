DROP DATABASE IF EXISTS GreatBay_DB;

CREATE DATABASE GreatBay_DB;

USE GreatBay_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);
INSERT INTO products (product_name,department_name, price, stock_quantity) VALUES('hammer', 'tools', 10.00, 20);

INSERT INTO products(product_name,department_name, price, stock_quantity) VALUES("turkey", "animals", 5.00, 100);
INSERT INTO products(product_name,department_name, price, stock_quantity) VALUES("dragon", "animals", 1000.00, 3);
INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("cooler","backyard", 20.00, 70);
INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("pillow", "bedroom", 10.00, 40);
INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("razor", "shaving", 10.00, 30);
INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("lightsaber", "jedi", 10000.00, 2);
INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("candle", "home", 2.00, 100);
INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("bowl", "kitchen", 3.00, 50);
INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("pan", "kitchen", 6.00, 60);