import * as React from "react";
import Layout from "../components/layout.js";
import MicroCmsImage from "../components/microcmsImage.js";
import { graphql, Link } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <div className={"blogWrapper"}>
          <ul>
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <li key={node.blogId}>
                <Link to={`/blog/${node.blogId}`} className={"blogItem"}>
                  <MicroCmsImage
                    url={node.header_image.url}
                    compress="auto=compress"
                    format="auto=format"
                    width="w=450"
                    height="h=450"
                  />
                  <div>
                    <p>{node.title}</p>
                    <button>{node.category}</button>
                    <p className={"date"}>{node.createdAt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className={"blogSub"}></div>
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
