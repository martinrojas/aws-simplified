/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getToDo = /* GraphQL */ `
  query GetToDo($id: ID!) {
    getToDo(id: $id) {
      id
      name
      description
      completed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listToDos = /* GraphQL */ `
  query ListToDos(
    $filter: ModelToDoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listToDos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        completed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncToDos = /* GraphQL */ `
  query SyncToDos(
    $filter: ModelToDoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncToDos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        completed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
