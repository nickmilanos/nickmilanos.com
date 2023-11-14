import { gql } from "graphql-request";

const genericListItem = gql`
  fragment genericListItem on GenericListItem {
    text
  }
`;

export default genericListItem;
