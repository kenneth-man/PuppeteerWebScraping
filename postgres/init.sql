CREATE TABLE users (
	id serial PRIMARY KEY,
	username VARCHAR ( 100 ) UNIQUE NOT NULL,
	password VARCHAR ( 500 ) NOT NULL,
	email VARCHAR (500) UNIQUE NOT NULL
);

INSERT INTO users(username, password, email)
VALUES ('KennethMan', '$2a$10$wJ3Q3G2/xWMuiwXiGdRsKucsXRe9G1nd7Uwfewb.9hvsxvDJPIx.6', 'kenneth.waikin.man@outlook.com');