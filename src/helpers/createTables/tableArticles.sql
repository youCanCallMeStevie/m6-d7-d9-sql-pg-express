CREATE TABLE IF NOT EXISTS 

    articles (

        id SERIAL PRIMARY KEY,

        headLine VARCHAR(50) NOT NULL,

        subHead VARCHAR(50),

        content VARCHAR(2000) NOT NULL,

        cover VARCHAR(500),
        
        authorId INTEGER NOT NULL,

        categoryId INTEGER NOT NULL,
        
        FOREIGN KEY (authorId) REFERENCES authors,

        FOREIGN KEY (categoryId) REFERENCES categories
    );