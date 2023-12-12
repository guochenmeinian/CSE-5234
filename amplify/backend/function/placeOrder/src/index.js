const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const ORDER_TABLE = "Order-5omvot7ybzgrti3of3ipbicle4-dev";
const ORDER_TYPE = "Order";
const PRODUCT_ORDER_TABLE = "ProductOrder-5omvot7ybzgrti3of3ipbicle4-dev";
const PRODUCT_ORDER_TYPE = "ProductOrder";

const createOrder = async (payload) => {
  const { order_id, username, email, total } = payload;
  var params = {
    TableName: ORDER_TABLE,
    Product: {
      id: order_id,
      __typename: ORDER_TYPE,
      customer: email,
      user: username,
      total: total,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    }
  };
  console.log(params);
  await documentClient.put(params).promise();
};

const createProductOrder = async (payload) => {
  let productOrders = [];
  for (let i = 0; i < payload.cart.length; i++) {
    const cartItem = payload.cart[i];
    productOrders.push({
      PutRequest: {
        Item: {
          id: uuidv4(),
          __typename: PRODUCT_ORDER_TYPE,
          product_id: cartItem.id,
          order_id: payload.order_id,
          customer: payload.email,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      }
    });
  }
  let params = {
    RequestItems: {}
  };
  params["RequestItems"][PRODUCT_ORDER_TABLE] = productOrders;
  console.log(params);
  await documentClient.batchWrite(params).promise();
};

const updateInventory = async (cartItems) => {
  const updatePromises = cartItems.map(item => {
    const params = {
      TableName: INVENTORY_TABLE,
      Key: { product_id: item.id },
      UpdateExpression: "set quantity = quantity - :q",
      ExpressionAttributeValues: {
        ":q": item.amount,
      }
    };
    return documentClient.update(params).promise();
  });

  await Promise.all(updatePromises);
};

/*
 * Get order details from processPayment lambda
 * Create an order
 * Link items to the order - Users can see the past orders and admins can view orders by user
 * Email the invoice (Will be added later)
 */
exports.handler = async (event) => {
  try {
    let payload = event.prev.result;
    payload.order_id = uuidv4();

    // create a new order
    await createOrder(payload);

    // links items with the order
    await createProductOrder(payload);

    // Update inventory
    await updateInventory(payload.cart);

    // Note - You may add another function to email the invoice to the user

    return "SUCCESS";
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};