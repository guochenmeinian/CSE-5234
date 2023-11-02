const apiServer = require('express');
const cors = require('cors');
const app = apiServer();
const port = 5000; // Choose desired port
const db = require('./db');
const fs = require('fs');
const path = require('path');

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
    { id: 1, name: 'Accessories', image: '/category-icons/accessories.png' },
    { id: 2, name: 'Books And Comics', image: '/category-icons/books-and-comics.png' },
    { id: 3, name: 'Clothing And Apparel', image: '/category-icons/clothing-and-apparel.png' },
    { id: 4, name: 'Games And Puzzles', image: '/category-icons/games-and-puzzles.png' },
    { id: 5, name: 'Home And Kitchenware', image: '/category-icons/home-and-kitchenware.png' },
    { id: 6, name: 'Toys And Collectibles', image: '/category-icons/toys-and-collectibles.png' },
  ];

  res.json(categories);
});

// Get all items from inventory
// todo: connect with database and replace the sample data
app.get('/api/inventory/categories/:id/items', (req, res) => {
  const categoryId = req.params.id;
  let jsonFileName = "";
  switch (categoryId) {
    case "1":
      jsonFileName = "accessories";
      break;
    case "2":
      jsonFileName = "books-and-comics";
      break;
    case "3":
      jsonFileName = "clothing-and-apparel";
      break;
    case "4":
      jsonFileName = "games-and-puzzles";
      break;
    case "5":
      jsonFileName = "home-and-kitchenware";
      break;
    case "6":
      jsonFileName = "toys-and-collectibles";
      break;
  }
  const jsonFilePath = path.join(__dirname, "..", 'public/database', `${jsonFileName}.json`);
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Get one item from inventory
// todo: connect with database and replace the sample data
app.get('/api/inventory/items/:id', (req, res) => {
  const idToFind = parseInt(req.params.id);
  let jsonFileName = "";
  if (idToFind <= 20) {
    jsonFileName = "accessories";
  }
  else if (idToFind <= 40) {
    jsonFileName = "books-and-comics";
  }
  else if (idToFind <= 60) {
    jsonFileName = "clothing-and-apparel";
  }
  else if (idToFind <= 70) {
    jsonFileName = "games-and-puzzles";
  }
  else if (idToFind <= 80) {
    jsonFileName = "home-and-kitchenware";
  }
  else if (idToFind <= 90) {
    jsonFileName = "toys-and-collectibles";
  }
  const jsonFilePath = path.join(__dirname, "..", 'public/database', `${jsonFileName}.json`);
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).send('Internal Server Error');
    } else {
      const records = JSON.parse(data);

      // Find the record with the specified ID
      const foundRecord = records.items.find((record) => record.id === idToFind);

      if (foundRecord) {
        res.json(foundRecord);
      } else {
        res.status(404).send('Record not found');
      }
    }
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
