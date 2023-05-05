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
          <p>UX designer & web developer based in Manchester.</p>
          <Link className="btn" to="/project">Project Portfolio</Link>
        </div>

        <div className="image">
          <img src="/banner.png" alt="loading" id="img1" />
        </div>
      </section>

      {/* <div className="box">
        <div className="box-1">
        <img src="/gatsby-logo.png"/>
          <h3>hello1</h3>
        </div>

        <div className="box-2">
          <h3>hello2</h3>
        </div>

        <div className="box-3">
          <h3>hello3</h3>

        </div>

      </div> */}
    </Layout>
  )
}

