import * as React from "react";
import Layout from "../components/layout.js";
import { graphql, Link } from "gatsby";

// markup
const AboutPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <h1>{data.microcmsAbout.message_title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${data.microcmsAbout.message}`,
          }}
        ></div>
      </Layout>
    </main>
  );
};

export const query = graphql`
  {
    microcmsAbout {
      message
      message_title
    }
  }
`;

export default AboutPage;
