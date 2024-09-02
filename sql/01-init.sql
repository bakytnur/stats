CREATE TABLE IF NOT EXISTS continent (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

INSERT INTO continent (name) 
VALUES
  ('Asia'),
  ('Africa'),
  ('Europe'),
  ('South America and the Caribbean'),
  ('Northern America'),
  ('Oceania')
     ;