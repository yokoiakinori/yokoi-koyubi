import * as React from "react";
import Layout from "../../components/layout.js";
import SEO from "../../components/seo.js";
import MicroCmsImage from "../../components/microcmsImage.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { graphql, Link } from "gatsby";

import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";

// markup
const BlogPage = ({ data }) => {
  const contentBody = cheerio.load(`${data.microcmsBlog.contents}`);
  contentBody("pre code").each((_, elm) => {
    const result = hljs.highlightAuto(contentBody(elm).text());
    contentBody(elm).html(result.value);
    contentBody(elm).addClass("hljs");
  });

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
                __html: contentBody.html(),
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
