CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(512) NOT NULL UNIQUE,
  password VARCHAR(512) NOT NULL,
  name VARCHAR(512) NOT NULL
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(1024) NOT NULL,
  isDone BOOL DEFAULT FALSE,
  category VARCHAR(1024) NOT NULL,
  created_date TIMESTAMP DEFAULT NOW(),
  user_id INT NOT NULL REFERENCES users(id)
);

-- senha: 123123
INSERT INTO users(id, email, password, name) Values(1, 'rsdevigo@gmail.com', '$2b$10$/EiJAYpr55zxclYLfi3hWeR08Ys6.ZdyBIXemP8Vi7FzywfwijdSC', 'Rodrigo Sanches Devigo');

