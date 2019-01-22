import React from 'react'
import { Link, graphql } from 'gatsby'
import './post.css';
import Layout from '../components/layout'
import Header from '../components/header'
import Pijltje from '../components/Pijltje'
import Img from 'gatsby-image';

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (

      
<div>
<Header/>
  <div className='homeContainer'>
  <div className='hoofdFotoContainer'>
    <div className='hoofdFoto'>
    
      <div className='hoofdFotoTekst'>
        <div className='quote'><h2>Reizen is de enige uitgave</h2></div>
        <div className='quote'><h2>waarvan heel je gezin</h2></div>
        <div className='quote'><h2>rijker wordt</h2></div> 
      </div>
    </div>
    <Pijltje/>
  </div>

  </div>
 
  <Layout>
 
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} key={i} className="link" >



          <div className="post-list">
            
            <h1>{node.frontmatter.title}</h1>
            <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
            {/* <span>{node.frontmatter.date}</span> */}
            {/* <p>{node.excerpt}</p> */}
          </div>
        </Link>
      ))}
    </Layout>
    </div>   


  
  )
}

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
          }
          }
        }
      }
    }
  }
`