const apiServer = require('express');
const cors = require('cors');
const app = apiServer();
const port = 5000; // Choose desired port

// Use the cors middleware
app.use(cors());

// Middleware to parse JSON requests
app.use(apiServer.json());

// API endpoints
// Get all items from inventory
// todo: connect with database and replace the sample data
app.get('/api/inventory/items', (req, res) => {
    const items = [
        { id: 1, name: 'Monitor', price: '100' },
        { id: 2, name: 'Keyboard', price: '40' },
        { id: 3, name: 'Mouse', price: '20' },
    ];

    res.json(items);
});

// Get one item from inventory
// todo: connect with database and replace the sample data
app.get('/api/inventory/items/{id}', (req, res) => {
    const item = [
        { id: 1, name: 'Monitor', price: '100' },
    ];

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
    const record = [
        { id: 1, title: 'Order 1', content: 'Content 1' },
    ];

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
