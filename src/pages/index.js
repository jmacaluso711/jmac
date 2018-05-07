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
          { name: 'description', content: 'front end developer' },
          { name: 'keywords', content: 'html, css, javascript, angular, react, front end developer' },
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
                <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
                <a className="text-link text-link--ext" href={post.frontmatter.externalLink}><span>View Project</span><ArrowExternal color="#00ADEE"></ArrowExternal></a>
              </div>
            );
          } else {
            content = (
              <div>
                <p>{post.excerpt}</p>
                <Link to={post.frontmatter.path}>View Project</Link>
              </div>
            )
          }
          return (
            <div className="project-preview" key={post.id} style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid lightgray' }}>
              <h1 style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.techStack}</p>
              {content}
            </div>
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
