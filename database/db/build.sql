BEGIN;

DROP TABLE IF EXISTS users, books, user_books CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  location VARCHAR(100) NOT NULL
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE user_books (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  book_id INTEGER REFERENCES books(id) ON DELETE CASCADE
);

INSERT INTO users (name, location) VALUES 
  ('John', 'New York'),
  ('Jane', 'New York'),
  ('Tom', 'London'),
  ('Mary', 'Paris');

INSERT INTO books (name) VALUES 
  ('Harry Potter'),
  ('Lord of the Rings'),
  ('The Hobbit');

INSERT INTO user_books (user_id, book_id) VALUES 
  (1, 1),
  (2, 1),
  (3, 2),
  (4, 2),
  (3, 3),
  (4, 3);

COMMIT;