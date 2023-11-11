# Database


## Local Development

1. **Run the data query**

```bash
git clone https://github.com/guochenmeinian/CSE-5234
npm install
npm start
```


## Remote Development


## DynamoDB

1. **Rename the table name in json files under /dynamodb folder**

Note: the table name is currently called `Item-34zdcx75mzai7d62ujozvrch3q-devguochen` but it can be override to the table name you set up from your amplify local environment which is also visible on DynamoDB table list

2. **Run the command to upload the data into DynamoDB**

```bash
cd /dynamodb
aws dynamodb batch-write-item --request-items file://{json file name}.json
```
