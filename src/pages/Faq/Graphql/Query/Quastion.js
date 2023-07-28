import { gql } from '@apollo/client';
 
export const GET_ALL_QUASTIONS = gql`
query{
   answers{
    data{
      id,
      attributes{
        answer,
        qid
      }
    }    
   
  }
}

`;

export const GET_ALLQUATIONS=gql`
query {
  quastions{
    data{
      id
      attributes{
        quastion
        createdAt
        answers{
          data{
            id
            attributes{
              answer
              createdAt
              user{
                data{
                  attributes{
                    email
                  }
                }
              }
            }
          }
        }
        user{
          data{
            id
            attributes{
              username
              email
            }
          }
        }
      }
    }
    meta{
      pagination{
        total
      }
    }
  }
}
`

export const  FAV_IsExist=gql`
query getIsExist($code:String){
  favorites(filters:{uniqeid:{eq:$code}}){
    data{
      id
      attributes{
        uniqeid
      }
    }
    meta{
      pagination{
        total
      }
    }
  }
}
`



  
  