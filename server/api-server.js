const apiServer = require('express');
const cors = require('cors');
const app = apiServer();
const port = 5000; // Choose desired port
const db = require('./db');

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
// todo: connect with database and replace the sample data
app.get('/api/inventory/categories', (req, res) => {
  const categories = [
    { id: 1, name: 'accessories', image: '/category-icons/accessories.png' },
    { id: 2, name: 'books-and-comics', image: '/category-icons/books-and-comics.png' },
    { id: 3, name: 'clothing-and-apparel', image: '/category-icons/clothing-and-apparel.png' },
    { id: 4, name: 'games-and-puzzles', image: '/category-icons/games-and-puzzles.png' },
    { id: 5, name: 'home-and-kitchenware', image: '/category-icons/home-and-kitchenware.png' },
    { id: 6, name: 'toys-and-collectibles', image: '/category-icons/toys-and-collectibles.png' },
  ];

  res.json(categories);
});

// Get all items from inventory
// todo: connect with database and replace the sample data
app.get('/api/inventory/items', (req, res) => {
  const items = [
    { id: 1, name: 'Monitor', price: '100', image: '/rick1.png' },
    { id: 2, name: 'Keyboard', price: '40', image: '/rick2.png' },
    { id: 3, name: 'Mouse', price: '20', image: '/rick3.png' },
  ];

  res.json(items);
});

// Get one item from inventory
// todo: connect with database and replace the sample data
app.get('/api/inventory/items/:id', (req, res) => {
  const item = [{ id: 1, name: 'Monitor', price: '100', image: '/rick1.png' }];

  res.json(item);
});

// Get all order records from orders
// todo: connect with database and replace the sample data
app.get('/api/orders/records', (req, res) => {
  const records = [
    { id: 1, title: 'Order 1', content: 'Content 1' },
    { id: 2, title: 'Order 2', content: 'Content 2' },
  ];

  res.json(records);
});

// Get one order record from orders
// todo: connect with database and replace the sample data
app.get('/api/orders/records/{id}', (req, res) => {
  const record = [{ id: 1, title: 'Order 1', content: 'Content 1' }];

  res.json(record);
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

app.put('/api/orders/records/:id', (req, res) => {
  const orderRecordId = req.params.id; // Get the post ID from the route parameters

  // todo: Find the post in your data storage by its ID
  // const orderRecordToUpdate = orders.find((order) => order.id === orderRecordId);
  // if (!orderRecordToUpdate) {
  //     return res.status(404).json({ error: 'Record not found' });
  // }

  // todo: Update the post with the data from the request body
  // orderRecordToUpdate.title = req.body.title;
  // orderRecordToUpdate.content = req.body.content;

  // Return the updated post
  // res.json(orderRecordToUpdate);
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
