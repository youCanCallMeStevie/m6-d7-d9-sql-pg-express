
CREATE TABLE IF NOT EXISTS 

    authors (

    author_id SERIAL PRIMARY KEY,

        name VARCHAR(50) NOT NULL,

        lastname VARCHAR(50) NOT NULL,

        username VARCHAR(50) NOT NULL,

        email VARCHAR(50) NOT NULL

    );
