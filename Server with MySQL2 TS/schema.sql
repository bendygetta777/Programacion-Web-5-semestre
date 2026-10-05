-- Creación de la base de datos si no existe
CREATE DATABASE IF NOT EXISTS tienda_db;
USE tienda_db;

-- Creación de la tabla de productos acorde a la especificación de la actividad
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL,
  description TEXT NOT NULL,
  brand VARCHAR(100) NULL,
  img TEXT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE
);

-- Registros de prueba opcionales para inicializar la base de datos
INSERT INTO products (name, price, stock, description, brand) 
VALUES 
  ('Laptop Gaming', 15999.99, 5, 'Laptop para desarrollo y juegos', 'Asus'),
  ('Mouse Inalámbrico', 450.50, 20, 'Mouse ergonómico óptico', 'Logitech');