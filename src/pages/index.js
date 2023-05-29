import React from "react"
import Layout from "../components/layout"
import "../styles/homaPage.css"
import { Link, graphql } from "gatsby"
import Contact from "./contact"
import Img from "gatsby-image"
import { useState, useEffect } from "react"

export default function Home({ data }) {


  const [resp, setResp] = useState();

  const getDataFromServer = async () => {
    const respdata = await fetch("http://localhost:1337/api/homepages?populate=*");
    const respDatafinal = await respdata.json();
    setResp(respDatafinal)
    console.log("homeresponse", respDatafinal);
  };

  useEffect(() => {
    getDataFromServer()
  }, [])


  //------ IT services ------//
  const [Service, setService] = useState();

  const GetDataFromServices = async () => {
    const serviceData = await fetch("http://localhost:1337/api/services?populate=*");
    const serviceResponse = await serviceData.json();
    const finalResponse = serviceResponse.data
    console.log("finalResponse", finalResponse)
    setService(finalResponse)
  };

  useEffect(() => {
    GetDataFromServices()
  }, [])


  //----- homeAbout -----//
  const [about, setAbout] = useState();

  const GetDataFromHomeAbout = async () => {
    let fetchData = await fetch('http://localhost:1337/api/home-abouts?populate=*');
    let aboutResponse = await fetchData.json();
    let aboutfinalresponse = aboutResponse?.data[0];
    console.log("aboutfinalresponse", aboutfinalresponse);
    setAbout(aboutfinalresponse);
  };
  useEffect(() => {
    GetDataFromHomeAbout();
  }, []);


  //------ company details ------//
  const [companyDetails, setCompanyDetails] = useState();

  const getDataCompanyDetails = async () => {
    let fetchcompanyData = await fetch("http://localhost:1337/api/company-details?populate=*");
    let companyDataResp = await fetchcompanyData.json();
    let finalcompanyresponse = companyDataResp.data[0];
    console.log("finalcompanyresponse", finalcompanyresponse)
    setCompanyDetails(finalcompanyresponse)
  }
  useEffect(() => {
    getDataCompanyDetails();
  })

  return (



    <Layout>
      <section className="header">
        <div >
          <h1>{resp?.data[0]?.attributes?.TitleMain}</h1>

          <h3>{resp?.data[0]?.attributes?.TitleSub}</h3>

          <p>{resp?.data[0]?.attributes?.Title}</p>
          <Link className="btn" to="/projects">Project Portfolio</Link>
        </div>

        <div className="image">
          <img src="http://localhost:1337/uploads/small_banner_549935aad2.png" alt="loading" id="img1" />
        </div>
      </section>



      {/* ----box-1--- */}
      <div className="box-heading">
        <h1> Our Exceptional IT Services </h1>
      </div>

      <div className="box">

        {Array.isArray(Service) && Service.map(ele => (
          <div className="box-1" key={ele.id}>
            {/* {console.log("image",ele.attributes.logo.data[0].attributes.url)} */}
            <img src={`http://localhost:1337${ele.attributes.logo.data[0].attributes.url}`} alt="loading" />
            <h2>{ele.attributes.title}</h2>
            <p>{ele.attributes.body}</p>
          </div>
        ))}


      </div>
      {/* ----/box-1/--- */}



      {/* ----section-1--- */}
      <div className="section-1">
        <div className="sec-1">
          <img src="/5-maintenance-2.png" alt="loading" />
        </div>

        <div className="sec-2">
          <Contact />
        </div>
      </div>
      {/* ----/section-1/--- */}


      {/* ----section-2--- */}
      <div className="aboutSection">
        <div className="aboutdetails">
          <h1>{about?.attributes?.title}</h1>
          <p>{about?.attributes.body}</p>
          <Link to="https://www.vowelweb.com/about-us/" target="_blank" className="btn">Learn More</Link>
        </div>

        <div className="image">
          <h3>image pending..</h3>

          {/* <img src="about-vowelweb.png" alt="loading"/> */}
        </div>
      </div>
      {/* ---/section-2/--- */}




      {/* ---componyDeatails---- */}
      <div className="companyDetails">
        <div className="grid-1">
          <h1>{companyDetails?.attributes.titleMain}</h1>
          <h2>{companyDetails?.attributes.titleSub}</h2>
          <h3>{companyDetails?.attributes.title}</h3>
          <p>We are a values-driven company, and our core values are the foundation of our business. Our mission is to help small businesses succeed by providing technology support and development that is easy to use and affordable.</p>
          <p>{companyDetails?.attributes.body}</p>

          <h3 className="values">Values</h3>
          <p className="value">Integrity</p>
          <p className="value">Transparency</p>
          <p className="value">Relationship</p>
          <p className="value">Quality</p>
        </div>

        <div className="grid-2">
          <img src="http://localhost:1337/uploads/core_values_1_d7a8ef78c7.png" alt="loading" />
        </div>
      </div>

    </Layout>
  )
}

export const query = graphql`
query banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

