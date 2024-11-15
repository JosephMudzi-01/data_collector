/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFarmersStopOrder = /* GraphQL */ `
  query GetFarmersStopOrder($id: ID!) {
    getFarmersStopOrder(id: $id) {
      id
      name
      crop_class
      year
      amount
      date
      signature
      particulars
      growers_number
      registration
      area
      other
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFarmersStopOrders = /* GraphQL */ `
  query ListFarmersStopOrders(
    $filter: ModelFarmersStopOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFarmersStopOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        crop_class
        year
        amount
        date
        signature
        particulars
        growers_number
        registration
        area
        other
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
