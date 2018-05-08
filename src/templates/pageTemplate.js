import React from "react";
import Helmet from 'react-helmet'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="page-container">
      <Helmet
        title={'JMac - ' + frontmatter.title}
        meta={[
          { name: 'description', content: 'jmac' },
          { name: 'keywords', content: 'jmac, zone' },
        ]}
      />
      <div className="page">
        <h1 style={{marginBottom: '.5rem'}}>{frontmatter.title}</h1>
        <p>{frontmatter.techStack}</p>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        techStack
      }
    }
  }
`;