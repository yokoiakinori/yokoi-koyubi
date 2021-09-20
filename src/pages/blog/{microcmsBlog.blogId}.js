import * as React from "react";
import Layout from "../../components/layout.js";
import { graphql, Link } from "gatsby";

// markup
const BlogPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <h1>{data.microcmsBlog.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${data.microcmsBlog.contents}`,
          }}
        ></div>
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
    }
  }
`;

export default BlogPage;
