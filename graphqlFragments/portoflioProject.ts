import { gql } from "graphql-request";

const portfolioProjectFragment = gql`
  fragment portfolioProject on PortfolioProject {
    Title
    Description
    Link
    Preview {
      data {
        attributes {
          url
          name
          alternativeText
        }
      }
    }
  }
`;

export default portfolioProjectFragment;
