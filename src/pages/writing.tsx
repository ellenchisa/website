import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import writingImage from "../images/writing.jpg"

const WritingPage = () => (
  <Layout>
    <div id="container">
      <div id="title">
        <h1>Writing</h1>
      </div>

      <div className="row">
        <div className="six columns">
        <img src={writingImage} alt="ellenheadshot" className="u-max-full-width"></img>
          <p><a href="https://www.ellenchisa.com">Ellen Chisa</a> writes about startups and software development. She has been published in <a href="http://firstround.com/review/the-magical-benefits-of-the-quitters-mindset">First Round Review</a>, <a href="https://stratechery.com/2016/ellen-chisa-crowdfunding-and-the-internet-an-overview-of-crowdfunding-platforms-creating-a-sustainable-crowdfunding-platform/">Stratechery</a>, and <a href="http://www.businessinsider.com/first-year-at-harvard-business-school-2015-5">Business Insider</a>. Ellen previously wrote <a href="http://book.ellenchisa.com">a book on Product Management</a>, including essays she wrote over five years.</p>
          <p>To stay up to date with her most recent articles you can follow her on <a href="https://www.medium.com/@ellenchisa">Medium</a> or on Twitter:
                <a href="https://twitter.com/@ellenchisa" className="twitter-follow-button" data-show-count="false">Follow @ellenchisa</a>
          </p>
        </div>

        <div className="six columns">

          <h4>New Writing</h4>
          <p> The easiest way to stay up to date is via <a href="http://www.twitter.com/@ellenchisa">Twitter</a> or <a href="http://www.medium.com/@ellenchisa">Medium</a>. I've recently written about <a href="https://medium.com/@ellenchisa/that-good-bf852a79e4e8">hiring</a> and <a href="https://medium.com/@ellenchisa/hbs-founders-25618b40957c">founders who come from an MBA background</a>.</p>

          <h4>Product Management Book</h4>
          <p> Ellen's book on Product Management is available for purchase <a href="http://book.ellenchisa.com">here</a>. The book includes thirty seven essays organized into seven sections (with an example from each section):</p>
          <ol>
            <li>What is Product Management? (<a href="http://queue.acm.org/detail.cfm?id=2683579">Evolution of the Product Manager</a>).</li>
            <li>How do I become a Product Manager? (<a href="http://blog.ellenchisa.com/2014/01/28/want-to-be-a-pm-do-a-project/">Want to be a PM? Do a project).</a></li>
            <li>How do I learn as a Product Manager? (<a href="https://blog.ellenchisa.com/learning-in-product-6cb06292a98c#.i1siiykgw">How to Learn in Product</a>).</li>
            <li>How do I work on a team as a Product Manager? (<a href="http://blog.ellenchisa.com/2014/10/27/pm-person-situation-style/"> PM: The Person, Situation, and Style</a>).</li>
            <li>What skills should I build as a Product Manager? (<a href="https://blog.ellenchisa.com/do-i-need-to-be-technical-to-be-a-product-manager-81cf8425a11f">Do I need to be technical to be a Product Manager?)</a></li>
            <li>How can I be a more inclusive Product Manager? (<a href="https://medium.com/@ellenchisa/minimum-bar-diversity-2b8342428de4">Minimum Bar Diversity</a>).</li>
            <li>How do I become (and grow as) a Product Leader? (<a href="https://medium.com/@ellenchisa/an-alternate-framework-for-pm-empathizing-systemizing-7abfa3716d66">An Alternate Framework for PM: Empathizing and Systemizing</a>).</li>
          </ol>

          <h4>Selected Past Writing</h4>
          <ul>
            <li><a href="https://medium.com/thelist/what-s-one-thing-you-ve-learned-at-harvard-business-school-that-blew-your-mind-fdea346a0422">The Best Lessons from Harvard Business School</a> (Business Insider)</li>
            <li><a href="http://firstround.com/review/the-magical-benefits-of-the-quitters-mindset/"> The Magical Benefits of the Quitter's Mindset</a> (First Round Review)</li>
            <li><a href="https://stratechery.com/2016/ellen-chisa-crowdfunding-and-the-internet-an-overview-of-crowdfunding-platforms-creating-a-sustainable-crowdfunding-platform/">Creating a Sustainable Crowdfunding Platform</a>(Stratechery)</li>
            <li><a href="https://blog.ellenchisa.com/how-to-read-a-lot-7b496b0b8d08">How to Read A lot</a></li>
            <li><a href="https://medium.com/@ellenchisa/networking-for-introverts-926489e34d2#.ege5p7uav">Networking for Introverts</a></li>
            <li><a href="https://medium.com/thelist/have-some-coffee-9e468d958e77"> Have some coffee (and stop worrying about finding a mentor)</a></li>
            <li><a href="https://blog.mixpanel.com/2016/10/06/ellen-chisa-uncommon-product-management-practices/">Uncommon Practices for Richer Products</a> (MixPanel)</li>
          </ul>

        </div>
      </div>
    </div>
  </Layout>
)

export default WritingPage
