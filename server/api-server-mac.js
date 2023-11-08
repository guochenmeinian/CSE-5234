const apiServer = require('express');
const cors = require('cors');
const app = apiServer();
const port = 5000;
const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "rm_hub",
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err);
    return;
  }
  console.log('Database is connected');
});

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
};

// Use the cors middleware
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(apiServer.json());

// API endpoints
// Get all categories from inventory
app.get('/api/inventory/categories', (req, res) => {
  const sql = 'SELECT * FROM categories';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    res.json(result);
  });
});

// Get all items for category from inventory
app.get('/api/inventory/categories/:id/items', (req, res) => {
  const categoryId = req.params.id;
  const sql = `SELECT * FROM products where category_id = ${categoryId}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    res.json(result);
  });
});

// Get all items from inventory
app.get('/api/inventory/items', (req, res) => {
  const sql = `SELECT * FROM products`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    res.json(result);
  });
});

// Get one item from inventory
app.get('/api/inventory/items/:id', (req, res) => {
  const idToFind = parseInt(req.params.id);
  const sql = `SELECT * FROM products where id = ${idToFind}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    res.json(result);
  });
});

// Create one order record
// todo: connect with database and replace the sample data
app.post('/api/orders/records', (req, res) => {
  // Get the post data from the request body
  const newOrderRecord = req.body;

  // todo: Generate a unique ID for the new post (e.g., using a UUID library)
  // newOrderRecord.id = generateUniqueID();

  // todo: Save the new post to your data storage
  // orderRecords.push(newOrderRecord);

  // Return the created post in the response
  // res.status(201).json(newOrderRecord);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// todo:
// const drop_item = "DROP TABLE IF EXISTS item";
// // eslint-disable-next-line no-multi-str
// const create_item = "CREATE TABLE Item ( \
//                         Id int NOT NULL AUTO_INCREMENT, \
//                         Item varchar(255), \
//                         quantity int, \
//                         PRIMARY KEY (Id) );";
//
// const item_add1 = "INSERT INTO Item (Item, quantity) VALUES ('product 1', 10)"
// const item_add2 = "INSERT INTO Item (Item, quantity) VALUES ('product 2', 20)"
//
// app.get("/get_item", function(req, res) {
//     db.query(drop_item);
//     db.query(create_item);
//     db.query(item_add1);
//     db.query(item_add2);
//     const result = db.query('select * from Item');
//     return res.send(result)
// });
//
// app.post("/update_quantity", function(req, res) {
//     var IDs = req.body.names;
//     var quantity = req.body.quantity;
//
//     IDs.forEach((id_, index) => {
//         const quan = quantity[index];
//         const result1 = db.query(`UPDATE Item SET quanity = ${quan} WHERE Id = ${id_};`);
//     });
//
//     return res.send('')});
