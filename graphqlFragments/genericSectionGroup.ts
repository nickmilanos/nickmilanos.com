import { gql } from "graphql-request";
import genericSectionFragment from "./genericSection";

const genericSectionGroupFragment = gql`
  ${genericSectionFragment}
  fragment genericSectionGroup on GenericSectionGroup {
    title
    generic_sections {
      data {
        attributes {
          ...genericSection
        }
      }
    }
  }
`;

export default genericSectionGroupFragment;
