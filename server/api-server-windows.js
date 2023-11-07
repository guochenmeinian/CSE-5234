const apiServer = require("express");
const cors = require("cors");
const app = apiServer();
const port = 5000; // Choose desired port
const db = require("./db");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

// Use the cors middleware
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(apiServer.json());

const drop_item = "DROP TABLE IF EXISTS item";
// eslint-disable-next-line no-multi-str
const create_item =
  "CREATE TABLE Item ( \
                        Id int NOT NULL AUTO_INCREMENT, \
                        Item varchar(255), \
                        quantity int, \
                        PRIMARY KEY (Id) );";

const item_add1 = "INSERT INTO Item (Item, quantity) VALUES ('product 1', 10)";
const item_add2 = "INSERT INTO Item (Item, quantity) VALUES ('product 2', 20)";

app.get("/get_item", function (req, res) {
  db.query(drop_item);
  db.query(create_item);
  db.query(item_add1);
  db.query(item_add2);
  const result = db.query("select * from Item");
  return res.send(result);
});

app.post("/update_quantity", function (req, res) {
  var IDs = req.body.names;
  var quantity = req.body.quantity;

  IDs.forEach((id_, index) => {
    const quan = quantity[index];
    const result1 = db.query(
      `UPDATE Item SET quanity = ${quan} WHERE Id = ${id_};`,
    );
  });

  return res.send("");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
