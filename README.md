# CSE 5234 E-commerce Application

Welcome to our e-commerce application for the CSE 5234 course. We built this full-stack application using Node.js for the backend and React.js for the frontend.
The deployment is available [here](https://main.dor2izrbuao8w.amplifyapp.com). 


## Project Overview

In this project, we aimed to create a seamless online shopping experience by implementing various functionalities that are essential for an e-commerce platform. 


## Structure

- **Frontend:** React.js with [Material-UI](https://mui.com/) for the user interface.
- **Backend:** Node.js with Express.js for handling API requests.
- **Database:** MySql on local or DynamoDB on aws


## Local Environment


## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MySql](https://www.mysql.com/)

1. **Clone the repository**

```bash
git clone https://github.com/guochenmeinian/CSE-5234
```

2. **Install frontend components**

``` bash 
npm install
```

3. **Run the project**

```bash
npm start
```



## Remote Environment

## AWS Amplify

This section provides a quick start guide to using AWS Amplify for building scalable and secure cloud-powered applications. AWS Amplify is a development platform that simplifies the process of building and deploying full-stack applications on the cloud.


## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [AWS CLI](https://aws.amazon.com/cli/)


## Getting Started

1. **Install Amplify CLI**

   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Configure AWS Amplify**

   Run the following command and follow the prompts to set up your Amplify environment:

   ```bash
   amplify configure
   ```

   This command will prompt you to sign in to your AWS account and configure your default AWS profile.

3. **Create a New Amplify Project**

   ```bash
   amplify init
   ```

   Follow the prompts to configure your project. This command will create a new Amplify project and set up the necessary backend services.

4. **Add Backend Services**

   To add backend services such as authentication, API, and storage, use the following commands:

    - Authentication:

      ```bash
      amplify add auth
      ```

    - API:

      ```bash
      amplify add api
      ```

    - Storage:

      ```bash
      amplify add storage
      ```

   Follow the prompts to configure each service.

5. **Deploy Backend Services**

   After adding backend services, deploy your changes to the cloud:

   ```bash
   amplify push
   ```

   This command will provision the necessary AWS resources and configure your backend services.

6. **Integrate with Frontend**

   Integrate your backend services with your frontend framework (React, Angular, Vue, etc.). Use the following command to add frontend support:

   ```bash
   amplify add hosting
   ```

   Follow the prompts and deploy your frontend:

   ```bash
   amplify publish
   ```


## Additional Commands

- **View Amplify Status:**

  ```bash
  amplify status
  ```

  This command provides an overview of the current status of your Amplify project.

- **Add Functionality:**

  To add additional functionality, such as analytics, notifications, or machine learning, use the `amplify add` command followed by the service name.

- **Update and Redeploy:**

  After making changes to your project, use the following commands to update and redeploy:

  ```bash
  amplify update
  amplify push
  ```

For more detailed documentation and advanced usage, refer to the [AWS Amplify documentation](https://docs.amplify.aws/).


## AWS DynamoDB


### Products Table on DynamoDB

1. id: String
2. title: String
3. description: String
4. price: Number
5. image: String
6. createdAt: String
7. updatedAt: String
8. __typename: String


### How to Add Records of Data to DynamoDB

1. create an account and login on /admin
2. wait for the administrator of application to assign the access to the account
3. have the access to add/edit/delete a product


## Team Members
Chenmeinian Guo,
Jiaqian Huang,
Hannes Scutt
