import React from "react"
import Layout from "../components/layout"
import "../styles/homaPage.css"
import { Link } from "gatsby"


export default function Home() {


  return (

    <Layout>
      <section className="header">
        <div >
          <h1>Design</h1>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Nagpur.</p>
          <Link className="btn" to="/project">Project Portfolio</Link>
        </div>

        <div className="image">
          <img src="/banner.png" alt="loading" id="img1" />
        </div>
      </section>

      <div className="box">
        <div className="box-1">
          <img src="custom-app.png" alt="loading" />
          <h2>Custom Applications</h2>
          <p>Custom and complex application development in Node JS and React.</p>
        </div>

        <div className="box-2">
          <img src="web-development.jpeg" alt="loading" />
          <h2>Web development</h2>
          <p>Create receptive and interactive websites & designs with us</p>
        </div>

        <div className="box-3">
          <img src="mobile-app.png" alt="loading" />
          <h2>Mobile App Development</h2>
          <p>Get your mobile app ideas enriched with trends and features</p>
        </div>

        <div className="box-4">
          <img src="ecommerce.png" alt="loading" />
          <h2>ECommerce Development</h2>
          <p>Get your next futuristic ecommerce solutions built by us</p>
        </div>

        <div className="box-5">
          <img src="shopify.png" alt="loading" />

          <h2>Shopify/WordPress</h2>
          <p>We are Shopify and WordPress experts</p>
        </div>

        <div className="box-6">
          <img src="seo.png" alt="loading" />
          <h2>SEO & SEM Services</h2>
          <p>Our experts test all solutions and ensure brilliant performances</p>
        </div>


      </div>
    </Layout>
  )
}

