/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onCreateInventory(filter: $filter) {
      id
      product {
        id
        title
        description
        image
        onSale
        price
        createdAt
        updatedAt
        productInventoryId
        __typename
      }
      product_id
      quantity
      reorderLevel
      lastUpdated
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onUpdateInventory(filter: $filter) {
      id
      product {
        id
        title
        description
        image
        onSale
        price
        createdAt
        updatedAt
        productInventoryId
        __typename
      }
      product_id
      quantity
      reorderLevel
      lastUpdated
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onDeleteInventory(filter: $filter) {
      id
      product {
        id
        title
        description
        image
        onSale
        price
        createdAt
        updatedAt
        productInventoryId
        __typename
      }
      product_id
      quantity
      reorderLevel
      lastUpdated
      createdAt
      updatedAt
      __typename
    }
  }
`;
