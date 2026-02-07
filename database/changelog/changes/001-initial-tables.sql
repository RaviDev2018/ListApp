-- Create list_types table with default data
CREATE TABLE list_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO list_types (id, name) VALUES
  (1, 'General'),
  (2, 'Gaming');

-- Create list table
CREATE TABLE list (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  type_id INTEGER NOT NULL,
  FOREIGN KEY (type_id) REFERENCES list_types(id)
);

-- Create general_list_items table
CREATE TABLE general_list_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  list_id INTEGER NOT NULL,
  FOREIGN KEY (list_id) REFERENCES list(id)
);

-- Create gaming_list_items table
CREATE TABLE gaming_list_items (
  id SERIAL PRIMARY KEY,
  release_date DATE,
  price DECIMAL(10, 2),
  list_id INTEGER NOT NULL,
  FOREIGN KEY (list_id) REFERENCES list(id)
);