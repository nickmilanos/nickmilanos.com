import { gql } from "graphql-request";
import genericListItem from "./genericListItem";

const genericSectionFragment = gql`
  ${genericListItem}
  fragment genericSection on GenericSection {
    title
    subtitle
    icon {
      data {
        attributes {
          url
          name
          alternativeText
        }
      }
    }
    generic_list_items {
      data {
        attributes {
          ...genericListItem
        }
      }
    }
  }
`;

export default genericSectionFragment;
