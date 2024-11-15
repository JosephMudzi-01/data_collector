/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFarmersStopOrder = /* GraphQL */ `
  mutation CreateFarmersStopOrder(
    $input: CreateFarmersStopOrderInput!
    $condition: ModelFarmersStopOrderConditionInput
  ) {
    createFarmersStopOrder(input: $input, condition: $condition) {
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
export const updateFarmersStopOrder = /* GraphQL */ `
  mutation UpdateFarmersStopOrder(
    $input: UpdateFarmersStopOrderInput!
    $condition: ModelFarmersStopOrderConditionInput
  ) {
    updateFarmersStopOrder(input: $input, condition: $condition) {
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
export const deleteFarmersStopOrder = /* GraphQL */ `
  mutation DeleteFarmersStopOrder(
    $input: DeleteFarmersStopOrderInput!
    $condition: ModelFarmersStopOrderConditionInput
  ) {
    deleteFarmersStopOrder(input: $input, condition: $condition) {
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
