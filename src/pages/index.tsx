import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import landingImage from "../images/landing.jpg"

const IndexPage = () => (
  <Layout>
    <div id="container">
			<div id="title">
			<h1> Ellen Chisa </h1>
			</div>

		<div className="row">
    		<div className="six columns">
   				<img src={landingImage} alt="ellenheadshot" className="u-max-full-width"></img>
   			</div>

    		<div className="six columns">
				<p>Hi! I’m Ellen and I'm doing something new. I'm not sure what it is yet, but sometimes I share <a href="/log">notes</a> about it.</p>
				<p>I like building experiences and interfaces. Before this, I started <a href="https://darklang.com">Dark</a>, a programming language coupled to its editor and infra. I was the first person at <a href="https://lola.com">Lola</a>, where we combined the best of technology and people for travel planning. I worked on Kickstarter, and on the first versions of Office Mobile for non-Windows platforms.</p>
				<p>I advise and invest in startups, sometimes working with <a href="http://www.flybridge.com">Flybridge</a> and <a href="http://www.parcelb.vc">parcelb.vc</a>.</p>
				<p>I <Link to="/writing">write</Link>, <Link to="/speaking">speak</Link>, and <a href="https://www.goodreads.com/user/show/1952043-ellen-chisa">read lots of books</a>. You can find me on <a href="http://www.twitter.com/ellenchisa">Twitter</a> and <a href="http://www.instagram.com/ellenchisa">Instagram</a> or <a href="mailto:ellen.chisa@gmail.com">email me</a>.</p>
    		</div>
   			
   		</div>
      </div>
  </Layout>
)

export default IndexPage
