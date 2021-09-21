import * as React from "react";
import Layout from "../components/layout.js";
import { graphql, Link } from "gatsby";

// markup
const CategoryPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <p>準備中です🐈</p>
      </Layout>
    </main>
  );
};

export const query = graphql`
  {
    allMicrocmsBlog {
      edges {
        node {
          blogId
          title
        }
      }
    }
  }
`;

export default CategoryPage;
