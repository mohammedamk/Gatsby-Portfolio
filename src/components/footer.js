import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
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
  )
}
