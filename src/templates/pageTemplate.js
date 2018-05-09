import React from "react";
import Helmet from 'react-helmet'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, excerpt } = markdownRemark;
  console.log(excerpt);
  return (
    <div className="page-container">
      <Helmet
        title={'JMac - ' + frontmatter.title}
        meta={[
          { name: 'description', content:`${excerpt}` },
          { name: 'keywords', content: `${frontmatter.techStack}` },
        ]}
      />
      <article className="page">
        <header style={{marginBottom: '4rem'}}>
          <h1 style={{marginBottom: '.5rem'}}>{frontmatter.title}</h1>
          <p className="tech-stack">{frontmatter.techStack}</p>
        </header>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        techStack
      }
    }
  }
`;