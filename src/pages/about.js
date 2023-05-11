import React from "react";
import Layout from "../components/layout";
import "../styles/global.css"
import { graphql } from "gatsby";
import Img from "gatsby-image"
import "../styles/about-details.css"

export default function About({ data }) {
    console.log("aboutdetail", data)
    return (
        <Layout>
        <div className="about-heading">
            <p>We’re innovative. We’re passionate.</p>
            <p>We’re VowelWeb.</p>
        </div>
            <div className="about-section">

                <div className="row-1">
                    <div className="row-1-image">
                        <Img fluid={data.file1.childImageSharp.fluid} />
                    </div>
                    <div className="row-1-details">
                        <h2>When We started?</h2>
                        <p>Established in the year 2013, Vowelweb LLP has emerged as one of the prestigious Web Design & Development companies in India as of today. Credit goes to the engineering and technological skills of its founders who implemented the professional knowledge by putting it into practice. Since its inception, Vowelweb LLP has been proving constantly through its professional workforce experts in the areas of web development engineering, management as well as Digital Marketing. With a high level of client satisfaction we are not only restricted to the Indian Territory but all over the world, Vowelweb is a trusted mark as of today when it comes to the business partners as well as expansion.</p>
                    </div>
                </div>

                <div className="row-2">
                    <div className="row-2-details">
                        <h2>What do we do?</h2>
                        <p>
                            With time, we have developed a sound international client base associated with us for different projects that are being delivered to them on a timely basis. Some of these include WordPress themes, plugin development, payment gateway integration and PHP work. We also offer all possible features that can be provided in web pages which include Search Engine Optimization (SEO) and pay-per-click services. Vowel web programming team has a wide experience in PHP, JavaScript, and Dot net. Our team operates on various types of Content Management System (CMS) such as WordPress, Joomla, Magento, Shopify, Click Funnel, Squarespace, Wix, Bigcommerce, WooCommerce, Moodle, and Prestashop. Our goal is to be the result-driven web Development Company in the world.
                        </p>
                    </div>

                    <div className="row-2-image">
                        <Img fluid={data.file2.childImageSharp.fluid} />
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
