CREATE TABLE users (
	id serial PRIMARY KEY,
	username VARCHAR ( 100 ) UNIQUE NOT NULL,
	password VARCHAR ( 500 ) NOT NULL,
	email VARCHAR (500) UNIQUE NOT NULL
);

INSERT INTO users(username, password, email)
VALUES ('KennethMan', 'password45678', 'Kenneth.waikin.man@outlook.com');