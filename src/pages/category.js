import * as React from "react";
import Layout from "../components/layout.js";
import { graphql, Link } from "gatsby";

// markup
const CategoryPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <h1>TOP</h1>
        <ul>
          {data.allMicrocmsBlog.edges.map(({ node }) => (
            <li key={node.blogId}>
              <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
            </li>
          ))}
        </ul>
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
