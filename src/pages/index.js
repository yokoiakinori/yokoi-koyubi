import * as React from "react";
import Layout from "../components/layout.js";
import { graphql, Link } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <div className={"mainContents"}>
          <ul>
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <li key={node.blogId}>
                <Link to={`/blog/${node.blogId}`} className={"blogItem"}>
                  <img src={node.header_image.url} alt="" />
                  <div>
                    <p>{node.title}</p>
                    <button>{node.category}</button>
                    <p className={"date"}>{node.createdAt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className={"right"}></div>
        </div>
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
          category
          createdAt(formatString: "YYYY/MM/DD")
          header_image {
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
