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
    			<p>Hi! I’m Ellen and I like making new things.</p>
				<p>I’m working on Dark, with the goal of empowering the next billion developers. We’re starting by making it easy to build backend web services. You could say it's deployless! <a href="https://darklang.com">More</a>.</p>
				<p>Before this, I worked on <a href="http://www.lola.com">Lola</a>, <a href="http://www.kickstarter.com">Kickstarter</a>, and Office Mobile.</p>
				<p>I advise and invest with <a href="http://www.flybridge.com">Flybridge</a> and <a href="http://www.parcelb.vc">parcelb.vc</a>.</p>
				<p>I <Link to="/writing">write</Link>, <Link to="/speaking">speak</Link>, and <a href="https://www.goodreads.com/user/show/1952043-ellen-chisa">read lots of books</a>.</p>
				<p>You can find me on <a href="http://www.twitter.com/ellenchisa">Twitter</a> and <a href="http://www.instagram.com/ellenchisa">Instagram</a> or <a href="mailto:ellen.chisa@gmail.com">email me</a>.</p>
    		</div>
   			
   		</div>
      </div>
  </Layout>
)

export default IndexPage
