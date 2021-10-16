import * as React from "react";
import Layout from "../components/layout.js";
import { graphql, Link } from "gatsby";

// markup
const AboutPage = ({ data }) => {
  return (
    <main>
      <Layout className={"aboutWrapper"}>
        <h1>{data.microcmsAbout.message_title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${data.microcmsAbout.message}`,
          }}
        ></div>
        <div className={"contributor"}>
          <img
            src={data.microcmsAbout.thumbnail.url}
            alt=""
            className={"thumbnail"}
          />
          <div>
            <h4>{data.microcmsAbout.contributor_name}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: `${data.microcmsAbout.introduction}`,
              }}
              className={"introduction"}
            ></div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export const query = graphql`
  {
    microcmsAbout {
      message
      message_title
      contributor_name
      introduction
      thumbnail {
        height
        width
        url
      }
    }
  }
`;

export default AboutPage;
