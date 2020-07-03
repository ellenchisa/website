import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import speakingImage from "../images/speaking.jpg"

const SpeakingPage = () => (

  <Layout>
    <div id="container">
      <div id="title">
        <h1>Speaking</h1>
      </div>

      <div className="row">
        <div className="six columns">
        <img src={speakingImage} alt="ellenheadshot" className="u-max-full-width"></img>
          <p><a href="https://www.ellenchisa.com">Ellen Chisa</a> speaks about startups, software development, and leadership. You can read about her talk development process on the <a href="http://www.5050pledge.com/ellen-chisa/">50/50 pledge</a> or contact her for bookings: <a href="mailto:ellen.chisa@gmail.com">ellen.chisa@gmail.com</a>.</p>

          <p>Current talks:</p>
          <ul>
            <li>Programming in Production: Programming directly in production is the tightest possible development loop, with immediate feedback which brings a sense of joy to programming. But it also raises a visceral fear of breaking production traffic, losing data and transactions, and harming users. This talk discusses how we could potentially create an environment for safe, live coding of backend systems.</li>

            <li>Can Accidental Complexity be Tamed?: Backends are simple concepts. We need to receive data, process it, store it, and send data to other systems. Why do we build them with massive complex systems comprising Kubernetes, Docker, Git, load balancers, dozens of AWS services, SQL, NoSQL, Kafka, Unix, GraphQL, gRPC, npm, Heroku, DNS, memcached, and Nginx. Complex backends can be built with much simpler tools, and this talk discusses how that might happen.</li>

            <li>Courses: Ellen has also developed a full length <a href="https://blog.ellenchisa.com/pm-olin-syllabus-47720abef015">Product course for engineers</a> and revised an interface design course for engineers at <a href="http://www.olin.edu">Franklin W. Olin College of Engineering</a>. Historically she spoke about learning in product, balancing post PMF roadmaps, and thinking about vision vs. management for product leadership.</li>
          </ul>

        </div>

        <div className="six columns">

          <h4>Bio and Speaker Photos</h4>
          <p>Bio is currently being updated, please request a copy.</p>
                <p><a href="https://drive.google.com/drive/folders/0Bwvca-1ICk0oMTBtM1dsb00zZnM?usp=sharing">Speaker photos and headshots.</a></p>

            <h4>Selected Past Talks</h4>

            <ul>
              <li>CTO Summit 2019: Deployless Environments and Live Values</li>
              <li>CTO Summit 2018: Quick Product Validation Strategies by Company stage </li>
              <li>Product Leader Summit 2018: Vision vs. Management (<a href="https://www.youtube.com/watch?v=1dLHSmLF8zI">video</a>)</li>
              <li>Front Utah 2017: Balance: Prioritizing your roadmap across product stages (<a href="Balance: Prioritizing your roadmap across product stages">video</a>)</li>
              <li>Product Tank NYC: Learning in Product (<a href="https://www.mindtheproduct.com/2017/03/learning-product-ellen-chisa-producttank-nyc/">video</a>)</li>
              <li><a href="http://www.mikevolpe.com/growth-camp">Growth Camp</a> Boston 2016: Consumer Apps: When (and How) to Grow? </li>
              <li><a href="http://2015.indsum.com/">Industry</a> 2015: Launching: Using Checklists at Industry Summit</li>
              <li>#ProductSF 2015: The Careful Balance Between Product and Art (<a href="https://www.youtube.com/watch?v=nj9VGfWNHZg">video</a>)</li>
              <li>Skillshare: Fundamentals of Product Management (<a href="http://skl.sh/1TmPAEQ">video</a>)</li>

            </ul>

            <h4>Testimonials</h4>
            <ul>
              <li>"Someone came up to me at the reception and said "I felt like I got a glimpse into the future" - Douglas Ferguson, organizer of 2019 Austin CTO Summit, and Founder and President, <a href="https://voltagecontrol.com">Voltage Control</a></li>
              <li>"Ellen was exactly what we were looking for in a speaker when we invited her to speak at Industry 2015.  Her talk was instantly an audience-favorite, and she was a pleasure to work with and get to know.  We were quite lucky to feature Ellen as a part of our lineup!"</li>
              <li>"Ellen was a perfect fit for our Boston Women in Product panel. She joined women in various stages of their career and provided the audience with product career advice. She connected with our community instantly, sharing insights from her experience and elevating the discussions with a fresh perspective. Ellen was so easy to work with and we hope we have her join again soon!”</li>
            </ul>

        </div>
    </div>
    </div>
  </Layout>
)

export default SpeakingPage
