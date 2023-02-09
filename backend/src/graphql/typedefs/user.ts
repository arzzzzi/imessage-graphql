import gql from 'graphql-tag';

const typeDefs = gql`
  type User {
    id: String
    username: String
  }
`;
