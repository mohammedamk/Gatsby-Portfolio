import React, { useState } from "react";
import Layout from "../components/layout";
import "../styles/global.css"
import { graphql } from "gatsby";
import Img from "gatsby-image"
import "../styles/about-details.css"
import { useEffect } from "react";

export default function About({ data }) {

  const [resp, setResp] = useState();


  const getDataFromServer = async () => {
    const respdata = await fetch("http://localhost:1337/api/abouts?populate=*");
    const respDatafinal = await respdata.json();
    setResp(respDatafinal)
    console.log("response", respDatafinal);
  };

  useEffect(() => {
    getDataFromServer()
  }, [])

  return (
    <Layout>
      <div className="about-heading">
        <p>We’re innovative. We’re passionate.</p>
        <p>We’re VowelWeb.</p>
      </div>
      <div className="about-section">

        <div className="row-1">
          <div className="row-1-image">
            <img alt="tum mere sath raho" src="http://localhost:1337/uploads/about_1_6bdbeaa88e.png" />
          </div>

          <div className="row-1-details">
            <h2>{resp?.data[0]?.attributes?.title}</h2>
            <p>{resp?.data[0]?.attributes?.body}</p>
          </div>
        </div>

        <div className="row-2">
          <div className="row-2-details">
            {/* <h2>What do we do?</h2> */}
            <h2>{resp?.data[1]?.attributes?.title}</h2>

            <p>{resp?.data[1]?.attributes?.body}</p>

          </div>

          <div className="row-2-image">
            {/* <Img fluid={data.file2.childImageSharp.fluid} /> */}
            <img alt="tum mere sath raho" src="http://localhost:1337/uploads/medium_about_2_7eb13b06b5.jpg" />

          </div>
        </div>

      </div>

    </Layout>
  )
}




export const query = graphql`
  query image1AndImage2AndImage3 {
    file1: file(relativePath: {eq: "about-1.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file2: file(relativePath: {eq: "about-2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file3: file(relativePath: {eq: "about-3.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
