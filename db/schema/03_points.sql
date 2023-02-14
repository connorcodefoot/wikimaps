
DROP TABLE IF EXISTS points CASCADE;
CREATE TABLE points (
  id SERIAL PRIMARY KEY NOT NULL,
  map_id INTEGER REFERENCES maps(id),
  title VARCHAR(255),
  description TEXT,
  image TEXT,
  lat TEXT,
  lng TEXT
);
