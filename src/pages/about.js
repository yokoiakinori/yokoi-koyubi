import * as React from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";

const AboutPage = ({ data }) => {
  console.log(data);
  return (
    <main>
      <Layout>
        <h1>about</h1>
        <table>
          <thead>
            <tr>
              <th>パス</th>
              <th>サイズ</th>
              <th>作成時間</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.nodes.map((node) => (
              <tr>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.ctime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </main>
  );
};

export const query = graphql`
  {
    allFile {
      totalCount
      nodes {
        relativePath
        size
        ctime
      }
    }
  }
`;

export default AboutPage;
