import * as React from "react";
import Layout from "../../components/layout.js";
import MicroCmsImage from "../../components/microcmsImage.js";
import { graphql, Link } from "gatsby";

// markup
const BlogPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <div className={"blogWrapper"}>
          <div>
            <MicroCmsImage
              url={data.microcmsBlog.header_image.url}
              compress="auto=compress"
              format="auto=format"
              width="w=700"
              height="h=700"
            />
            <h1>{data.microcmsBlog.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: `${data.microcmsBlog.contents}`,
              }}
            ></div>
          </div>
          <div className={"blogSub"}></div>
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
      contents
      header_image {
        url
      }
    }
  }
`;

export default BlogPage;
