import { gql } from '@apollo/client';
 
 
export const ADD_FAVORATE =gql`
mutation createFavorite($userid:String,$quastionsid:String,$uuid:String) {
  createFavorite(data: {user :$userid,qid:$quastionsid,uniqeid:$uuid}) {
    data{
      id
      }
    }
  }
  `
