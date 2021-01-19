CREATE TABLE IF NOT EXISTS 
    
    reviews (

        id SERIAL PRIMARY KEY,

        text VARCHAR(150) NOT NULL,
        rate INTEGER NOT NULL,
        
        articleId INTEGER NOT NULL,

        FOREIGN KEY (articleId) REFERENCES articles
    
    );