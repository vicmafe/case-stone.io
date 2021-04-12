DROP DATABASE IF EXISTS Stone_app;
CREATE DATABASE IF NOT EXISTS Stone_app;

USE Stone_app;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    favorites VARCHAR(25),
    PRIMARY KEY (id),
    UNIQUE KEY `email_un` (email)
);

INSERT INTO users (id, name, email, password, favorites) VALUES
    ('1', 'Victor Mateus', 'vicmafe@stone.com', '123456', ''),
    ('2', 'Bob', 'bob@test.com', '1234567', '');
