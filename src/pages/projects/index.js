import { Link, graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import Img from "gatsby-image"
import "../../styles/projects.module.css"

export default function Projects( {data} ) {
  console.log("data",data);

  const projectData = data.projects.nodes;
  console.log("projectData",projectData);

  const contact = data.contact.siteMetadata.contact;
  console.log("contact",contact);

  return (
    <Layout>
      <div className="portfolio">
        <h3>Project File</h3>
        <p>Project Portfolio , I will make this project</p>

      <div className="staticData">
        {projectData.map(projects => (

          <Link to={"/projects/" + projects.frontmatter.slug} key={projects.id}>
            <div className="portfoliosData">
                <Img fluid={projects.frontmatter.thumb.childImageSharp.fluid} className="thumbImage" />
              <h3>{projects.frontmatter.title}</h3>
              <p> {projects.frontmatter.stack} </p>
            </div>
          </Link>
        ))}
      </div> 
       <div className="contact">
        <p> Like what you see? Email me at {contact} for a quote! </p>
      </div>
</div>
    </Layout>
  )
}




// export page query 
export const query = graphql`
query MyQuery {
  projects: allMarkdownRemark(sort: {frontmatter: {title: ASC}}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`
