import * as React from "react";
import Layout from "../components/layout.js";
import { graphql, Link } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <h1>TOP</h1>
        {data.allMarkdownRemark.nodes.map((node) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
      </Layout>
    </main>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          date
          title
        }
      }
    }
  }
`;

export default IndexPage;
