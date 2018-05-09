import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ArrowExternal from '../components/Icons/ArrowExternal'

export default function IndexPage({data}){
  const {edges: posts} = data.allMarkdownRemark;
  let content;
  return ( 
    <div>
      <Helmet
        title="JMac - Home"
        meta={[
          { name: 'description', content: 'new york based front end developer, ui engineer, ux engineer' },
          { name: 'keywords', content: 'html, css, javascript, angular, react, front end developer, ui engineer, ux engineer' },
        ]}
        bodyAttributes={{
          class: 'home'
        }}
      />
      {posts.filter(post => post.node.frontmatter.title.length > 0)
        .map(({node: post}) => {
          if (post.frontmatter.externalLink !== null) {
            content = (
              <div>
                <div style={{marginBottom: '2.5rem'}} dangerouslySetInnerHTML={{ __html: post.html}}></div>
                <a className="text-link text-link--ext" href={post.frontmatter.externalLink}><span>View Project</span><ArrowExternal color="#00ADEE"></ArrowExternal></a>
              </div>
            );
          } else {
            content = (
              <div>
                <p style={{ marginBottom: '2.25rem' }}>{post.excerpt}</p>
                <Link to={post.frontmatter.path}>View Project</Link>
              </div>
            )
          }
          return (
            <article className="project-preview" key={post.id} style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid lightgray' }}>
              <header style={{marginBottom: '2.25rem'}}>
                <h1 style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>{post.frontmatter.title}</h1>
                <p className="tech-stack">{post.frontmatter.techStack}</p>
              </header>
              {content}
            </article>
          )
        })
      }
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          html
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            category
            tags
            externalLink
            techStack
          }
        }
      }
    }
  }
`;
