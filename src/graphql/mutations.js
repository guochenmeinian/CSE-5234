/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      color
      sale
      price
      orders {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      color
      sale
      price
      orders {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      color
      sale
      price
      orders {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createItemOrder = /* GraphQL */ `
  mutation CreateItemOrder(
    $input: CreateItemOrderInput!
    $condition: ModelItemOrderConditionInput
  ) {
    createItemOrder(input: $input, condition: $condition) {
      id
      item_id
      order_id
      item {
        id
        title
        description
        image
        color
        sale
        price
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        customerEmail
        date
        total
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      itemOrdersId
      orderItemsId
      owner
      __typename
    }
  }
`;
export const updateItemOrder = /* GraphQL */ `
  mutation UpdateItemOrder(
    $input: UpdateItemOrderInput!
    $condition: ModelItemOrderConditionInput
  ) {
    updateItemOrder(input: $input, condition: $condition) {
      id
      item_id
      order_id
      item {
        id
        title
        description
        image
        color
        sale
        price
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        customerEmail
        date
        total
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      itemOrdersId
      orderItemsId
      owner
      __typename
    }
  }
`;
export const deleteItemOrder = /* GraphQL */ `
  mutation DeleteItemOrder(
    $input: DeleteItemOrderInput!
    $condition: ModelItemOrderConditionInput
  ) {
    deleteItemOrder(input: $input, condition: $condition) {
      id
      item_id
      order_id
      item {
        id
        title
        description
        image
        color
        sale
        price
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        customerEmail
        date
        total
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      itemOrdersId
      orderItemsId
      owner
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      customerEmail
      date
      total
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      customerEmail
      date
      total
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      customerEmail
      date
      total
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
