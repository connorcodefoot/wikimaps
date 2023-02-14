
DROP TABLE IF EXISTS maps CASCADE;
CREATE TABLE maps (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  lat TEXT,
  lng TEXT,
  zoom INTEGER
);