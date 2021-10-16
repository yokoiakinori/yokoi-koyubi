import * as React from "react";
import Layout from "../components/layout.js";
import MicroCmsImage from "../components/microcmsImage.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { graphql, Link } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <div className={"blogWrapper"}>
          <ul>
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <li key={node.blogId} className={"blogListItem"}>
                <Link to={`/blog/${node.blogId}`} className={"blogItem"}>
                  <MicroCmsImage
                    url={node.header_image.url}
                    compress="auto=compress"
                    format="auto=format"
                    width="w=500"
                    height="h=450"
                  />
                  <div>
                    <h2>{node.title}</h2>
                    <button className="blogCategory">{node.category}</button>
                    <p className={"date"}>
                      <FontAwesomeIcon icon={faClock} />
                      {node.updatedAt}
                    </p>
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
    allMicrocmsBlog(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          blogId
          title
          category
          updatedAt(formatString: "YYYY/MM/DD")
          header_image {
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
