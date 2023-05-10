import React from "react"
import Layout from "../components/layout"
import "../styles/homaPage.css"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home({data}) {
console.log(data)
  return (

    <Layout>
      <section className="header">
        <div >
          <h1>Design</h1>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in India.</p>
          <Link className="btn" to="/projects">Project Portfolio</Link>
        </div>

        <div className="image">
          {/* <img src="/static/banner.png" alt="loading" id="img1" /> */}
          <Img fluid={data.file.childImageSharp.fluid}/>
        </div>
      </section>

      {/* ----box-1--- */}
      <div className="box-heading">
     <h1> Our Exceptional IT Services </h1>
      </div>

      <div className="box">
        <div className="box-1">
          <img src="/custom-app.png" alt="loading" />
          <h2>Custom Applications</h2>
          <p>Custom and complex application development in Node JS and React.</p>
        </div>

        <div className="box-2">
          <img src="/web-development.jpeg" alt="loading" />
          <h2>Web development</h2>
          <p>Create receptive and interactive websites & designs with us</p>
        </div>

        <div className="box-3">
          <img src="/mobile-app.png" alt="loading" />
          <h2>Mobile App Development</h2>
          <p>Get your mobile app ideas enriched with trends and features</p>
        </div>

        <div className="box-4">
          <img src="/ecommerce.png" alt="loading" />
          <h2>ECommerce Development</h2>
          <p>Get your next futuristic ecommerce solutions built by us</p>
        </div>

        <div className="box-5">
          <img src="/shopify.png" alt="loading" />

          <h2>Shopify/WordPress</h2>
          <p>We are Shopify and WordPress experts</p>
        </div>

        <div className="box-6">
          <img src="/seo.png" alt="loading" />
          <h2>SEO & SEM Services</h2>
          <p>Our experts test all solutions and ensure brilliant performances</p>
        </div>
      </div>
      {/* ----/box-1/--- */}


      {/* ----section-1--- */}
      <div className="section-1">
        <div className="sec-1">
          <img src="/5-maintenance-2.png" alt="loading" />
        </div>

        <div className="sec-2">
          <h1>Let's Talk</h1>
          <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" placeholder="Current website (if exists)" />
            <input type="text" placeholder="Subject"/>
            <textarea name="message" placeholder="Message" className="message"/>
          </form>
          <button type="button" className="btn">Submit Now</button>
        </div>
      </div>
      {/* ----/section-1/--- */}


      {/* ----section-2--- */}
      <div className="aboutSection">
        <div className="aboutdetails">
          <h1>About VowelWeb</h1>
          <p>Your success-driving partner for high-quality web/app development and marketing solutions.</p>
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
          <h1>COMPANY CORE VALUES</h1>
          <h2>Summary Here</h2>
          <h3>Company Core Values</h3>
          <p>We are a values-driven company, and our core values are the foundation of our business. Our mission is to help small businesses succeed by providing technology support and development that is easy to use and affordable.</p>

          <h3 className="values">Values</h3>
          <p className="value">Integrity</p>
          <p className="value">Transparency</p>
          <p className="value">Relationship</p>
          <p className="value">Quality</p>
        </div>

        <div className="grid-2">
          <img src="/core-values-1.png" alt="loading"/>
        </div>
      </div>
            {/* ---/componyDeatails/---- */}


      {/* ---footerSection---- */}
      <div className="footerSection">
        <div className="col-1">
          <h2>Production</h2>
          <ul>
            <li><Link to="https://www.vowelweb.com/node-js-development/" className="foo" target="_blank">Node JS Development</Link></li>
            <li><Link to="https://www.vowelweb.com/mobile-application/" className="foo" target="_blank">Mobile Application</Link></li>
            <li><Link to="https://www.vowelweb.com/php-platforms/" className="foo" target="_blank">PHP Platforms</Link></li>
            <li><Link to="https://www.vowelweb.com/product-design-and-development/" className="foo" target="_blank">Product design and development</Link></li>
            <li><Link to="https://www.vowelweb.com/wordpress/" className="foo" target="_blank">WordPress</Link></li>
            <li><Link to="https://www.vowelweb.com/shopify/" className="foo" target="_blank">Shopify</Link></li>
          </ul>
        </div>
        <div className="col-2" >
          <h2>Company</h2>
          <ul>
            <li><Link to="https://www.vowelweb.com/about-us/" className="foo" target="_blank">About</Link></li>
            <li><Link to="https://www.vowelweb.com/career/" className="foo" target="_blank">Work With Us</Link></li>
            <li><Link to="https://www.vowelweb.com/wall-of-fame/" className="foo" target="_blank">Wall of Fame</Link></li>
            <li><Link to="https://www.vowelweb.com/privacy-policy/" className="foo" target="_blank">Privacy Policy</Link></li>
            <li><Link to="https://www.vowelweb.com/terms/" className="foo" target="_blank">Terms and Conditions</Link></li>
            <li><Link to="https://www.vowelweb.com/terms/" className="foo" target="_blank">  Cookies Policy</Link></li>
          </ul>
        </div>

        <div className="col-3">
          <h2>Recent Posts</h2>
          <ul>
            <li><Link to="https://www.vowelweb.com/safeguarding-data-from-unauthorized-get/" className="foo" target="_blank">Safeguarding Data From Unauthorized get</Link></li>
            <li><Link to="https://www.vowelweb.com/ant-virus-for-i-phone-what-you-need-to-know/" className="foo" target="_blank">Ant-virus For i phone – What You Need to Know</Link></li>
            <li><Link to="https://www.vowelweb.com/ways-to-prepare-for-firm-annual-basic-meetings/" className="foo" target="_blank">Ways to Prepare For Firm Annual Basic Meetings</Link></li>
          </ul>
        </div>
      </div>
      {/* ---/footerSection/---- */}

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

