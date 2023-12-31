# CSE 5234 E-commerce Application

Welcome to our e-commerce application for the CSE 5234 course. We built this full-stack application using Node.js and AWS Amplify for the backend and React.js for the frontend.
The deployment is available [here](https://main.d3og35m6b202fa.amplifyapp.com). 


## Project Overview

In this project, we aimed to create a seamless online shopping experience by implementing various functionalities that are essential for an e-commerce platform. 


## Structure

- **Frontend:** React.js with [Material-UI](https://mui.com/) for the user interface.
- **Backend:** Node.js with Express.js for handling API requests, AWS Amplify for building GraphQL API and serverless functions, and AWS SNS for messags delivery from publishers to subscribers.
- **Database:** AWS DynamoDB (text data) and S3 bucket (image) on aws

Below is a graphical representation of our structure

![image](public/other-images/rm-hub-architecture.png)


## Local / Frontend Environment


## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

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



## Remote / Backend Environment

## AWS Amplify

This section provides a quick start guide to using AWS Amplify for building scalable and secure cloud-powered applications. AWS Amplify is a development platform that simplifies the process of building and deploying full-stack applications on the cloud. Since Amplify is based on AWS configuration, you probably can't directly start the project unless I give you permission for using my account. Instead, you may need to start over with the following commands and manually create the functions by youself (refer to the **amplify** folder for details on how we implement the backend services).


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


## Database Design

AWS DynamoDB: A NoSQL database service, used for storing structured data with low-latency access.
AWS S3 (Simple Storage Service): An object storage service, used for storing and retrieving large files such as images.

### Access Patterns
Retrieve all products for listing on the website.
Fetch individual product details, including image from S3.
Update inventory levels after a purchase.
Place a new order and update the Order table.
Retrieve user order history.


### How to Add/Edit/Delete product

1. create an account and login on /admin
2. add administrator permission to user in AWS Amplify website
3. login in to perform operations


## Team Members
Chenmeinian Guo,
Jiaqian Huang,
Hannes Scutt
