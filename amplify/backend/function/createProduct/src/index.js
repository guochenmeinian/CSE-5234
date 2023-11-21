const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const PRODUCT_TABLE = "Product-ddgqbfwy6zhwnkfzuc6hcwsaqm-cse";
const INVENTORY_TABLE = "Inventory-ddgqbfwy6zhwnkfzuc6hcwsaqm-cse";

exports.handler = async (event) => {
  try {
    const { id, title, description, image, price, quantity, onSale } = event.arguments.input;

    // Create Product
    await documentClient.put({
      TableName: PRODUCT_TABLE,
      Item: { id, title, description, image, price, onSale }
    }).promise();

    // Create Inventory
    await documentClient.put({
      TableName: INVENTORY_TABLE,
      Item: {
        product_id: id,
        quantity: quantity || 0,
        lastUpdated: new Date().toISOString()
      }
    }).promise();

    return { id, title, description, image, price, onSale };
  } catch (err) {
    console.error(err);
    throw new Error('Error creating product and inventory');
  }
};
