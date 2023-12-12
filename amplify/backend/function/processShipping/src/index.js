const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const sns = new AWS.SNS();
const ses = new AWS.SES({ region: 'us-east-2' });

const ORDER_TABLE = 'Order-5omvot7ybzgrti3of3ipbicle4-dev';
const SNS_TOPIC_ARN = 'arn:aws:sns:us-east-2:231247894294:ShippingTopic';


const updateOrderStatus = async (orderId, status) => {
    const params = {
        TableName: ORDER_TABLE,
        Key: { id: orderId },
        UpdateExpression: 'set orderStatus = :status',
        ExpressionAttributeValues: { ':status': status },
        ReturnValues: 'UPDATED_NEW'
    };

    return documentClient.update(params).promise();
};

const sendSNSTopic = async (message, orderId) => {
    const params = {
        TopicArn: SNS_TOPIC_ARN,
        Message: message,
        Subject: `Order Update for ${orderId}`
    };
    await sns.publish(params).promise();
};

const sendEmailUsingSES = async (toEmailAddress, subject, message) => {
    const params = {
        Destination: {
            ToAddresses: [toEmailAddress],
        },
        Message: {
            Body: {
                Text: { Data: message },
            },
            Subject: { Data: subject },
        },
        Source: 'guo.2034@osu.edu', // Replace with your "From" email address
    };

    await ses.sendEmail(params).promise();
};

exports.handler = async (event) => {
    try {
        const messageBodyString = event.Records[0].Sns.Message;         
        const messageBodyObject = JSON.parse(messageBodyString);         
        const { orderId, customerEmail } = messageBodyObject;
        
        await updateOrderStatus(orderId, 'SUCCESS');

        // Notify the shipping service via SNS
        const snsMessage = `Shipping process initiated for order ${orderId}`;
        await sendSNSTopic(snsMessage, orderId);

        // Send email to customer
        const emailSubject = `Your Order ${orderId} is Being Shipped`;
        const emailBody = `Your order is on its way! Your order ID is ${orderId}.`;
        await sendEmailUsingSES(customerEmail, emailSubject, emailBody);

        return {
            status: 'SUCCESS',
            message: `Shipping process initiated for order ${orderId}`
        };
    } catch (error) {
        console.error('Error processing shipping:', error);
        throw new Error('Error processing shipping');
    }
};