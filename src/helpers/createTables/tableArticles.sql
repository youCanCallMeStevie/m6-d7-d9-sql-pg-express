CREATE TABLE IF NOT EXISTS 
articles(
article_id SERIAL PRIMARY KEY,
    headline VARCHAR(50) NOT NULL,
    subhead VARCHAR(500) NOT NULL,
    content VARCHAR(500) NOT NULL,
    category_id INTEGER NOT NULL,
    author_id INTEGER NOT NULL,
    cover VARCHAR(500),
    createdAt DATE,
    updatedAt DATE,
    FOREIGN KEY (author_id) references authors,
    FOREIGN KEY (category_id) references categories
)