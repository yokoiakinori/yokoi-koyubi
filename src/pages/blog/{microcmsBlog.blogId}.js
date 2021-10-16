import * as React from "react";
import Layout from "../../components/layout.js";
import SEO from "../../components/seo.js";
import MicroCmsImage from "../../components/microcmsImage.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { graphql, Link } from "gatsby";

// markup
const BlogPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <SEO
          title={data.microcmsBlog.title}
          description={data.microcmsBlog.description}
        />
        <div className={"blogDetailWrapper"}>
          <div className={"blogDetailMain"}>
            <MicroCmsImage
              url={data.microcmsBlog.header_image.url}
              compress="auto=compress"
              format="auto=format"
              width="w=1300"
            />
            <h1>{data.microcmsBlog.title}</h1>
            <button className="blogCategory">
              {data.microcmsBlog.category}
            </button>
            <p className={"date"}>
              <FontAwesomeIcon icon={faClock} />
              {data.microcmsBlog.updatedAt}
            </p>
            <div
              className={"contents"}
              dangerouslySetInnerHTML={{
                __html: `${data.microcmsBlog.contents}`,
              }}
            ></div>
          </div>
          <div className={"blogDetailSub"}></div>
        </div>
      </Layout>
    </main>
  );
};

export const query = graphql`
  query ($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      category
      contents
      updatedAt(formatString: "YYYY/MM/DD")
      header_image {
        url
      }
    }
  }
`;

export default BlogPage;
