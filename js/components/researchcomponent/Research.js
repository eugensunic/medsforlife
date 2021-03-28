import React from 'react';

import Headerfirst from './Headerfirst.js';
import Headermain from './Headermain.js';
import Stats from './Stats.js';
import Problem from './Problem.js';
import Conclusion from './Conclusion.js';
import Explanation from './Explanation.js';
import Quickstats from './Quickstats.js';

import Navbar from '../Navbar.js';
import Navfooter from '../Navfooter.js';
import Social from '../Social.js';
import { content } from './Contentobject.js';

export default class Research extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    //na 363 px ga moras izlomiti...
  }
  render() {
    //  &#39; --> apostrophe

    return (
      <div className="container">
        <Navbar />
        <Quickstats />
        <p className="title_research">Published research</p>
        <div className="row">
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="1" date={content.date0} url={content.url0} show_pdf={false} />
              <Headermain heading={content.heading0} image={content.image0} info_content={content.info_content0} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="2" date={content.date1} show_pdf={false} />
              <Headermain heading={content.heading1} url={content.url1} image={content.image1} info_content={content.info_content1} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="3" date={content.date2} show_pdf={false} />
              <Headermain heading={content.heading2} url={content.url2} image={content.image2} info_content={content.info_content2} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="4" date={content.date3} show_pdf={false} />
              <Headermain heading={content.heading3} url={content.url3} image={content.image3} info_content={content.info_content3} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="5" date={content.date4} show_pdf={false} />
              <Headermain heading={content.heading4} url={content.url4} image={content.image4} info_content={content.info_content4} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="6" date={content.date5} show_pdf={false} />
              <Headermain heading={content.heading5} url={content.url5} image={content.image5} info_content={content.info_content5} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="7" date={content.date6} show_pdf={false} />
              <Headermain heading={content.heading6} url={content.url6} image={content.image6} info_content={content.info_content6} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="8" date={content.date7} show_pdf={false} />
              <Headermain heading={content.heading7} url={content.url7} image={content.image7} info_content={content.info_content7} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="9" date={content.date8} show_pdf={false} />
              <Headermain heading={content.heading8} url={content.url8} image={content.image8} info_content={content.info_content8} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="10" date={content.date9} show_pdf={false} />
              <Headermain heading={content.heading9} url={content.url9} image={content.image9} info_content={content.info_content9} />
            </div>
          </div>
        </div>
        <Social shown={true} />
        <Navfooter />
      </div>
    );
  }
}
