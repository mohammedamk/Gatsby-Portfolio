import { Link, graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import "../../styles/projects.module.css"


export default function projects({ data }) {
console.log("data",data)
  const projects = data.allMarkdownRemark.nodes
  // console.log(projects)


  return (
    <div className="portfolio">
      <Layout>
        <h3>Project File</h3>
        <p>Project Portfolio , I will make this project</p>

        <div className="staticData">
          {projects.map(project => (
            <Link to={"/Project/" + project.frontmatter.slug} key={project.id} >
              <div className="projectData">
                <h2>{project.frontmatter.title}</h2>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>

          ))}
        </div>
      </Layout>
    </div>
  )
}

//export page query 
export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {frontmatter: {title: DESC}}) {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
      id
    }
  }
}
`