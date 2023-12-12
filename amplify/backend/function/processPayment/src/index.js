const { CognitoIdentityServiceProvider } = require("aws-sdk")
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "cse523486eead97_userpool_86eead97-cse";
const stripe = require("stripe")("sk_test_51L9dl4F8DRl4m1alq9Va4I4SEZtGQY7aoIPVNTR063IHoXKfiHjDPABK3dboKrUtikqbHLruQEfEXJSJB1HiQyv4005MkaDqc3");

/**
 * Get user email
 * @param {*} event 
 * @returns 
 */
const getUserEmail = async (event) => {
    const params = {
        UserPoolId: USER_POOL_ID,
        Username: event.identity.claims.username
    };
    const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
    const { Value: email } = user.UserAttributes.find((attr) => {
        if (attr.Name === "email") {
            return attr.Value;
        }
    });
    return email;
}


/**
 * Get the total price of the order
 */
exports.handler = async (event) => {
    try {
        const { id, cart, total, address, username, token } = event.arguments.input;
        const email = await getUserEmail(event);

        await stripe.charges.create({
            amount: total * 100,
            currency: "usd",
            source: token,
            description: `Order ${new Date()} by ${username} with ${email}`
        });

        return { id, cart, total, address, username, token };
    } catch (err) {
        throw new Error(err);
    }
}