import * as React from "react";
import Layout from "../components/layout.js";
import SEO from "../components/seo.js";
import MicroCmsImage from "../components/microcmsImage.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { graphql, Link } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <SEO
          title="こゆび | 個人ブログ"
          description="技術情報中心の雑記個人ブログです。基本はサーバサイド関連の技術記事が多めかと思いますがいろいろ挑戦するつもりです！"
        />
        <div className={"blogListWrapper"}>
          <ul>
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <li key={node.blogId}>
                <Link to={`/blog/${node.blogId}`} className={"blogListItem"}>
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
