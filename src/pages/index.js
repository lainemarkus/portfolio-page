
import React from 'react'
import { useEffect } from 'react'
import Layout from '../components/layout'
import PropTypes from "prop-types"
import Header from '../components/header'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import AOS from 'aos'
 
const IndexPage = ( {data} ) => {

 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

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
  projects: allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
    nodes {
      frontmatter {
        link
        subtitle
        title
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
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
