-- Create the 'products' table
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    thumbnail_image VARCHAR(255),
    actual_image VARCHAR(255),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);