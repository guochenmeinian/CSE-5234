# Database


## Structure


### Product Table on DynamoDB

1. id: String
2. title: String
3. description: String
4. price: Number
5. image: String
6. createdAt: String
7. updatedAt: String
8. __typename: String


### Product Table on Local MySQL

1. id INT PRIMARY KEY
2. name VARCHAR(255)
3. description TEXT
4. price DECIMAL(10, 2)
5. image VARCHAR(255)
6. category_id INT
7. FOREIGN KEY (category_id) REFERENCES categories(id)


## Local Development

1. **Run the data query files under /local folder to add data**


## Remote Development


## Add multiple data to DynamoDB

1. **Rename the table name in json files under /dynamodb folder**

Note: the table name is currently called `Product-rojysod2vnervkfzampxmndgsa-dev` but it can be override to the table name you set up from your amplify local environment which is also visible on DynamoDB table list

2. **Run the command to upload the data into DynamoDB**

```bash
cd /dynamodb
aws dynamodb batch-write-item --request-items file://{json file name}.json
```
