import { gql } from "@apollo/client";

//GraphQL query to fetch all the blogs from the backend

export const HOMEPAGE = gql`
{
  homepage{
    data {
      attributes {
       about
       picture{
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;

export const HEADER = gql`
{
  header {
    data {
      id
      attributes {
        title
      }
      }
    }
  }

`;

export const DINOSAURS = gql`
{
  dinosaurs {
     data {
      id
       attributes {
         name
         information
        title
         photo {
             data {
               attributes {
                 url
               }
             }
           }
       }
       }
     }
   }
   `;


export const PERIODS = gql`
   {
    periods {
       data {
        id
         attributes {
          name 
          doba
          information
         climate
          flora
          picture {
                   data {
                     attributes {
                       url
                     }
                   }
          }
          carousel {
            banner {
                 id
                 photo {
                   data {
                     attributes {
                       url
                     }
                   }
                 }
                 info
                 link
               }
             } 
           
         }
         }
       }
     }
     `;



export const PERIOD = gql`
query Period($id: ID!) {
  period(id: $id) {
data {
      id
       attributes {
        name 
        doba
        information
       climate
        flora
        picture {
                 data {
                   attributes {
                     url
                   }
                 }
        }
        carousel {
          banner {
               id
               photo {
                 data {
                   attributes {
                     url
                   }
                 }
               }
               info
               link
             }
           } 
         
       }
       }
     }
   }
        
       `;
