
import React from 'react'
import Layout from '../components/layout'
import PropTypes from "prop-types"
import Header from '../components/header'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'
import { graphql } from 'gatsby'

 
const IndexPage = ( {data} ) => {

  return (
    <Layout pageTitle="Markus Laine">
      
      <Header/>
      <About />
      <Projects content={data.projects.nodes}/>
      <Contact/>
      <Footer/>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage


export const pageQuery = graphql`
query MyQuery {
  projects: allMarkdownRemark(sort: {fields: frontmatter___key, order: ASC}) {
  
    nodes {
      frontmatter {
        link
        link_text
        github
        github_text
        subtitle
        title
        key
        image {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              )
          }
        }  
      }
      id
      rawMarkdownBody
    }
  }
}
`


