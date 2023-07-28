import { gql } from '@apollo/client';

export const NEW_user = gql`
mutation registerUser($username:String!,$email:String!){
  register(
    input: {
      username: $username
      email:$email
      password: "nulggl"
    }
  ) {
    jwt
    user{
      username
      email
    }
  }
}
`



export const LOGIN_user = gql`
  mutation {
    login(
      input: { identifier: "khalidali", password: "123456", provider: "local" }
    ) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;
