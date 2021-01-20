CREATE TABLE IF NOT EXISTS 
reviews(
reviews_id SERIAL PRIMARY KEY,
    text VARCHAR(500) NOT NULL,
    rate INTEGER NOT NULL,
    user_id INTEGER,
    article_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) references users,
    FOREIGN KEY (article_id) references articles
    
)